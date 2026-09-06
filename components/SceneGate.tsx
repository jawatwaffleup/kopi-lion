"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const KopiScene = dynamic(() => import("./KopiScene"), {
  ssr: false,
  loading: () => <div className="scene-fallback" aria-hidden="true"><span /></div>,
});

export function SceneGate() {
  const holder = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const node = holder.current;
    if (!node || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setEnabled(true);
        observer.disconnect();
      }
    }, { rootMargin: "160px" });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={holder} className="scene-shell">
      {enabled ? <KopiScene /> : <div className="scene-fallback" aria-hidden="true"><span /></div>}
      <p className="scene-caption">Drag to turn the pack</p>
    </div>
  );
}

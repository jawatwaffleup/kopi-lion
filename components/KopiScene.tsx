"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function KopiScene() {
  const mount = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = mount.current;
    if (!host) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "low-power" });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(host.clientWidth, host.clientHeight);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    host.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(32, host.clientWidth / host.clientHeight, 0.1, 100);
    camera.position.set(0, 0.1, 6.4);
    scene.add(new THREE.HemisphereLight(0xfff5e8, 0x3b2318, 2.1));
    const key = new THREE.DirectionalLight(0xffffff, 4);
    key.position.set(4, 5, 6);
    scene.add(key);

    const canvas = document.createElement("canvas");
    canvas.width = 1024;
    canvas.height = 1024;
    const context = canvas.getContext("2d");
    if (context) {
      context.fillStyle = "#ef3340";
      context.fillRect(0, 0, 1024, 1024);
      context.fillStyle = "#fff";
      context.textAlign = "center";
      context.font = "900 96px Arial";
      context.fillText("KOPI", 512, 690);
      context.fillText("LION", 512, 780);
      context.font = "500 28px Arial";
      context.fillText("NANYANG COFFEE", 512, 838);
      context.save();
      context.translate(512, 360);
      context.beginPath();
      for (let i = 0; i < 16; i += 1) {
        const angle = (Math.PI * 2 * i) / 16;
        const radius = i % 2 ? 190 : 230;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        i === 0 ? context.moveTo(x, y) : context.lineTo(x, y);
      }
      context.closePath();
      context.fill();
      context.fillStyle = "#ef3340";
      context.beginPath();
      context.arc(0, 0, 132, 0, Math.PI * 2);
      context.fill();
      context.fillStyle = "#fff";
      context.beginPath();
      context.moveTo(-76, -62);
      context.quadraticCurveTo(0, -120, 76, -62);
      context.lineTo(58, 64);
      context.quadraticCurveTo(0, 126, -58, 64);
      context.closePath();
      context.fill();
      context.fillStyle = "#ef3340";
      context.beginPath();
      context.arc(-38, -20, 12, 0, Math.PI * 2);
      context.arc(38, -20, 12, 0, Math.PI * 2);
      context.fill();
      context.beginPath();
      context.moveTo(0, 8);
      context.lineTo(-18, 34);
      context.lineTo(0, 48);
      context.lineTo(18, 34);
      context.closePath();
      context.fill();
      context.restore();
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    const side = new THREE.MeshStandardMaterial({ color: 0xc51f30, roughness: 0.78 });
    const bag = new THREE.Mesh(
      new THREE.BoxGeometry(2.35, 3.55, 0.65, 12, 18, 4),
      [side, side, side, side, new THREE.MeshStandardMaterial({ map: texture, roughness: 0.68 }), side]
    );
    bag.rotation.set(-0.08, -0.35, 0.03);
    scene.add(bag);

    const seam = new THREE.Mesh(new THREE.BoxGeometry(2.44, 0.1, 0.72), new THREE.MeshStandardMaterial({ color: 0xa41725, roughness: 0.88 }));
    seam.position.y = 1.69;
    bag.add(seam);

    const shadowMaterial = new THREE.MeshBasicMaterial({ color: 0x3b2318, transparent: true, opacity: 0.18, depthWrite: false });
    const shadow = new THREE.Mesh(new THREE.CircleGeometry(1.45, 48), shadowMaterial);
    shadow.rotation.x = -Math.PI / 2;
    shadow.position.y = -2.05;
    shadow.scale.y = 0.35;
    scene.add(shadow);

    let dragging = false;
    let pointerX = 0;
    const down = (event: PointerEvent) => { dragging = true; pointerX = event.clientX; renderer.domElement.setPointerCapture(event.pointerId); };
    const move = (event: PointerEvent) => { if (!dragging) return; bag.rotation.y += (event.clientX - pointerX) * 0.008; pointerX = event.clientX; };
    const up = () => { dragging = false; };
    renderer.domElement.addEventListener("pointerdown", down);
    renderer.domElement.addEventListener("pointermove", move);
    renderer.domElement.addEventListener("pointerup", up);

    const clock = new THREE.Clock();
    let frame = 0;
    const render = () => {
      const time = clock.getElapsedTime();
      if (!reduceMotion && !dragging) bag.rotation.y += 0.0025;
      if (!reduceMotion) {
        bag.position.y = Math.sin(time * 0.9) * 0.06;
        shadowMaterial.opacity = 0.15 + Math.sin(time * 0.9) * 0.025;
      }
      renderer.render(scene, camera);
      frame = requestAnimationFrame(render);
    };
    render();

    const resize = () => {
      camera.aspect = host.clientWidth / host.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(host.clientWidth, host.clientHeight);
    };
    const observer = new ResizeObserver(resize);
    observer.observe(host);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      renderer.domElement.removeEventListener("pointerdown", down);
      renderer.domElement.removeEventListener("pointermove", move);
      renderer.domElement.removeEventListener("pointerup", up);
      renderer.dispose();
      texture.dispose();
      host.removeChild(renderer.domElement);
    };
  }, []);

  return <div className="three-scene" ref={mount} aria-label="Interactive three dimensional KOPI LION coffee pack" />;
}

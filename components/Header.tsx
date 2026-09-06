"use client";

import Link from "next/link";
import { useState } from "react";
import { LionMark, Wordmark } from "./LionMark";

const links = [
  { href: "/what-is-kopi", label: "What is kopi" },
  { href: "/our-roast", label: "Our roast" },
  { href: "/menu", label: "Menu" },
  { href: "/locations", label: "Find us" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="KOPI LION home" onClick={() => setOpen(false)}>
        <LionMark className="brand__mark" />
        <Wordmark />
      </Link>
      <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="site-nav" onClick={() => setOpen((value) => !value)}>
        <span>{open ? "Close" : "Menu"}</span><i aria-hidden="true" />
      </button>
      <nav id="site-nav" className={open ? "site-nav is-open" : "site-nav"} aria-label="Main navigation">
        {links.map((link) => <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</Link>)}
        <Link className="nav-cta" href="/franchise" onClick={() => setOpen(false)}>Franchise</Link>
      </nav>
    </header>
  );
}

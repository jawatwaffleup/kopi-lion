import Link from "next/link";
import { LionMark, Wordmark } from "./LionMark";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer__brand"><LionMark className="footer__mark" /><Wordmark /></div>
      <p className="footer__line">Tradition, brewed precisely.</p>
      <div className="footer__grid">
        <div><p className="eyebrow">Coming soon</p><p>Clarke Quay · Dhaka</p></div>
        <nav aria-label="Footer navigation">
          <Link href="/menu">Menu</Link><Link href="/what-is-kopi">The kopi story</Link><Link href="/franchise">Franchise</Link>
        </nav>
        <div><p className="eyebrow">Follow the lion</p><p>Social channels coming soon.</p></div>
      </div>
      <div className="footer__base"><span>© {new Date().getFullYear()} KOPI LION</span><span>Legal information to follow.</span></div>
    </footer>
  );
}

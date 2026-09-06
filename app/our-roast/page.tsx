import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata = { title: "Our roast" };

export default function OurRoast() {
  return (
    <>
      <PageHero eyebrow="Under development" title={<>Depth before<br /><em>decoration.</em></>} intro="We are developing a roast that can deliver the same bold, aromatic cup in Clarke Quay, Dhaka and wherever the lion goes next." theme="brown" number="02" />
      <section className="editorial editorial--split section-pad">
        <div className="editorial__aside"><span>THE STANDARD</span><p>Taste locks first. Everything else follows.</p></div>
        <div className="editorial__body">
          <h2>Designed for the cup.</h2>
          <p className="lead">The roast is not a marketing story added at the end. It is the foundation of the system.</p>
          <p>Blend, roast profile, grind, dose, water and pull time will be defined together. Once the cup is right, those variables become the standard for every counter.</p>
          <div className="roast-status"><span>Blend</span><i /><b>Testing</b><span>Profile</span><i /><b>Testing</b><span>Brew spec</span><i /><b>Testing</b></div>
        </div>
      </section>
      <section className="big-quote section-pad"><blockquote>“A bold cup should not depend on who happens to be behind the counter.”</blockquote><p>— The KOPI LION operating principle</p></section>
      <section className="next-link section-pad"><p className="eyebrow">Next</p><Link href="/menu">See the opening menu <span>→</span></Link></section>
    </>
  );
}

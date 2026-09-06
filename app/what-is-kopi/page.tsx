import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata = { title: "What is kopi?" };

export default function WhatIsKopi() {
  return (
    <>
      <PageHero eyebrow="A cup with history" title={<>Not coffee<br /><em>as usual.</em></>} intro="Kopi is the bold, aromatic coffee of the Southeast Asian kopitiam—roasted with character and pulled through a cloth filter." theme="red" number="01" />
      <section className="editorial section-pad">
        <div className="editorial__aside"><span>THE SHORT VERSION</span><p>Kopi means coffee. But the cup means much more.</p></div>
        <div className="editorial__body">
          <h2>Born in the kopitiam.</h2>
          <p className="lead">Across Singapore and the wider Nanyang region, kopitiams became places to eat, talk, work and begin the day.</p>
          <p>The coffee evolved with them. Beans were roasted dark for body and aroma, ground, then brewed in long cloth filters called socks. The method creates a concentrated cup made to stand up to milk and sugar.</p>
          <p>KOPI LION keeps the directness of that tradition and brings precision to every repeatable step.</p>
        </div>
      </section>
      <section className="definition-grid section-pad">
        <article><span>01</span><h3>Dark character</h3><p>A roast developed for depth, aroma and a full-bodied finish.</p></article>
        <article><span>02</span><h3>The sock</h3><p>A long cloth filter that lets the coffee steep before it is pulled.</p></article>
        <article><span>03</span><h3>Your way</h3><p>Black, with evaporated milk, sweetened, or kosong—without sugar.</p></article>
      </section>
      <section className="next-link section-pad"><p className="eyebrow">Next</p><Link href="/our-roast">Meet our roast <span>→</span></Link></section>
    </>
  );
}

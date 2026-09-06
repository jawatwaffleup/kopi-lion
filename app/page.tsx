import Link from "next/link";
import { LionMark } from "@/components/LionMark";
import { SceneGate } from "@/components/SceneGate";

const drinks = [
  { name: "Kopi O", note: "Bold black kopi with sugar.", code: "01" },
  { name: "Kopi C", note: "Kopi with evaporated milk and sugar.", code: "02" },
  { name: "Kopi O Kosong", note: "Bold black kopi, no sugar.", code: "03" },
  { name: "Kaya Toast", note: "Crisp toast, kaya and butter.", code: "04" },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero__copy">
          <p className="eyebrow">Nanyang coffee · Coming soon</p>
          <h1>Tradition,<br /><em>brewed precisely.</em></h1>
          <p className="hero__intro">
            Bold kopi, brewed through the sock and served without fuss. A small menu made the same way, every time.
          </p>
          <div className="button-row">
            <Link className="button button--dark" href="/menu">See the menu <span>↗</span></Link>
            <Link className="text-link" href="/what-is-kopi">Discover kopi <span>→</span></Link>
          </div>
        </div>
        <div className="hero__object" aria-label="KOPI LION cup and coffee pack">
          <div className="hero__halo" />
          <div className="hero__bag">
            <LionMark className="hero__bag-mark" />
            <strong>KOPI<br />LION</strong>
            <small>NANYANG COFFEE</small>
          </div>
          <div className="hero__cup">
            <LionMark className="hero__cup-mark" />
          </div>
          <span className="hero__steam hero__steam--one" />
          <span className="hero__steam hero__steam--two" />
          <p className="hero__stamp">Strong cup.<br />Quiet confidence.</p>
        </div>
        <div className="hero__ticker" aria-hidden="true">
          <span>KOPI O</span><i>✦</i><span>KOPI C</span><i>✦</i><span>KAYA TOAST</span><i>✦</i><span>COMING SOON</span>
        </div>
      </section>

      <section className="statement section-pad">
        <p className="eyebrow">The KOPI LION way</p>
        <h2>We make a few things.<br />We make them <span>properly.</span></h2>
        <div className="statement__notes">
          <p>Nanyang tradition, without the dust.</p>
          <p>Measured in grams and seconds.</p>
        </div>
      </section>

      <section className="menu-preview section-pad">
        <div className="section-heading">
          <div><p className="eyebrow">The opening line-up</p><h2>Four reasons<br />to cross the street.</h2></div>
          <Link className="circle-link" href="/menu" aria-label="View the full menu">↗</Link>
        </div>
        <div className="menu-list">
          {drinks.map((drink) => (
            <article className="menu-row" key={drink.name}>
              <span>{drink.code}</span><h3>{drink.name}</h3><p>{drink.note}</p><i>●</i>
            </article>
          ))}
        </div>
      </section>

      <section className="ritual section-pad">
        <div className="ritual__copy">
          <p className="eyebrow">The pack · Concept 01</p>
          <h2>Roasted for depth.<br />Built to stand proud.</h2>
          <p>Our retail pack is being developed alongside the roast. Turn the concept and meet the first expression of the lion.</p>
          <Link className="text-link" href="/our-roast">Our roast <span>→</span></Link>
        </div>
        <SceneGate />
      </section>

      <section className="method section-pad">
        <div className="method__top">
          <p className="eyebrow">The method</p>
          <p>Old technique.<br />Modern discipline.</p>
        </div>
        <div className="method__grid">
          <article><span>01</span><div className="method-icon method-icon--roast" /><h3>Roast</h3><p>Developed for a bold, aromatic cup with a deep finish.</p></article>
          <article><span>02</span><div className="method-icon method-icon--measure" /><h3>Measure</h3><p>Every variable written down. Nothing left to guesswork.</p></article>
          <article><span>03</span><div className="method-icon method-icon--pour" /><h3>Pull</h3><p>Hot water drawn through the traditional cloth sock.</p></article>
          <article><span>04</span><div className="method-icon method-icon--serve" /><h3>Serve</h3><p>A proper cup, prepared quickly and handed over fresh.</p></article>
        </div>
      </section>

      <section className="places section-pad">
        <div className="places__lion"><LionMark /></div>
        <div className="places__copy">
          <p className="eyebrow">First stops</p>
          <h2>Clarke Quay<br /><span>meets</span> Dhaka.</h2>
          <p>Two cities. One measured method. KOPI LION is getting ready to raise the shutters.</p>
          <Link className="button button--light" href="/locations">Follow the opening <span>↗</span></Link>
        </div>
      </section>

      <section className="franchise-callout section-pad">
        <p className="eyebrow">Build with us</p>
        <h2>Bring out<br />the lion.</h2>
        <p>A focused counter, a disciplined menu and a system designed to travel.</p>
        <Link className="button button--dark" href="/franchise">Franchise KOPI LION <span>↗</span></Link>
      </section>
    </>
  );
}

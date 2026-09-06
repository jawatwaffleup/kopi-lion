import { PageHero } from "@/components/PageHero";

export const metadata = { title: "Franchise" };

export default function Franchise() {
  return (
    <>
      <PageHero eyebrow="Build with us" title={<>A focused format.<br /><em>Built to travel.</em></>} intro="KOPI LION is developing a disciplined counter model around a small menu, central standards and practical training." theme="brown" number="05" />
      <section className="franchise-model section-pad">
        <div><p className="eyebrow">The model</p><h2>Simple for the guest.<br />Precise behind the counter.</h2></div>
        <div className="model-points">
          <article><span>01</span><h3>Focused menu</h3><p>Fewer products make ordering, training and consistency clearer.</p></article>
          <article><span>02</span><h3>Central standards</h3><p>The taste-defining variables are controlled before they reach the counter.</p></article>
          <article><span>03</span><h3>Measured brew</h3><p>Recipes are documented in grams, seconds and repeatable actions.</p></article>
          <article><span>04</span><h3>Formal training</h3><p>Operators learn the product and system before serving the first cup.</p></article>
        </div>
      </section>
      <section className="enquiry section-pad">
        <div><p className="eyebrow">Register interest</p><h2>Bring KOPI LION<br />to your market.</h2></div>
        <div className="enquiry__placeholder">
          <p>Franchise enquiries will open with our launch. The application form and contact details will appear here once the receiving team is confirmed.</p>
          <span>ENQUIRY CHANNEL · IN PREPARATION</span>
        </div>
      </section>
    </>
  );
}

import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata = { title: "Find us" };

export default function Locations() {
  return (
    <>
      <PageHero eyebrow="First stops" title={<>Two cities.<br /><em>One method.</em></>} intro="KOPI LION is preparing to open in Singapore first, followed closely by Bangladesh." theme="red" number="04" />
      <section className="location-list section-pad">
        <article><span>SG</span><div><p className="eyebrow">Singapore</p><h2>Clarke Quay</h2><p>Location details will be shared when the counter is ready.</p></div><b>SOON</b></article>
        <article><span>BD</span><div><p className="eyebrow">Bangladesh</p><h2>Dhaka</h2><p>Our first Dhaka location is taking shape.</p></div><b>NEXT</b></article>
      </section>
      <section className="franchise-strip section-pad"><div><p className="eyebrow">Your city?</p><h2>Build the next counter.</h2></div><Link className="button button--light" href="/franchise">Franchise enquiry <span>↗</span></Link></section>
    </>
  );
}

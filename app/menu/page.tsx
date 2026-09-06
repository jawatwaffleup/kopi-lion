import { PageHero } from "@/components/PageHero";

export const metadata = { title: "Menu" };

const items = [
  { id: "01", name: "Kopi O", description: "Bold black kopi with sugar.", tags: ["HOT", "BOLD"] },
  { id: "02", name: "Kopi C", description: "Kopi with evaporated milk and sugar.", tags: ["HOT", "SMOOTH"] },
  { id: "03", name: "Kopi O Kosong", description: "Bold black kopi, served without sugar.", tags: ["HOT", "NO SUGAR"] },
  { id: "04", name: "Kaya Toast", description: "Crisp toast layered with kaya and butter.", tags: ["TOASTED", "CLASSIC"] },
];

export default function Menu() {
  return (
    <>
      <PageHero eyebrow="Opening menu" title={<>Small by<br /><em>design.</em></>} intro="A short line-up keeps ordering easy and preparation focused. Recipes and final serving details are still being refined." number="03" />
      <section className="full-menu section-pad">
        {items.map((item) => (
          <article key={item.id}>
            <span className="full-menu__id">{item.id}</span>
            <div><h2>{item.name}</h2><p>{item.description}</p></div>
            <div className="tag-row">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
          </article>
        ))}
      </section>
      <section className="menu-note section-pad">
        <p className="eyebrow">A note on the menu</p>
        <h2>The final recipes, allergens and serving formats will be published before opening.</h2>
      </section>
    </>
  );
}

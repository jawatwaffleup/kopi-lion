import { LionMark } from "./LionMark";

type PageHeroProps = {
  eyebrow: string;
  title: React.ReactNode;
  intro: string;
  theme?: "red" | "paper" | "brown";
  number?: string;
};

export function PageHero({ eyebrow, title, intro, theme = "paper", number = "01" }: PageHeroProps) {
  return (
    <section className={`page-hero page-hero--${theme}`}>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="page-hero__intro">{intro}</p>
      </div>
      <div className="page-hero__symbol"><LionMark /><span>{number} / KL</span></div>
    </section>
  );
}

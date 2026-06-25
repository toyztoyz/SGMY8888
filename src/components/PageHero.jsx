export default function PageHero({ eyebrow, title, description }) {
  return (
    <section className="page-hero reveal">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      {description && <p>{description}</p>}
    </section>
  );
}

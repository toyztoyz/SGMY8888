import PageHero from '../components/PageHero.jsx';

export default function Conclusion({ onNavigate }) {
  return (
    <section className="page conclusion-page">
      <PageHero
        eyebrow="Final"
        title="結語"
        description="以一句核心精神收束人物形象，讓網站最後停在有重量的印象上。"
      />
      <section className="closing-panel reveal">
        <blockquote>每一道光，都曾走過黑暗。</blockquote>
        <p>願我們都成為別人人生中的一道光。</p>
        <button type="button" onClick={() => onNavigate('home')}>
          回到首頁
        </button>
      </section>
    </section>
  );
}

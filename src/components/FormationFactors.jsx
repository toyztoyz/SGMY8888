import { useState } from 'react';

export default function FormationFactors({ factors }) {
  const [activeFactorIndex, setActiveFactorIndex] = useState(null);

  return (
    <section className="formation-section reveal">
      <div className="formation-heading">
        <h2>理念的形成</h2>
      </div>
      <div
        className={`formation-grid ${activeFactorIndex !== null ? 'has-active' : ''}`}
        onMouseLeave={() => setActiveFactorIndex(null)}
      >
        {factors.map((factor, index) => (
          <article
            aria-pressed={activeFactorIndex === index}
            className={`formation-card ${activeFactorIndex === index ? 'active' : ''} ${
              activeFactorIndex !== null && activeFactorIndex !== index ? 'dimmed' : ''
            }`}
            key={factor.id}
            role="button"
            tabIndex={0}
            onClick={() => setActiveFactorIndex(index)}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                setActiveFactorIndex(index);
              }
            }}
            onMouseEnter={() => setActiveFactorIndex(index)}
          >
            <span className="formation-step">{`STEP ${String(index + 1).padStart(2, '0')}`}</span>
            <span className="formation-label">{factor.label}</span>
            {factor.title && <h3 className="formation-title">{factor.title}</h3>}
            <p className="formation-text">{factor.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

import { useEffect, useState } from 'react';

export default function TeamDossierShowcase({ members }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeMember = members[activeIndex];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % members.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [members.length]);

  function selectMember(index) {
    setActiveIndex(index);
  }

  return (
    <section className="team-dossier-showcase reveal">
      <article className="team-spotlight" key={activeMember.id}>
        <div className="team-portrait-placeholder">
          {activeMember.imageSrc ? (
            <img src={activeMember.imageSrc} alt={activeMember.imageAlt ?? activeMember.name} />
          ) : (
            <span aria-hidden="true">{String(activeIndex + 1).padStart(2, '0')}</span>
          )}
        </div>
        <div className="team-dossier-copy">
          <p className="eyebrow">
            {[activeMember.category, activeMember.role].filter(Boolean).join('｜')}
          </p>
          <h2>{activeMember.name}</h2>
          {activeMember.summary && <p>{activeMember.summary}</p>}
          <div className="trait-list">
            {activeMember.traits.map((trait) => (
              <span key={trait}>{trait}</span>
            ))}
          </div>
          <div className="team-carousel-controls" aria-label="Team dossier carousel">
            <span>{`${String(activeIndex + 1).padStart(2, '0')} / ${String(members.length).padStart(
              2,
              '0',
            )}`}</span>
            <div className="team-carousel-dots">
              {members.map((member, index) => (
                <button
                  aria-label={`Show ${member.name}`}
                  className={activeIndex === index ? 'active' : ''}
                  key={member.id}
                  type="button"
                  onClick={() => selectMember(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}

import { useRef, useState } from 'react';

export default function MilestoneImageCarousel({ items }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [pressedIndex, setPressedIndex] = useState(null);
  const pressTimerRef = useRef(null);
  const activeItem = items[activeIndex];
  const progress = items.length > 0 ? ((activeIndex + 0.5) / items.length) * 100 : 0;

  function move(step) {
    setActiveIndex((current) => (current + step + items.length) % items.length);
  }

  function selectMilestone(index) {
    setActiveIndex(index);
    setPressedIndex(null);

    window.clearTimeout(pressTimerRef.current);
    window.requestAnimationFrame(() => {
      setPressedIndex(index);
      pressTimerRef.current = window.setTimeout(() => {
        setPressedIndex(null);
      }, 520);
    });
  }

  return (
    <section className="milestone-carousel reveal">
      <div className="milestone-visual">
        {activeItem.imageSrc ? (
          <img src={activeItem.imageSrc} alt={activeItem.imageAlt ?? activeItem.title} />
        ) : (
          <div className="milestone-image-placeholder">
            <span>{activeItem.period}</span>
            <p>{'\u5716\u7247\u5f85\u653e\u5165'}</p>
          </div>
        )}
      </div>
      <div className="milestone-copy">
        <p className="eyebrow">{activeItem.period}</p>
        <h2>{activeItem.title}</h2>
        <p>{activeItem.summary}</p>
        <p>{activeItem.detail}</p>
        <div className="milestone-controls">
          <button type="button" onClick={() => move(-1)} aria-label="Previous milestone">
            <span aria-hidden="true">{'\u2190'}</span>
            <span>{'\u4e0a\u4e00\u6bb5'}</span>
          </button>
          <output>{`${activeIndex + 1} / ${items.length}`}</output>
          <button type="button" onClick={() => move(1)} aria-label="Next milestone">
            <span>{'\u4e0b\u4e00\u6bb5'}</span>
            <span aria-hidden="true">{'\u2192'}</span>
          </button>
        </div>
      </div>
      <div
        className="milestone-rail"
        aria-label="Background milestone list"
        style={{ '--milestone-progress': `${progress}%` }}
      >
        {items.map((item, index) => (
          <button
            aria-current={activeIndex === index ? 'step' : undefined}
            className={[
              activeIndex === index ? 'active' : '',
              pressedIndex === index ? 'stamp-flash' : '',
            ]
              .filter(Boolean)
              .join(' ')}
            key={item.id}
            type="button"
            onClick={() => selectMilestone(index)}
          >
            <span className="milestone-node" aria-hidden="true" />
            <span className="milestone-index">{String(index + 1).padStart(2, '0')}</span>
            <span className="milestone-title">{item.title}</span>
          </button>
        ))}
      </div>
    </section>
  );
}

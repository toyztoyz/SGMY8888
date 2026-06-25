import { useState } from 'react';

export default function ImageCarousel({ items }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = items[activeIndex];

  function move(step) {
    setActiveIndex((current) => (current + step + items.length) % items.length);
  }

  return (
    <section className="carousel reveal">
      <div className="carousel-stage">
        <span>{activeItem.type}</span>
        <h2>{activeItem.title}</h2>
        <p>{activeItem.description}</p>
      </div>
      <div className="carousel-controls">
        <button type="button" onClick={() => move(-1)} aria-label="上一張">
          ‹
        </button>
        <p>
          {activeIndex + 1} / {items.length}
        </p>
        <button type="button" onClick={() => move(1)} aria-label="下一張">
          ›
        </button>
      </div>
    </section>
  );
}

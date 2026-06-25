import { useRef, useState } from 'react';
import { siteMeta } from '../data/siteData.js';

export default function HeroSection({ onNavigate }) {
  const [isInkActive, setIsInkActive] = useState(false);
  const inkTimerRef = useRef(null);

  function scrollToCoreProfile() {
    document
      .getElementById('core-profile')
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function handlePrimaryClick() {
    window.clearTimeout(inkTimerRef.current);
    setIsInkActive(false);

    window.requestAnimationFrame(() => {
      setIsInkActive(true);
      inkTimerRef.current = window.setTimeout(() => {
        setIsInkActive(false);
        scrollToCoreProfile();
      }, 280);
    });
  }

  return (
    <section
      className="hero"
      aria-label={siteMeta.heroImageAlt}
      style={{ backgroundImage: `url(${siteMeta.heroImage})` }}
    >
      <div className="hero-overlay" />
      <div className="hero-grid-pattern" aria-hidden="true" />
      <div className="hero-content reveal">
        <h1>{siteMeta.title}</h1>
        <blockquote>{siteMeta.quote}</blockquote>
        <div className="hero-actions">
          <button
            className={isInkActive ? 'primary-shimmer ink-expand' : 'primary-shimmer'}
            type="button"
            onClick={handlePrimaryClick}
          >
            {'\u67e5\u770b\u4eba\u7269\u6a94\u6848'}
          </button>
          <button type="button" onClick={() => onNavigate('team')}>
            {'\u8a8d\u8b58\u5718\u968a'}
          </button>
        </div>
      </div>
      <button
        className="scroll-cue"
        type="button"
        onClick={scrollToCoreProfile}
        aria-label="Go to core profile"
      >
        {'\u5411\u4e0b\u63a2\u7d22'}
      </button>
    </section>
  );
}

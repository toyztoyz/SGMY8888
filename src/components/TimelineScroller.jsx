import { useRef, useState } from 'react';

export default function TimelineScroller({ events }) {
  const [activeId, setActiveId] = useState(events[0]?.id);
  const scrollerRef = useRef(null);

  const activeIndex = Math.max(
    0,
    events.findIndex((event) => event.id === activeId),
  );

  function activateEvent(eventId) {
    setActiveId(eventId);
  }

  function handleCardKeyDown(event, eventId) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      activateEvent(eventId);
    }
  }

  function scrollTimeline(direction) {
    const scroller = scrollerRef.current;

    if (!scroller) {
      return;
    }

    const cardWidth = scroller.querySelector('.timeline-card')?.offsetWidth ?? 320;
    scroller.scrollBy({
      left: direction * (cardWidth + 20),
      behavior: 'smooth',
    });

    const nextIndex = Math.min(
      Math.max(activeIndex + direction, 0),
      events.length - 1,
    );
    activateEvent(events[nextIndex].id);
  }

  return (
    <section
      className="timeline-shell reveal"
      aria-label={'\u4eba\u7269\u6545\u4e8b\u6642\u9593\u8ef8'}
    >
      <div className="timeline-toolbar">
        <p className="timeline-status" aria-live="polite">
          {`${activeIndex + 1} / ${events.length}`}
        </p>
        <div className="timeline-controls">
          <button
            type="button"
            aria-label="Previous timeline item"
            onClick={() => scrollTimeline(-1)}
            disabled={activeIndex === 0}
          >
            {'\u2039'}
          </button>
          <button
            type="button"
            aria-label="Next timeline item"
            onClick={() => scrollTimeline(1)}
            disabled={activeIndex === events.length - 1}
          >
            {'\u203a'}
          </button>
        </div>
      </div>
      <div className="timeline-track" aria-hidden="true" />
      <div className="timeline-scroller" ref={scrollerRef}>
        {events.map((event, index) => {
          const isActive = activeId === event.id;

          return (
            <article
              className={isActive ? 'timeline-card active' : 'timeline-card'}
              key={event.id}
              role="button"
              tabIndex={0}
              aria-current={isActive ? 'step' : undefined}
              onClick={() => activateEvent(event.id)}
              onKeyDown={(keyboardEvent) =>
                handleCardKeyDown(keyboardEvent, event.id)
              }
            >
              <button
                className="timeline-dot"
                type="button"
                aria-label={`View ${event.title}`}
                onClick={(eventClick) => {
                  eventClick.stopPropagation();
                  activateEvent(event.id);
                }}
              />
              <span className="timeline-index">
                {String(index + 1).padStart(2, '0')}
              </span>
              <p className="card-eyebrow">{event.period}</p>
              <h2>{event.title}</h2>
              <p>{event.summary}</p>
              <div className="timeline-detail">
                <h3>{'\u5167\u5bb9\u5f85\u5b9a'}</h3>
                <p>{event.detail}</p>
              </div>
            </article>
          );
        })}
      </div>
      <div className="timeline-progress" aria-hidden="true">
        {events.map((event) => (
          <span
            className={activeId === event.id ? 'active' : ''}
            key={event.id}
          />
        ))}
      </div>
      <p className="timeline-hint">
        {'\u5de6\u53f3\u6ed1\u52d5\u67e5\u770b\u66f4\u591a\u6642\u9593\u7bc0\u9ede'}
      </p>
    </section>
  );
}

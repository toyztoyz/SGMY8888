import { useState } from 'react';
import VideoPlaceholder from './VideoPlaceholder.jsx';

export default function VerticalVideoCarousel({ videos }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeVideo = videos[activeIndex];

  function move(step) {
    setActiveIndex((current) => (current + step + videos.length) % videos.length);
  }

  return (
    <section className="vertical-video-showcase reveal">
      <div className="vertical-video-layout">
        <VideoPlaceholder
          orientation="vertical"
          title={activeVideo.title}
          src={activeVideo.videoSrc}
        />
        <aside className="vertical-video-summary typewriter-copy" key={activeVideo.id}>
          <p className="eyebrow typewriter-line typewriter-delay-1">{activeVideo.label}</p>
          <h2 className="typewriter-line typewriter-delay-2">{activeVideo.title}</h2>
          <p className="typewriter-line typewriter-delay-3">{activeVideo.summary}</p>
          <p className="vertical-video-detail typewriter-line typewriter-delay-4">
            {activeVideo.detail}
          </p>
          <div className="video-carousel-controls">
            <button type="button" onClick={() => move(-1)} aria-label="Previous video">
              <span aria-hidden="true">{'\u2190'}</span>
              <span>{'\u4e0a\u4e00\u90e8'}</span>
            </button>
            <output>{`${activeIndex + 1} / ${videos.length}`}</output>
            <button type="button" onClick={() => move(1)} aria-label="Next video">
              <span>{'\u4e0b\u4e00\u90e8'}</span>
              <span aria-hidden="true">{'\u2192'}</span>
            </button>
          </div>
        </aside>
      </div>
      <div className="vertical-video-strip-wrap">
        <div className="vertical-video-strip subtle-marquee" aria-label="Vertical video list">
          {videos.map((video, index) => (
            <button
              className={activeIndex === index ? 'active' : ''}
              key={video.id}
              type="button"
              onClick={() => setActiveIndex(index)}
            >
              <span className="film-index">{String(index + 1).padStart(2, '0')}</span>
              <span className="film-title">{video.navTitle ?? video.title}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

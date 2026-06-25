import PageHero from '../components/PageHero.jsx';
import VideoPlaceholder from '../components/VideoPlaceholder.jsx';
import VerticalVideoCarousel from '../components/VerticalVideoCarousel.jsx';
import {
  featuredHorizontalVideo,
  verticalVideoWorks,
} from '../data/videoWorksData.js';

export default function Works() {
  return (
    <section className="page works-page">
      <PageHero
        eyebrow="Works"
        title={'\u793e\u6703\u8ca2\u737b'}
        description={
          '\u4e0a\u65b9\u653e\u4e00\u90e8\u6a6b\u5411\u4e3b\u5f71\u7247\uff0c\u4e0b\u65b9\u4ee5\u8f2a\u64ad\u5448\u73fe\u516d\u90e8\u76f4\u5f0f\u5f71\u7247\uff0c\u5de6\u908a\u770b\u5f71\u7247\u3001\u53f3\u908a\u770b\u6458\u8981\u3002'
        }
      />

      <section className="featured-video-section reveal">
        <VideoPlaceholder
          orientation="horizontal"
          title={featuredHorizontalVideo.title}
          src={featuredHorizontalVideo.videoSrc}
        />
        <div className="featured-video-copy typewriter-copy">
          <p className="eyebrow typewriter-line typewriter-delay-1">
            {featuredHorizontalVideo.label}
          </p>
          <h2 className="typewriter-line typewriter-delay-2">{featuredHorizontalVideo.title}</h2>
          <p className="typewriter-line typewriter-delay-3">{featuredHorizontalVideo.summary}</p>
          <p className="typewriter-line typewriter-delay-4">
            {featuredHorizontalVideo.description}
          </p>
        </div>
      </section>

      <section className="section-heading works-subheading reveal">
        <p className="eyebrow">Vertical Series</p>
        <h2>{'\u516d\u90e8\u76f4\u5f0f\u5f71\u7247'}</h2>
        <p>
          {'\u4ee5\u76f4\u5f0f\u5f71\u50cf\u8f2a\u64ad\u5448\u73fe\u4f5c\u54c1\u7247\u6bb5\uff0c\u8b93\u89c0\u770b\u8005\u80fd\u5feb\u901f\u9032\u5165 Gathering Light \u7684\u884c\u52d5\u8207\u6545\u4e8b\u8108\u7d61\u3002'}
        </p>
      </section>
      <VerticalVideoCarousel videos={verticalVideoWorks} />
    </section>
  );
}

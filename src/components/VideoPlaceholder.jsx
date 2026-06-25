export default function VideoPlaceholder({ orientation = 'horizontal', title, src }) {
  const className =
    orientation === 'vertical'
      ? 'video-frame video-frame-vertical'
      : 'video-frame video-frame-horizontal';

  return (
    <div className={className}>
      {src ? (
        <video controls playsInline preload="metadata" src={src} title={title} />
      ) : (
        <div className="video-placeholder">
          <span>{orientation === 'vertical' ? '9:16' : '16:9'}</span>
          <p>{title}</p>
        </div>
      )}
    </div>
  );
}

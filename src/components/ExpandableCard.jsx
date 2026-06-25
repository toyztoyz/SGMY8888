import { useState } from 'react';

export default function ExpandableCard({ eyebrow, title, summary, detail }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="info-card reveal">
      <span className="card-eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      <p>{summary}</p>
      <button
        className="text-button"
        type="button"
        onClick={() => setExpanded((current) => !current)}
      >
        {expanded ? '收合細節' : '展開細節'}
      </button>
      {expanded && <p className="card-detail">{detail}</p>}
    </article>
  );
}

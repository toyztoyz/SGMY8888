import { useRef, useState } from 'react';
import HeroSection from '../components/HeroSection.jsx';

const coreFacts = [
  {
    label: '信念',
    value:
      '幫助一個人，\n不該只在他最痛苦的時候。\n\n在醫院裡，醫師能在危急時刻救人。\n\n但當病人離開醫院之後，人生依然充滿各種問題。\n\n財務壓力、家庭責任、職涯迷惘、對未來的不安。\n\n傅知遠相信：真正的幫助，應該發生在問題出現之前。\n\n讓一個人擁有選擇，比替他解決一次問題更重要。',
  },
  {
    label: '時代',
    value:
      '一個充滿機會，也充滿焦慮的年代。\n\n科技進步讓世界變得更快。\n\n資訊越來越多，選擇越來越多，但許多人反而更迷惘。\n\n人們需要的，不只是專業知識。\n\n而是一套理解世界、做出選擇的方法。',
  },
  {
    label: '象徵',
    value:
      '病房的燈光\n\n加護病房的燈永遠不會熄滅。\n\n它照亮生命最脆弱的時刻。\n\n也讓傅知遠明白：每個人真正需要的，不只是被拯救。\n\n而是有能力走向更好的未來。',
  },
  {
    label: '代表行動',
    value: '「最好的幫助，不是替別人撐傘。」\n\n「而是讓他有能力在風雨中前行。」',
  },
];

export default function Home({ onNavigate }) {
  const [inkAction, setInkAction] = useState(null);
  const [activeFactIndex, setActiveFactIndex] = useState(null);
  const [profileCardActive, setProfileCardActive] = useState(false);
  const [quoteActive, setQuoteActive] = useState(false);
  const [quoteRipple, setQuoteRipple] = useState(null);
  const inkTimerRef = useRef(null);
  const rippleTimerRef = useRef(null);

  function navigateWithInk(pageId) {
    window.clearTimeout(inkTimerRef.current);
    setInkAction(null);

    window.requestAnimationFrame(() => {
      setInkAction(pageId);
      inkTimerRef.current = window.setTimeout(() => {
        setInkAction(null);
        onNavigate(pageId);
      }, 280);
    });
  }

  function triggerQuoteRipple(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX ? event.clientX - rect.left : rect.width / 2;
    const y = event.clientY ? event.clientY - rect.top : rect.height / 2;

    window.clearTimeout(rippleTimerRef.current);
    setQuoteActive(true);
    setQuoteRipple({ id: Date.now(), x, y });
    rippleTimerRef.current = window.setTimeout(() => {
      setQuoteRipple(null);
    }, 1500);
  }

  function triggerCenteredQuoteRipple(event) {
    const rect = event.currentTarget.getBoundingClientRect();

    window.clearTimeout(rippleTimerRef.current);
    setQuoteActive(true);
    setQuoteRipple({ id: Date.now(), x: rect.width / 2, y: rect.height / 2 });
    rippleTimerRef.current = window.setTimeout(() => {
      setQuoteRipple(null);
    }, 1500);
  }

  return (
    <>
      <HeroSection onNavigate={onNavigate} />
      <section className="core-profile-section reveal" id="core-profile">
        <div
          className={`core-profile-copy ${profileCardActive ? 'is-active' : ''}`}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              setProfileCardActive(false);
            }
          }}
          onClick={() => setProfileCardActive(true)}
          onPointerEnter={() => setProfileCardActive(true)}
          onPointerLeave={() => setProfileCardActive(false)}
        >
          <h2>
            真正改變一個人，
            <br />
            不一定發生在手術台上。
          </h2>
          <div className="core-profile-body">
            <p>傅知遠曾在加護病房看過無數生命與死亡。</p>
            <p>
              他救過許多人，也親眼見過許多人即使活下來，仍然被疾病、家庭壓力與現實困境困住。
            </p>
            <p>這讓他開始思考：如果幫助人的方式不只有醫療，那還能是什麼？</p>
            <p>
              於是他把目光從病床旁，延伸到每個人的人生選擇。希望透過知識、教育與資源，幫助更多人在困境來臨之前，就擁有面對風險的能力。
            </p>
          </div>
          <div className="core-profile-actions">
            <button
              className={inkAction === 'achievements' ? 'core-ink-expand' : ''}
              type="button"
              onClick={() => navigateWithInk('achievements')}
            >
              前往人物背景
            </button>
            <button type="button" onClick={() => onNavigate('works')}>
              觀看作品貢獻
            </button>
          </div>
        </div>
        <div
          className={`core-profile-board ${activeFactIndex !== null ? 'has-active' : ''}`}
          onMouseLeave={() => setActiveFactIndex(null)}
        >
          {coreFacts.map((fact, index) => (
            <article
              aria-pressed={activeFactIndex === index}
              className={`core-fact-card ${activeFactIndex === index ? 'active' : ''} ${
                activeFactIndex !== null && activeFactIndex !== index ? 'dimmed' : ''
              }`}
              key={fact.label}
              role="button"
              tabIndex={0}
              onClick={() => setActiveFactIndex(index)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  setActiveFactIndex(index);
                }
              }}
              onMouseEnter={() => setActiveFactIndex(index)}
            >
              <span>{fact.label}</span>
              {index === 3 ? (
                <div className="core-action-quotes">
                  {fact.value.split('\n\n').map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              ) : (
                <p>{fact.value}</p>
              )}
            </article>
          ))}
        </div>
      </section>
      <section
        aria-label="人物名言"
        className={`home-quote-band reveal ${quoteActive ? 'is-active' : ''}`}
        role="button"
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            triggerCenteredQuoteRipple(event);
          }
        }}
        onPointerDown={triggerQuoteRipple}
        onPointerEnter={() => setQuoteActive(true)}
        onPointerLeave={() => setQuoteActive(false)}
      >
        <span aria-hidden="true" className="quote-wave" />
        {quoteRipple && (
          <span
            aria-hidden="true"
            className="quote-ripple"
            key={quoteRipple.id}
            style={{ '--ripple-x': `${quoteRipple.x}px`, '--ripple-y': `${quoteRipple.y}px` }}
          >
            <span />
            <span />
            <span />
          </span>
        )}
        <blockquote>
          「我曾努力延長生命，後來才明白，更重要的是讓人擁有選擇人生的能力。」
        </blockquote>
      </section>
    </>
  );
}

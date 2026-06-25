import { useState } from 'react';
import { navItems, siteMeta } from '../data/siteData.js';

export default function Navbar({ activePage, onNavigate }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleNavigate(pageId) {
    onNavigate(pageId);
    setIsOpen(false);
  }

  return (
    <header className="navbar">
      <button
        className="brand-button"
        type="button"
        onClick={() => handleNavigate('home')}
      >
        <img src="/images/gathering-light-logo.png" alt="Gathering Light Logo，拾光慢語 Gathering Light 官方品牌 Logo" />
        <span>{siteMeta.title}</span>
      </button>
      <button
        className="menu-button"
        type="button"
        aria-label="開啟導覽選單"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
      >
        <span />
        <span />
        <span />
      </button>
      <nav className={isOpen ? 'nav-links is-open' : 'nav-links'}>
        {navItems.map((item) => (
          <button
            key={item.id}
            className={activePage === item.id ? 'nav-link active' : 'nav-link'}
            type="button"
            onClick={() => handleNavigate(item.id)}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </header>
  );
}

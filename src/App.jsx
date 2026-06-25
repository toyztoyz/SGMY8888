import { useMemo, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Achievements from './pages/Achievements.jsx';
import Team from './pages/Team.jsx';
import Works from './pages/Works.jsx';
import Conclusion from './pages/Conclusion.jsx';
import { siteMeta } from './data/siteData.js';

const routes = {
  home: Home,
  achievements: Achievements,
  team: Team,
  works: Works,
  conclusion: Conclusion,
};

function getInitialPage() {
  const hash = window.location.hash.replace('#/', '');
  return routes[hash] ? hash : 'home';
}

export default function App() {
  const [activePage, setActivePage] = useState(getInitialPage);
  const Page = useMemo(() => routes[activePage] ?? Home, [activePage]);

  function navigate(pageId) {
    setActivePage(pageId);
    window.history.pushState(null, '', `#/${pageId}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div className="app-shell">
      <Navbar activePage={activePage} onNavigate={navigate} />
      <main>
        <Page onNavigate={navigate} />
      </main>
      <Footer title={siteMeta.title} />
    </div>
  );
}

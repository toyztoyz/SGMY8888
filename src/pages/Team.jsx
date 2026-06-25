import PageHero from '../components/PageHero.jsx';
import TeamDossierShowcase from '../components/TeamDossierShowcase.jsx';
import { teamDossiers } from '../data/teamDossiersData.js';

export default function Team() {
  return (
    <section className="page team-page">
      <PageHero
        eyebrow="Team"
        title={'\u5718\u968a\u4ecb\u7d39'}
      />
      <TeamDossierShowcase members={teamDossiers} />
    </section>
  );
}

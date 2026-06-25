import PageHero from '../components/PageHero.jsx';
import TeamDossierShowcase from '../components/TeamDossierShowcase.jsx';
import { teamDossiers } from '../data/teamDossiersData.js';

export default function Team() {
  return (
    <section className="page team-page">
      <PageHero
        eyebrow="Team"
        title={'\u5718\u968a\u4ecb\u7d39'}
        description={
          '\u4e0d\u505a\u4eba\u7269\u95dc\u4fc2\u5716\u6216\u7d44\u7e54\u5716\uff0c\u6539\u6210\u5718\u968a\u6a94\u6848\u7246\uff1a\u7528\u7126\u9ede\u5361\u5448\u73fe\u6210\u54e1\u5b9a\u4f4d\u3001\u80fd\u529b\u6a19\u7c64\u8207\u6458\u8981\u3002'
        }
      />
      <TeamDossierShowcase members={teamDossiers} />
    </section>
  );
}

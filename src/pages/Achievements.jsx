import PageHero from '../components/PageHero.jsx';
import MilestoneImageCarousel from '../components/MilestoneImageCarousel.jsx';
import FormationFactors from '../components/FormationFactors.jsx';
import { backgroundMilestones } from '../data/backgroundMilestonesData.js';
import { formationFactors } from '../data/formationFactorsData.js';

export default function Achievements() {
  return (
    <section className="page background-page">
      <PageHero
        eyebrow="Background"
        title={'\u4eba\u7269\u80cc\u666f'}
      />
      <MilestoneImageCarousel items={backgroundMilestones} />
      <FormationFactors factors={formationFactors} />
    </section>
  );
}

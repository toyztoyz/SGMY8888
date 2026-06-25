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
        description={
          '\u4ee5\u5716\u7247\u8f2a\u64ad\u8207\u6458\u8981\u5448\u73fe\u4eba\u7269\u7684\u524d\u50b3\u8207\u6642\u9593\u7dda\u91cc\u7a0b\u7891\uff0c\u6b63\u5f0f\u5167\u5bb9\u53ef\u4e4b\u5f8c\u88dc\u4e0a\u3002'
        }
      />
      <MilestoneImageCarousel items={backgroundMilestones} />
      <FormationFactors factors={formationFactors} />
    </section>
  );
}

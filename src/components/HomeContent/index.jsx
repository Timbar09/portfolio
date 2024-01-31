import IntroCard from './IntroCard';
import ThemeToggleCard from './ThemeToggleCard';
import AboutCard from './AboutCard';
import ResumeCard from './ResumeCard';
import AbilitiesCard from './AbilitiesCard';
import Contact from './Contact';

import './index.scss';

const HomeContent = () => {
  return (
    <div className="home p-1">
      <ul className="home__list grid grid-gap-1">
        <IntroCard />

        <ThemeToggleCard />

        <AboutCard />

        <ResumeCard />

        <AbilitiesCard />

        <Contact />
      </ul>
    </div>
  );
};

export default HomeContent;

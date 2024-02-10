import IntroCard from './IntroCard';
import ThemeToggleCard from './ThemeToggleCard';
import AboutCard from './AboutCard';
import PortfolioCard from './PortfolioCard';
import AbilitiesCard from './AbilitiesCard';
import Contact from './Contact';

import './index.scss';

const HomeContent = () => {
  return (
    <div className="home p-2">
      <ul className="home__list grid">
        <IntroCard />

        <ThemeToggleCard />

        <AboutCard />

        <PortfolioCard />

        <AbilitiesCard />

        <Contact />
      </ul>
    </div>
  );
};

export default HomeContent;

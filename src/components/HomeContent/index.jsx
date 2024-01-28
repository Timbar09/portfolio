import { Link } from 'react-router-dom';

import './index.scss';

const HomeContent = () => {
  return (
    <div className="home py-2">
      <ul className="home__list grid grid-gap-1">
        <li className="home__intro home__list--item">
          <h1>Miles Mosweu</h1>

          <p>
            This is the home page intro section. It is a good place to explain
            what the site is about and what the user can expect to find here.
          </p>
        </li>
        <li className="home__list--item home__theme">Theme Switcher</li>
        <li className="home__list--item about-link">
          <Link to="/about">About Me Page</Link>
        </li>
        <li className="home__list--item home__resume">
          <Link to="/resume">Resume Page</Link>
        </li>
        <li className="home__list--item home__abilities">
          <Link to="/abilities">Abilities Page</Link>
        </li>
        <li className="home__list--item home__contact">
          <Link to="/contact">Contact Page</Link>
        </li>
      </ul>
    </div>
  );
};

export default HomeContent;

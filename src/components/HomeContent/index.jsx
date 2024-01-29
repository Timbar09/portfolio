import { Link } from 'react-router-dom';

import './index.scss';

const HomeContent = () => {
  return (
    <div className="home">
      <ul className="home__list grid">
        <li className="home__intro home__list--item">
          <span className="p-2">
            <h1>Miles Mosweu</h1>

            <p>
              This is the home page intro section. It is a good place to explain
              what the site is about and what the user can expect to find here.
            </p>
          </span>
        </li>
        <li className="home__list--item home__theme">
          <span className="p-2">Theme Switcher</span>
        </li>
        <li className="home__list--item about-link">
          <Link to="/about" className="p-2">
            About Me Page
          </Link>
        </li>
        <li className="home__list--item home__resume">
          <Link to="/resume" className="p-2">
            Resume Page
          </Link>
        </li>
        <li className="home__list--item home__abilities">
          <Link to="/abilities" className="p-2">
            Abilities Page
          </Link>
        </li>
        <li className="home__list--item home__contact">
          <Link to="/contact" className="p-2">
            Contact Page
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default HomeContent;

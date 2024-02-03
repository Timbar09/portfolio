import { Link } from 'react-router-dom';

import './IntroCard.scss';

const IntroCard = () => {
  return (
    <li className="home__intro home__list--item">
      <span className="p-2">
        <h1 className="home__intro--title">
          <span className="home__intro--title__name">
            <span>Hi👋, I&apos;m</span>{' '}
            <Link to="/about" className="about-link">
              Miles
            </Link>
            .{' '}
          </span>
          <span className="home__intro--title__description">
            Software Developer
          </span>
        </h1>

        <p className="home__intro--description">
          I craft unique, modern websites that captivate and invite engagement,
          enhancing your business or product&apos;s online presence.
        </p>
      </span>
    </li>
  );
};

export default IntroCard;

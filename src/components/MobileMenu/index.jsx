import { Link } from 'react-router-dom';
import { IoClose as CloseMenuIcon } from 'react-icons/io5';

import SocialList from '../globals/SocialList';

import './index.scss';

const MobileMenu = () => {
  return (
    <nav className="menu">
      <div className="menu__button">
        <button type="button" className="menu__button--close">
          <CloseMenuIcon />
        </button>
      </div>
      <div className="menu__social">
        <SocialList className="flex gap-1" />
      </div>

      <div className="menu__separator" />

      <ul className="menu__list">
        <li className="menu__item">
          <Link to="/">Home</Link>
        </li>

        <li className="menu__item">
          <Link to="/page2">Page 2</Link>
        </li>

        <li className="menu__item">
          <Link to="/page3">Page 3</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MobileMenu;

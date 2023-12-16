import { Link } from 'react-router-dom';

import Logo from '../globals/Logo';
import SocialList from '../globals/SocialList';

import './index.scss';

import photo from '../../assets/self.JPG';

const Nav = () => {
  return (
    <nav className="nav">
      <div className="container">
        <Logo />

        <div className="nav__profile">
          <ul className="nav__links">
            <li className="nav__links--item">
              <Link to="/">Home</Link>
            </li>
            <li className="nav__links--item">
              <Link to="/page2">Page 2</Link>
            </li>
            <li className="nav__links--item">
              <Link to="/page3">Page 3</Link>
            </li>
          </ul>
          <img src={photo} alt="profile" className="nav__profile--photo" />
          <SocialList />
        </div>
      </div>
    </nav>
  );
};

export default Nav;

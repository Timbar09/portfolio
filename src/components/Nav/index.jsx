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
          <img src={photo} alt="profile" className="nav__profile--photo" />
          <SocialList />
        </div>
      </div>
    </nav>
  );
};

export default Nav;

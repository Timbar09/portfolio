import Logo from '../globals/Logo';
import SocialList from '../globals/SocialList';

import './index.scss';

const Nav = () => {
  return (
    <nav className="nav">
      <div className="container">
        <Logo />
        <SocialList />
      </div>
    </nav>
  );
};

export default Nav;

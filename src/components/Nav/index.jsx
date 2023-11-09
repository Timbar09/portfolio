import Logo from '../globals/Logo';
import SocialList from '../globals/SocialList';

import styles from './index.module.scss';

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div className="container">
        <Logo />
        <SocialList />
      </div>
    </nav>
  );
};

export default Nav;

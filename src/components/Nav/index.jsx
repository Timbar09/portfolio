import Logo from '../globals/Logo';

import styles from './index.module.scss';

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div className="container">
        <Logo />
      </div>
    </nav>
  );
};

export default Nav;

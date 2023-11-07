import styles from './index.module.scss';

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div className="container">
        <a href="/" className="logo">
          Miles <span>Mosweu</span>
        </a>
      </div>
    </nav>
  );
};

export default Nav;

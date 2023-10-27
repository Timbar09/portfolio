import styles from './index.module.css';

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div className="container">
        <a href="/">
          Miles <span>Mosweu</span>
        </a>
      </div>
    </nav>
  );
};

export default Nav;

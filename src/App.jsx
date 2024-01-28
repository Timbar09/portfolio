import { useEffect, useState, createContext } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import useLocalStorage from 'use-local-storage';

import Nav from './components/Nav';
import HamburgerButton from './components/Nav/HamburgerButton';

export const ThemeContext = createContext(null);

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const preference = window.matchMedia('(prefers-color-scheme: light)').matches;
  const [theme, setTheme] = useLocalStorage(
    'theme',
    preference ? 'light' : 'dark'
  );

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    const menu = document.querySelector('.nav');
    const hamburgerButton = document.querySelector('.nav__hamburger');

    if (isMenuOpen) {
      menu.classList.remove('open');
      menu.classList.add('closed');

      setTimeout(() => {
        menu.classList.remove('closed');
      }, 500);

      hamburgerButton.parentElement.classList.add('active');
      hamburgerButton.parentElement.classList.remove('inactive');
    } else {
      menu.classList.remove('closed');
      menu.classList.add('open');

      hamburgerButton.parentElement.classList.add('inactive');
      hamburgerButton.parentElement.classList.remove('active');
    }
  };

  useEffect(() => {
    const body = document.querySelector('body');

    body.dataset.theme = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="app flex gap-2 px-2">
        <header className="p-2 p_md-0 grid_sm grid_sm-pi-c">
          {location.pathname !== '/' && (
            <>
              <HamburgerButton
                handleClick={toggleMenu}
                isMenuOpen={isMenuOpen}
              />

              <Nav handleMenuToggle={toggleMenu} isMenuOpen={isMenuOpen} />
            </>
          )}
        </header>

        <main>
          <Outlet />
        </main>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;

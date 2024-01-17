import { useState, createContext } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import Nav from './components/Nav';
import HamburgerButton from './components/Nav/HamburgerButton';

export const ThemeContext = createContext();

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
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

  return (
    <DarkModeContext.Provider value={false}>
      <div className="app flex">
        <header className="p-2 grid_sm grid_sm-pi-c">
          {location.pathname !== '/' && (
            <>
              <HamburgerButton
                handleClick={toggleMenu}
                isMenuOpen={isMenuOpen}
              />

              <Nav handleClick={toggleMenu} isMenuOpen={isMenuOpen} />
            </>
          )}
        </header>

        <main>
          <Outlet />
        </main>
      </div>
    </DarkModeContext.Provider>
  );
};

export default App;

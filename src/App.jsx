import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import Nav from './components/Nav';
import HamburgerButton from './components/Nav/HamburgerButton';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);

    if (isMenuOpen) {
      // Add open class to menu and remove closed class
      document.querySelector('.nav').classList.remove('open');
      document.querySelector('.nav').classList.add('closed');

      setTimeout(() => {
        // Remove closed class from menu
        document.querySelector('.nav').classList.remove('closed');
      }, 500);

      // Add disappear class to menu__button--open parent div and remove appear class
      document
        .querySelector('.nav__hamburger')
        .parentElement.classList.add('active');
      document
        .querySelector('.nav__hamburger')
        .parentElement.classList.remove('inactive');
    } else {
      document.querySelector('.nav').classList.remove('closed');
      document.querySelector('.nav').classList.add('open');

      // Add appear class to menu__button--open and remove disappear class
      document
        .querySelector('.nav__hamburger')
        .parentElement.classList.add('inactive');
      document
        .querySelector('.nav__hamburger')
        .parentElement.classList.remove('active');
    }
  };

  return (
    <div className="app flex">
      <header className="p-2 grid_sm grid_sm-pi-c">
        <HamburgerButton handleClick={toggleMenu} isMenuOpen={isMenuOpen} />

        {location.pathname !== '/' && (
          <Nav handleClick={toggleMenu} isMenuOpen={isMenuOpen} />
        )}
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default App;

import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import Nav from './components/Nav';
import MobileMenu from './components/MobileMenu';
import MobileMenuButton from './components/MobileMenu/MobileMenuButton';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);

    if (isMenuOpen) {
      // Add open class to menu and remove closed class
      document.querySelector('.menu').classList.remove('open');
      document.querySelector('.menu').classList.add('closed');

      setTimeout(() => {
        // Remove closed class from menu
        document.querySelector('.menu').classList.remove('closed');
      }, 500);

      // Add disappear class to menu__button--open parent div and remove appear class
      document
        .querySelector('.menu__button--open')
        .parentElement.classList.add('active');
      document
        .querySelector('.menu__button--open')
        .parentElement.classList.remove('inactive');
    } else {
      document.querySelector('.menu').classList.remove('closed');
      document.querySelector('.menu').classList.add('open');

      // Add appear class to menu__button--open and remove disappear class
      document
        .querySelector('.menu__button--open')
        .parentElement.classList.add('inactive');
      document
        .querySelector('.menu__button--open')
        .parentElement.classList.remove('active');
    }
  };

  return (
    <div className="app">
      <header>
        <MobileMenuButton handleClick={toggleMenu} isMenuOpen={isMenuOpen} />

        {location.pathname !== '/' && <Nav />}
        <MobileMenu handleClick={toggleMenu} isMenuOpen={isMenuOpen} />
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default App;

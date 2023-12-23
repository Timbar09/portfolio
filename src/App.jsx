import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import Nav from './components/Nav';
import MobileMenu from './components/MobileMenu';
import MobileMenuButton from './components/MobileMenu/MobileMenuButton';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="app">
      <header>
        <MobileMenuButton handleClick={toggleMenu} isMenuOpen={isMenuOpen} />

        {location.pathname !== '/' && <Nav />}
        {isMenuOpen && <MobileMenu handleClick={toggleMenu} />}
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default App;

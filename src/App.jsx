import { Outlet, useLocation } from 'react-router-dom';

import Nav from './components/Nav';
import MobileMenu from './components/MobileMenu';
import MobileMenuButton from './components/MobileMenu/MobileMenuButton';

const App = () => {
  const location = useLocation();

  return (
    <div className="app">
      <header>
        <MobileMenuButton />

        {location.pathname !== '/' && <Nav />}
        <MobileMenu />
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default App;

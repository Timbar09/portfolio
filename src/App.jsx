import { Outlet, useLocation } from 'react-router-dom';

import Nav from './components/Nav';
import MobileMenu from './components/MobileMenu';

const App = () => {
  const location = useLocation();

  return (
    <div className="app">
      <header>
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

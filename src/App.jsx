import { Outlet, useLocation } from 'react-router-dom';

import Nav from './components/Nav';

const App = () => {
  const location = useLocation();

  return (
    <div className="app">
      <header>{location.pathname !== '/' && <Nav />}</header>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default App;

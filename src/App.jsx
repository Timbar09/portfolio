import { Outlet, useLocation } from 'react-router-dom';

import Nav from './components/Nav';

const App = () => {
  const location = useLocation();

  return (
    <>
      <header>{location.pathname !== '/' && <Nav />}</header>

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default App;

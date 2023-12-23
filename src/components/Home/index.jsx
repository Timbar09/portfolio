import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <ul className="home__links">
        <li className="home__intro">
          <h1>Miles Mosweu</h1>
          <p>
            This is the home page intro section. It is a good place to explain
            what the site is about and what the user can expect to find here.
          </p>
        </li>
        <li className="home__links--item">
          <Link to="/about">About Me Page</Link>
        </li>
        <li className="home__links--item">
          <Link to="/projects">Projects Page</Link>
        </li>
        <li className="home__links--item">
          <Link to="/capabilities">Capabilities Page</Link>
        </li>
        <li className="home__links--item">
          <Link to="/contact">Contact Page</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;

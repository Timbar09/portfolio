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
          <Link to="/page2">Page 2</Link>
        </li>
        <li className="home__links--item">
          <Link to="/page3">Page 3</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;

import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <h1>Home Page</h1>
      <ul className="home__links">
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

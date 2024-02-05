import { Link } from 'react-router-dom';

const PortfolioCard = () => {
  return (
    <li className="home__list--item home__portfolio">
      <Link to="/portfolio" className="p-2">
        <h2>Portfolio</h2>

        <p>
          This is a link to the portfolio page. It is a good place to show my
          work and projects.
        </p>
      </Link>
    </li>
  );
};

export default PortfolioCard;

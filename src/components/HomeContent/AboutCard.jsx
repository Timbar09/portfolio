import { Link } from 'react-router-dom';

const AboutCard = () => {
  return (
    <li className="home__list--item home__about">
      <Link to="/about" className="p-2">
        <h2>About Me</h2>

        <p>
          This is a link to the about page. It is a good place to explain what I
          am about.
        </p>
      </Link>
    </li>
  );
};

export default AboutCard;

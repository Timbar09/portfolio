import { Link } from 'react-router-dom';

const AbilitiesCard = () => {
  return (
    <li className="home__list--item home__abilities">
      <Link to="/abilities" className="p-2">
        <h2>Abilities</h2>

        <p>
          This is a link to the abilities page. It is a good place to show my
          abilities.
        </p>
      </Link>
    </li>
  );
};

export default AbilitiesCard;

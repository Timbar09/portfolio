import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

const NavMenuItem = ({ MenuItem, handleClick }) => {
  const location = useLocation();

  return (
    <li className="nav__item mobile">
      <Link
        to={MenuItem.url}
        className={`flex flex-ai-c gap-1 p-1 ${
          location.pathname === MenuItem.url ? 'active' : ''
        }`}
        onClick={handleClick}
      >
        {MenuItem.icon}
        <span className="nav__item--text">{MenuItem.name}</span>
      </Link>
    </li>
  );
};

NavMenuItem.propTypes = {
  MenuItem: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default NavMenuItem;

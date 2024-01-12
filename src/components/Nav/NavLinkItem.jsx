import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavLinkItem = ({ LinkItem, isNavExpanded, handleClick }) => {
  const location = useLocation();

  return (
    <li className="nav__item">
      <Link
        to={LinkItem.url}
        className={`flex flex-ai-c gap-1 p-1 ${
          location.pathname === LinkItem.url ? 'active' : ''
        }`}
        onClick={handleClick}
      >
        {LinkItem.icon}
        {isNavExpanded && (
          <span className="nav__item--text">{LinkItem.name}</span>
        )}
      </Link>
    </li>
  );
};

NavLinkItem.propTypes = {
  LinkItem: PropTypes.object.isRequired,
  isNavExpanded: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default NavLinkItem;

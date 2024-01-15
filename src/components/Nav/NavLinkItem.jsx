import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

const NavLinkItem = ({ LinkItem, isNavExpanded }) => {
  const location = useLocation();

  return (
    <li className="nav__item desktop">
      <Link
        to={LinkItem.url}
        className={`flex flex-ai-c gap-1 p-1 ${
          location.pathname === LinkItem.url ? 'active' : ''
        }`}
      >
        {LinkItem.icon}
        {isNavExpanded && (
          <span className="nav__item--text desktop">{LinkItem.name}</span>
        )}
      </Link>
    </li>
  );
};

NavLinkItem.propTypes = {
  LinkItem: PropTypes.object.isRequired,
  isNavExpanded: PropTypes.bool.isRequired,
};

export default NavLinkItem;

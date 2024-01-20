import PropTypes from 'prop-types';

import Logo from '../globals/Logo';

import { IoClose as CloseMenuIcon } from 'react-icons/io5';
import { HiMenuAlt4 as HamburgerIcon } from 'react-icons/hi';

const NavHeader = ({
  isNavExpanded,
  isMobile,
  isMenuOpen,
  handleNavExpand,
  handleClick,
}) => {
  return (
    <div className="nav__header flex flex-jc-sb flex-ai-c pb-1">
      {isNavExpanded || isMobile ? <Logo /> : null}

      {isMobile && (
        <div className="nav__button">
          <button
            type="button"
            className={`nav__close-menu grid grid-pi-c ${
              isMenuOpen ? 'roll-left' : 'roll-right'
            }`}
            onClick={handleClick}
          >
            <CloseMenuIcon />
          </button>
        </div>
      )}

      {!isMobile && (
        <button
          type="button"
          className="nav__expand-toggle p-1"
          onClick={handleNavExpand}
          title={isNavExpanded ? 'Collapse menu' : 'Expand menu'}
        >
          {isNavExpanded ? <CloseMenuIcon /> : <HamburgerIcon />}
        </button>
      )}
    </div>
  );
};

NavHeader.propTypes = {
  isNavExpanded: PropTypes.bool.isRequired,
  isMobile: PropTypes.bool.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
  handleNavExpand: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default NavHeader;

import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Logo from '../globals/Logo';

import { IoClose as CloseMenuIcon } from 'react-icons/io5';
import { IoMdExpand as ExpandMenuIcon } from 'react-icons/io';
import { CgMinimize as MinimizeMenuIcon } from 'react-icons/cg';

const NavHeader = ({
  isNavExpanded,
  isMobile,
  isMenuOpen,
  handleNavExpand,
  handleMenuToggle,
}) => {
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    let timeoutId;

    if (isNavExpanded || isMobile) {
      timeoutId = setTimeout(() => {
        setShowLogo(true);
      }, 200);
    } else {
      setShowLogo(false);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isNavExpanded, isMobile]);

  return (
    <div className="nav__header flex flex-jc-sb flex-ai-c pb-1">
      <div className="nav__logo">
        {showLogo && (
          <Logo
            className={`logo ${isNavExpanded && !isMobile ? 'slide-in' : ''}`}
          />
        )}
      </div>

      {isMobile && (
        <div className="nav__button">
          <button
            type="button"
            className={`nav__close-menu grid grid-pi-c ${
              isMenuOpen ? 'roll-left' : 'roll-right'
            }`}
            onClick={handleMenuToggle}
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
          title={isNavExpanded ? 'Minimize menu' : 'Expand menu'}
        >
          {isNavExpanded ? (
            <MinimizeMenuIcon className="minimize" />
          ) : (
            <ExpandMenuIcon className="expand" />
          )}
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
  handleMenuToggle: PropTypes.func.isRequired,
};

export default NavHeader;

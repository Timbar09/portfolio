import { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useMediaQuery } from '../../hooks/useMediaQuery';

import NavLinkItem from './NavLinkItem';
import NavMenuItem from './NavMenuItem';
import SocialList from '../globals/SocialList';
import ThemeToggle from './ThemeToggle';
import NavHeader from './NavHeader';

import { menuItems } from './menuItems';

import './index.scss';

const Nav = ({ handleMenuToggle, isMenuOpen }) => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const menuRef = useRef();
  const isMobile = useMediaQuery('sm', 'down');

  const handleNavExpand = () => {
    setIsNavExpanded(!isNavExpanded);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        isMenuOpen
      ) {
        handleMenuToggle();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleMenuToggle, isMenuOpen]);

  return (
    <nav className="nav p-3 p_md-2" ref={menuRef}>
      <NavHeader
        isNavExpanded={isNavExpanded}
        isMobile={isMobile}
        isMenuOpen={isMenuOpen}
        handleNavExpand={handleNavExpand}
        handleMenuToggle={handleMenuToggle}
      />

      <div className="nav__separator" />

      {/* <div className="nav__social py-1">
        <SocialList
          className="social-lg flex flex-jc-c gap-2"
          isNavExpanded={isNavExpanded}
        />
      </div> */}

      <div className="nav__separator" />

      <ul className="nav__list py-1 flex flex-col gap-1">
        {menuItems.map((item) => {
          return isMobile ? (
            <NavMenuItem
              MenuItem={item}
              key={item.id}
              handleClick={handleMenuToggle}
            />
          ) : (
            <NavLinkItem
              LinkItem={item}
              key={item.id}
              isNavExpanded={isNavExpanded}
              isMenuOpen={isMenuOpen}
            />
          );
        })}
      </ul>

      <div className="nav__separator" />

      <ThemeToggle isNavExpanded={isNavExpanded} isMenuOpen={isMenuOpen} />
    </nav>
  );
};

Nav.propTypes = {
  handleMenuToggle: PropTypes.func.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
};

export default Nav;

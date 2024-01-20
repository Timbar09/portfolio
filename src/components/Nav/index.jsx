import { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useMediaQuery } from '../../hooks/useMediaQuery';

import { IoClose as CloseMenuIcon } from 'react-icons/io5';

import NavLinkItem from './NavLinkItem';
import NavMenuItem from './NavMenuItem';
import SocialList from '../globals/SocialList';
import ThemeToggle from './ThemeToggle';
import Logo from '../globals/Logo';

import { menuItems } from './menuItems';

import './index.scss';

const Nav = ({ handleClick, isMenuOpen }) => {
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
        handleClick();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClick, isMenuOpen]);

  return (
    <nav
      className="nav p-3 p_md-2"
      ref={menuRef}
      onMouseEnter={!isMobile ? handleNavExpand : undefined}
      onMouseLeave={!isMobile ? handleNavExpand : undefined}
    >
      <div className="nav__header flex flex-jc-sb">
        <div className="nav__logo">
          <Logo />
        </div>

        {isNavExpanded ||
          (isMobile && (
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
          ))}
      </div>

      <div className="nav__social py-1">
        <SocialList
          className="social-lg flex flex-jc-c gap-2"
          isNavExpanded={isNavExpanded}
        />
      </div>

      <div className="nav__separator" />

      <ul className="nav__list py-1 flex flex-col gap-1">
        {menuItems.map((item) => {
          return isMobile ? (
            <NavMenuItem
              MenuItem={item}
              key={item.id}
              handleClick={handleClick}
            />
          ) : (
            <NavLinkItem
              LinkItem={item}
              key={item.id}
              isNavExpanded={isNavExpanded}
            />
          );
        })}
      </ul>

      <div className="nav__separator" />

      <ThemeToggle isNavExpanded={isNavExpanded} />
    </nav>
  );
};

Nav.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
};

export default Nav;

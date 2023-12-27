import { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

import { IoClose as CloseMenuIcon } from 'react-icons/io5';

import SocialList from '../globals/SocialList';
import Logo from '../globals/Logo';
import { menuItems } from './menuItems';

import './index.scss';

const Nav = ({ handleClick, isMenuOpen }) => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const location = useLocation();
  const menuRef = useRef();

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
      onMouseEnter={handleNavExpand}
      onMouseLeave={handleNavExpand}
    >
      <div className="nav__header flex flex-jc-sb">
        <div className="nav__logo">
          <Logo />
        </div>

        {isNavExpanded && (
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
      </div>

      <div className="nav__social py-1">
        <SocialList
          className="social-lg flex flex-jc-c gap-2"
          isNavExpanded={isNavExpanded}
        />
      </div>

      <div className="nav__separator" />

      <ul className="nav__list">
        {menuItems.map((item) => {
          return (
            <li key={item.id} className="nav__item">
              <Link
                to={item.url}
                className={`flex flex-ai-c gap-1 p-1 ${
                  location.pathname === item.url ? 'active' : ''
                }`}
                onClick={handleClick}
              >
                {item.icon}
                {isNavExpanded && (
                  <span className="nav__item--text">{item.name}</span>
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

Nav.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
};

export default Nav;

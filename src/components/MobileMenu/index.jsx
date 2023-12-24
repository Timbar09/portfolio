import { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { IoClose as CloseMenuIcon } from 'react-icons/io5';
import { RiHome3Line as HomeIcon } from 'react-icons/ri';
import { RiUser3Line as AboutMeIcon } from 'react-icons/ri';
import { RiFileList2Line as ProjectsIcon } from 'react-icons/ri';
import { VscTools as CapabilitiesIcon } from 'react-icons/vsc';
import { RiKakaoTalkLine as ContactIcon } from 'react-icons/ri';

import SocialList from '../globals/SocialList';
import Logo from '../globals/Logo';

import './index.scss';

const menuItems = [
  {
    id: 1,
    icon: <HomeIcon />,
    name: 'Home',
    url: '/',
  },
  {
    id: 2,
    icon: <AboutMeIcon />,
    name: 'About Me',
    url: '/about',
  },
  {
    id: 3,
    icon: <ProjectsIcon />,
    name: 'Projects',
    url: '/projects',
  },
  {
    id: 4,
    icon: <CapabilitiesIcon />,
    name: 'Capabilities',
    url: '/capabilities',
  },
  {
    id: 5,
    icon: <ContactIcon />,
    name: 'Contact',
    url: '/contact',
  },
];

const MobileMenu = ({ handleClick, isMenuOpen }) => {
  const menuRef = useRef();

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
    <nav className="menu p-3" ref={menuRef}>
      <div className="menu__button flex flex-jc-sb">
        <Logo />

        <button
          type="button"
          className={`menu__button--close grid grid-pi-c ${
            isMenuOpen ? 'roll-left' : 'roll-right'
          }`}
          onClick={handleClick}
        >
          <CloseMenuIcon />
        </button>
      </div>

      <div className="menu__social py-1">
        <SocialList className="social-lg flex gap-2" />
      </div>

      <div className="menu__separator" />

      <ul className="menu__list">
        {menuItems.map((item) => {
          return (
            <li key={item.id} className="menu__item">
              <Link
                to={item.url}
                className="flex flex-ai-c gap-1 p-1"
                onClick={handleClick}
              >
                {item.icon}
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

MobileMenu.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
};

export default MobileMenu;

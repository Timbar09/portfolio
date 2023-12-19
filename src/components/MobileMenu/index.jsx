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

const MobileMenu = () => {
  return (
    <nav className="menu p-2">
      <div className="menu__button flex flex-jc-sb">
        <Logo />

        <button type="button" className="menu__button--close grid grid-pi-c">
          <CloseMenuIcon />
        </button>
      </div>

      <div className="menu__social py-1">
        <SocialList className="social-lg flex gap-2" />
      </div>

      <div className="menu__separator" />

      <ul className="menu__list">
        <li className="menu__item">
          <Link to="/" className="flex flex-ai-c gap-1 p-1">
            <HomeIcon />
            Home
          </Link>
        </li>

        <li className="menu__item">
          <Link to="/page2">
            <AboutMeIcon />
            About Me
          </Link>
        </li>

        <li className="menu__item">
          <Link to="/page3">
            <ProjectsIcon />
            Projects
          </Link>
        </li>

        <li className="menu__item">
          <Link to="/page4">
            <CapabilitiesIcon />
            Capabilities
          </Link>
        </li>

        <li className="menu__item">
          <Link to="/page5">
            <ContactIcon />
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MobileMenu;

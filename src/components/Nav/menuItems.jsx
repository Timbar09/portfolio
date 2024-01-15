import {
  RiHome3Line as HomeIcon,
  RiUser3Line as AboutMeIcon,
  RiFileList2Line as ProjectsIcon,
} from 'react-icons/ri';
import { BiMessageSquare as ContactIcon } from 'react-icons/bi';
import { VscTools as CapabilitiesIcon } from 'react-icons/vsc';

export const menuItems = [
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

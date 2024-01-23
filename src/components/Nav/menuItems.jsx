import { TbSmartHome as HomeIcon } from 'react-icons/tb';
import { TbUser as AboutMeIcon } from 'react-icons/tb';
import { MdWorkOutline as ProjectsIcon } from 'react-icons/md';
import { LiaToolsSolid as CapabilitiesIcon } from 'react-icons/lia';
import { BiMessageSquareDetail as ContactIcon } from 'react-icons/bi';

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
    name: 'About',
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
    name: 'Abilities',
    url: '/capabilities',
  },
  {
    id: 5,
    icon: <ContactIcon />,
    name: 'Contact',
    url: '/contact',
  },
];

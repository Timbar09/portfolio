import { TbSmartHome as HomeIcon } from 'react-icons/tb';
import { TbUser as AboutMeIcon } from 'react-icons/tb';
import { MdWorkOutline as PortfolioIcon } from 'react-icons/md';
import { LiaToolsSolid as AbilitiesIcon } from 'react-icons/lia';
import { MdOutlineEmail as ContactIcon } from 'react-icons/md';

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
    icon: <PortfolioIcon />,
    name: 'Portfolio',
    url: '/portfolio',
  },
  {
    id: 4,
    icon: <AbilitiesIcon />,
    name: 'Abilities',
    url: '/abilities',
  },
  {
    id: 5,
    icon: <ContactIcon />,
    name: 'Contact',
    url: '/contact',
  },
];

import { HiMenuAlt4 as MenuIcon } from 'react-icons/hi';

import './index.scss';

const MobileMenuButton = () => {
  return (
    <div className="menu__button remove-button-for-desktop">
      <button type="button" className="menu__button--open grid grid-pi-c">
        <MenuIcon />
      </button>
    </div>
  );
};

export default MobileMenuButton;

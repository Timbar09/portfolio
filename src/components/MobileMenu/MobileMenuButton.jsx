import PropTypes from 'prop-types';
import { HiMenuAlt4 as MenuIcon } from 'react-icons/hi';

import './index.scss';

const MobileMenuButton = ({ handleClick }) => {
  return (
    <div className="menu__button remove-button-for-desktop">
      <button
        type="button"
        className="menu__button--open grid grid-pi-c"
        onClick={handleClick}
      >
        <MenuIcon />
      </button>
    </div>
  );
};

MobileMenuButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default MobileMenuButton;
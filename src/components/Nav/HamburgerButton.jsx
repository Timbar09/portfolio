import PropTypes from 'prop-types';
import { HiMenuAlt4 as MenuIcon } from 'react-icons/hi';

// import './index.scss';

const HamburgerButton = ({ handleClick }) => {
  return (
    <div className="nav__button">
      <button
        type="button"
        className="nav__hamburger grid grid-pi-c"
        onClick={handleClick}
      >
        <MenuIcon />
      </button>
    </div>
  );
};

HamburgerButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default HamburgerButton;

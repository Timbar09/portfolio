import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Logo.scss';

const Logo = ({ className = 'logo' }) => {
  return (
    <Link to="/" className={className}>
      Miles<span> Mosweu</span>.
    </Link>
  );
};

Logo.propTypes = {
  className: PropTypes.string,
};

export default Logo;

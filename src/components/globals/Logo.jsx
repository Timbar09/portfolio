import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useMediaQuery } from '../../hooks/useMediaQuery';

import './Logo.scss';

const Logo = ({ className = 'logo' }) => {
  const isMobile = useMediaQuery('sm', 'down');

  return (
    <Link to="/" className={className}>
      Miles{isMobile && <span> Mosweu</span>}.
    </Link>
  );
};

Logo.propTypes = {
  className: PropTypes.string,
};

export default Logo;

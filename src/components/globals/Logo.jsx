import { Link } from 'react-router-dom';

import './Logo.scss';

const Logo = () => {
  return (
    <Link to="/" className="logo">
      Miles<span> Mosweu</span>.
    </Link>
  );
};

export default Logo;

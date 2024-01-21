import PropTypes from 'prop-types';
import { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../../App';
import { useMediaQuery } from '../../hooks/useMediaQuery';

import { MdOutlineLightMode as LightModeIcon } from 'react-icons/md';
import { MdOutlineDarkMode as DarkModeIcon } from 'react-icons/md';

const ThemeToggle = ({ isNavExpanded }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isMobile = useMediaQuery('sm', 'down');
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    let timeoutId;

    if (isNavExpanded || isMobile) {
      timeoutId = setTimeout(() => {
        setShowButton(true);
      }, 200);
    } else {
      setShowButton(false);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isNavExpanded, isMobile]);

  return (
    <div className={`${isNavExpanded ? 'py-1' : 'p-1'}`}>
      {showButton ? (
        <button
          className={`nav__theme nav__theme-animate flex ${
            isNavExpanded && !isMobile ? 'slide-in' : 'slide-out-left'
          }`}
          title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          onClick={toggleTheme}
        >
          <span className="darkmode">Dark</span>
          <span className="lightmode">Light</span>
          <span
            className={`slider slider-${theme}mode flex flex-ai-c flex-jc-c`}
          >
            {theme === 'dark' ? <DarkModeIcon /> : <LightModeIcon />}
            <span>{theme.charAt(0).toUpperCase() + theme.slice(1)}</span>
          </span>
        </button>
      ) : (
        <button
          className={`nav__theme nav__theme-minimized ${
            isNavExpanded ? 'slide-out' : 'slide-in'
          }`}
          title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          onClick={toggleTheme}
        >
          {theme === 'dark' ? (
            <LightModeIcon onClick={toggleTheme} />
          ) : (
            <DarkModeIcon onClick={toggleTheme} />
          )}
        </button>
      )}
    </div>
  );
};

ThemeToggle.propTypes = {
  isNavExpanded: PropTypes.bool.isRequired,
  // isMenuOpen: PropTypes.bool.isRequired,
};

export default ThemeToggle;

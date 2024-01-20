import PropTypes from 'prop-types';
import { useContext } from 'react';
import { ThemeContext } from '../../App';

import { MdOutlineLightMode as LightModeIcon } from 'react-icons/md';
import { MdOutlineDarkMode as DarkModeIcon } from 'react-icons/md';

const ThemeToggle = ({ isNavExpanded }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="p-1">
      {isNavExpanded ? (
        <button
          className="nav__theme nav__theme-animate flex"
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
          className="nav__theme nav__theme-minimized"
          title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
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
};

export default ThemeToggle;

import { useContext } from 'react';
import { ThemeContext } from '../../App';

import { MdOutlineLightMode as LightModeIcon } from 'react-icons/md';
import { MdOutlineDarkMode as DarkModeIcon } from 'react-icons/md';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <button
        className="nav__theme nav__theme-minimized p-1"
        title={`Switch to ${theme} mode`}
      >
        {theme === 'dark' ? (
          <LightModeIcon onClick={toggleTheme} />
        ) : (
          <DarkModeIcon onClick={toggleTheme} />
        )}
      </button>

      <button
        className="nav__theme nav__theme-animate flex"
        title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      >
        <span className="darkmode">Dark</span>
        <span className="lightmode">Light</span>
        <span className={`slider slider-${theme}mode flex flex-ai-c flex-jc-c`}>
          {theme === 'dark' ? <DarkModeIcon /> : <LightModeIcon />}
          <span>{theme.charAt(0).toUpperCase() + theme.slice(1)}</span>
        </span>
      </button>
    </>
  );
};

export default ThemeToggle;

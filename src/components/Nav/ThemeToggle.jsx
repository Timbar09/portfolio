import { useContext } from 'react';
import { ThemeContext } from '../../App';

import { MdOutlineLightMode as LightModeIcon } from 'react-icons/md';
import { MdOutlineDarkMode as DarkModeIcon } from 'react-icons/md';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button className="nav__theme-toggle p-1" title="Toggle dark mode">
      {theme === 'dark' ? (
        <LightModeIcon onClick={toggleTheme} />
      ) : (
        <DarkModeIcon onClick={toggleTheme} />
      )}
    </button>
  );
};

export default ThemeToggle;

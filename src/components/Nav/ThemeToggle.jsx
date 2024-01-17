import { useState } from 'react';

import { MdOutlineLightMode as LightModeIcon } from 'react-icons/md';
import { MdOutlineDarkMode as DarkModeIcon } from 'react-icons/md';

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button className="nav__darkmode-toggle p-2" title="Toggle dark mode">
      {darkMode ? (
        <LightModeIcon onClick={toggleDarkMode} />
      ) : (
        <DarkModeIcon onClick={toggleDarkMode} />
      )}
    </button>
  );
};

export default ThemeToggle;

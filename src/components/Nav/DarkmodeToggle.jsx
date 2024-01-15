import { MdOutlineLightMode as LightModeIcon } from 'react-icons/md';

const DarkmodeToggle = () => {
  return (
    <button className="nav__darkmode-toggle p-2" title="Toggle dark mode">
      <LightModeIcon />
    </button>
  );
};

export default DarkmodeToggle;

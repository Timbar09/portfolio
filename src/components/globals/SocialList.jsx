import PropTypes from 'prop-types';

import { AiFillGithub as Github } from 'react-icons/ai';
import { AiFillLinkedin as Linkedin } from 'react-icons/ai';
import { AiFillTwitterCircle as Twitter } from 'react-icons/ai';

import './SocialList.scss';

const socialsData = [
  {
    id: 1,
    icon: <Github />,
    url: 'https://github.com/Timbar09',
  },
  {
    id: 2,
    icon: <Linkedin />,
    url: 'www.linkedin.com/in/miles-mosweu09',
  },
  {
    id: 3,
    icon: <Twitter />,
    url: 'https://twitter.com/Milez09',
  },
];

const SocialList = ({ className = '', isNavExpanded }) => {
  const dataToShow = isNavExpanded ? socialsData : socialsData.slice(0, 1);

  return (
    <ul className={`social__list ${className} ${isNavExpanded ? '' : 'px-1'}`}>
      {dataToShow.map((social) => {
        return (
          <li key={social.id} className="social__list--item">
            <a href={social.url} target="_blank" rel="noreferrer">
              {social.icon}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

SocialList.propTypes = {
  className: PropTypes.string,
  isNavExpanded: PropTypes.bool,
};

export default SocialList;

import { AiFillGithub as Github } from 'react-icons/ai';
import { AiFillLinkedin as Linkedin } from 'react-icons/ai';
import { AiFillTwitterCircle as Twitter } from 'react-icons/ai';

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

const SocialList = () => {
  return (
    <ul className="social__list">
      <li className="social__list-item">
        <a
          href="https://github.com/Timbar09"
          target="_blank"
          rel="noopener noreferrer"
          title="Github"
        >
          <Github />
        </a>
      </li>

      <li className="social__list-item">
        <a
          href="www.linkedin.com/in/miles-mosweu09"
          target="_blank"
          rel="noopener noreferrer"
          title="Linkedin"
        >
          <Linkedin />
        </a>
      </li>

      <li className="social__list-item">
        <a
          href="https://twitter.com/Milez09"
          target="_blank"
          rel="noopener noreferrer"
          title="Twitter"
        >
          <Twitter />
        </a>
      </li>
    </ul>
  );
};

export default SocialList;

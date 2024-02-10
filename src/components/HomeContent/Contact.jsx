import { Link } from 'react-router-dom';

import SocialList from '../globals/SocialList';

import { MdArrowForward as ArrowForward } from 'react-icons/md';
import { MdOutlineEmail as ContactIcon } from 'react-icons/md';

import './Contact.scss';

const Contact = () => {
  return (
    <li className="home__list--item home__contact">
      <Link
        to="/contact"
        className="flex flex-col flex-jc-sb p-2"
        aria-label="Contact"
      >
        <div className="flex flex-jc-sb flex-ai-c">
          <h2 className="home__contact--title">Contact Me</h2>

          <ArrowForward className="home__contact--link-indicator" />
        </div>

        <div className="home__contact--icon">
          <div className="home__contact--icon__wrap grid grid-pi-c">
            <ContactIcon />
          </div>
        </div>

        <SocialList
          className="social-md flex flex-ai-c gap-1"
          isNavExpanded={true}
          isMenuOpen={true}
        />
      </Link>
    </li>
  );
};

export default Contact;

import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <li className="home__list--item home__contact">
      <Link to="/contact" className="p-2">
        <h2>Contact</h2>

        <p>
          This is a link to the contact page. It is a good place to show my
          contact details.
        </p>
      </Link>
    </li>
  );
};

export default Contact;

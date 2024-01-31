import { Link } from 'react-router-dom';

const ResumeCard = () => {
  return (
    <li className="home__list--item home__resume">
      <Link to="/resume" className="p-2">
        <h2>Resume</h2>

        <p>
          This is a link to the resume page. It is a good place to show my
          projects and work experience.
        </p>
      </Link>
    </li>
  );
};

export default ResumeCard;

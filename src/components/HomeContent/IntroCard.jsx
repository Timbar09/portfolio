import './IntroCard.scss';

const IntroCard = () => {
  return (
    <li className="home__intro home__list--item">
      <span className="p-2">
        <h1>
          <span className="home__intro--name">
            <span>Hi👋, I&apos;m</span> <span>Miles</span>.
          </span>
          <span className="home__intro--title">Software Developer</span>
        </h1>

        <p>
          This is the home page intro section. It is a good place to explain
          what the site is about and what the user can expect to find here.
        </p>
      </span>
    </li>
  );
};

export default IntroCard;

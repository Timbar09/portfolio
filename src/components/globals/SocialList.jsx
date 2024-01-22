import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { useMediaQuery } from '../../hooks/useMediaQuery';

import { AiFillGithub as Github } from 'react-icons/ai';
import { AiFillLinkedin as Linkedin } from 'react-icons/ai';
import { AiFillTwitterCircle as Twitter } from 'react-icons/ai';

import './SocialList.scss';
import 'swiper/css';

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
  const isMobile = useMediaQuery('sm', 'down');
  const [showFullList, setShowFullList] = useState(false);

  useEffect(() => {
    let timeoutId;

    if (isNavExpanded || isMobile) {
      timeoutId = setTimeout(() => {
        setShowFullList(true);
      }, 200);
    } else {
      setShowFullList(false);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isNavExpanded, isMobile]);

  return (
    <ul className={`social__list ${className} ${isNavExpanded && 'px-1'}`}>
      {showFullList ? (
        socialsData.map(({ id, url, icon }) => {
          return (
            <li key={id} className="social__list--item appear">
              <a href={url} target="_blank" rel="noreferrer">
                {icon}
              </a>
            </li>
          );
        })
      ) : (
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          className="social__slider"
        >
          {socialsData.map(({ id, url, icon }) => {
            return (
              <SwiperSlide
                key={id}
                className="social__list--item grid grid-pi-c"
              >
                <a href={url} target="_blank" rel="noreferrer">
                  {icon}
                </a>
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
    </ul>
  );
};

SocialList.propTypes = {
  className: PropTypes.string,
  isNavExpanded: PropTypes.bool,
};

export default SocialList;

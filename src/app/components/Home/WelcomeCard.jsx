import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getGreeting } from '../../helpers/greeting';
import { motivationQuote } from '../../helpers/greeting';

// these are outside of the function, in this way is not rendering this elements
const quote = motivationQuote();
const greeting = getGreeting();

const WelcomeCard = () => {
  const { user } = useSelector((state) => state.auth);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000); // update the time every second

    return () => clearInterval(intervalId);
  }, []); // run the effect only once on mount

  const options = {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  };

  const optionsTwo = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };

  return (
    <div className='welcomeCard'>
      <article className='card'>
        <div className='card-over'>
          <h1 className='card-over__title'>
            {greeting}, <span>{user ? user.name : 'visitante'}</span>
          </h1>
          <p className='card__para'>{quote}</p>
        </div>
        <figure className='card-img__container'>
          <img src='/assets/undraw_welcome_cats_thqn.svg' />
        </figure>
      </article>

      <article className='welcomeCard__date'>
        <p className='card__time card__time--clock'>{time.toLocaleTimeString([], options)}</p>
        <div className='welcomeCard__imgContainer'>
          <img className='card__time' src='/assets/icon__clock.svg' alt='icon clock' />
        </div>
        <p className='card__time'>{time.toLocaleDateString('es-ES', optionsTwo)}</p>
      </article>
    </div>
  );
};

export default WelcomeCard;

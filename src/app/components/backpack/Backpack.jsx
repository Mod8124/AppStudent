import React, { useRef } from 'react';
import { GiLightBackpack } from 'react-icons/gi';
import { BiCalculator, BiCalendar } from 'react-icons/bi';
import { IoMdClock } from 'react-icons/io';

import { useScrollDown } from '../../../hooks/useScrollDown';

const Backpack = () => {
  const scrollDirection = useScrollDown();

  console.log(scrollDirection);
  // const refBackpackIcon = useRef('');
  const refBackpackItems = useRef('');
  const handleClick = (e) => {
    console.log(e.target);
    // refBackpackIcon.current.classList.toggle('backpack__icon--on');
    refBackpackItems.current.classList.toggle('backpack__items--on');
    console.log('xd');
  };
  return (
    <div
      className={`backpack ${
        scrollDirection === 'down' ? 'backpack--down' : ''
      }`}
    >
      <div className='backpack__content'>
        <div
          onClick={handleClick}
          // ref={refBackpackIcon}
          className='backpack__icon'
        >
          <GiLightBackpack />
        </div>
        <ul ref={refBackpackItems} className='backpack__items '>
          <li className='backpack__item backpack__item--clock'>
            <IoMdClock />
            <span className='backpack__item-tooltip'>Cronómetro</span>
          </li>
          <li className='backpack__item backpack__item--calendar'>
            <BiCalendar />
            <span className='backpack__item-tooltip'>Calendario</span>
          </li>
          <li className='backpack__item backpack__item--calculator'>
            <BiCalculator />
            <span className='backpack__item-tooltip'>Calculadora</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Backpack;

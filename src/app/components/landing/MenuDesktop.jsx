import React from 'react';
import { Button } from './Button';
import toast from 'react-hot-toast';

export const MenuDesktop = ({ linkClass }) => {
  const handleClick = () => {
    toast('Hola, estamos trabajando en esta funcionalidad!', {
      icon: '🚧',
      duration: 4500,
      position: 'top-right',
    });
  };
  return (
    <ul className='d-nav__links'>
      <li className={linkClass}>
        <a href='#center'>Sobre nosotros</a>
      </li>
      <li className={linkClass}>
        <a href='#services'>Soluciones</a>
      </li>
      <li className={linkClass}>
        <a onClick={handleClick}>Inicia sesión</a>
      </li>
      <li className={linkClass}>
        <Button href='/app' type='secondary'>
          Explorar
        </Button>
      </li>
    </ul>
  );
};

import React from 'react';
import { Header } from '../landing/Header';
import { Button } from './Button';
import { useEffect } from 'react';
import { toast } from 'react-hot-toast';

export const Principal = () => {
  useEffect(() => {
    const delay = 100; // Delay in milliseconds (adjust as needed)

    const timer = setTimeout(() => {
      toast('Esta es mi versión de este proyecto, más información en los enlaces de abajo', {
        icon: '🚧',
        duration: 6000,
        position: 'top-center',
      });
    }, delay);

    return () => clearTimeout(timer); // Cleanup the timer when the component unmounts
  }, []);
  return (
    <section className='container seccion1'>
      <Header />
      <div className='principal wrapper'>
        <div className='principal__texts'>
          <h2 className='principal__title'>AppStudent</h2>
          <p className='principal__paragraph'>
            Mantén tus tareas organizadas y completas con nuestra aplicación revolucionaria! Con
            nuestra aplicación, puedes crear listas de tareas personalizadas, establecer
            recordatorios, priorizar tareas y mucho más.{' '}
          </p>
          <Button href='/app'>EMPEZAR A EXPLORAR</Button>
        </div>
        <picture className='principal__illustration'>
          <img src='/assets/svgs/principal_two.svg' alt='app students' />
        </picture>
      </div>
    </section>
  );
};

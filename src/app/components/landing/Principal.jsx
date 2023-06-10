import React from 'react';
import { Header } from '../landing/Header';
import { Button } from './Button';

export const Principal = () => {
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

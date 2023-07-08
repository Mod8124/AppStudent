import React from 'react';
import { Header } from '../landing/Header';
import { Button } from './Button';
import { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

export const Principal = () => {
  const { t } = useTranslation('common');
  useEffect(() => {
    const delay = 100; // Delay in milliseconds (adjust as needed)

    const timer = setTimeout(() => {
      toast(`${t('landing.toast')}`, {
        icon: '🚧',
        duration: 4000,
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
          <p className='principal__paragraph'>{t('landing.hero.para')}</p>
          <Button href='/app'>{t('landing.hero.btn')}</Button>
        </div>
        <picture className='principal__illustration'>
          <img src='/assets/svgs/principal_two.svg' alt='app students' />
        </picture>
      </div>
    </section>
  );
};

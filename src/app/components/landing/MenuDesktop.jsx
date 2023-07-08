import React from 'react';
import { Button } from './Button';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

export const MenuDesktop = ({ linkClass }) => {
  const { t } = useTranslation('common');
  const handleClick = () => {
    toast(`${t('landing.nav.toast')}`, {
      icon: '🚧',
      duration: 4500,
      position: 'top-right',
    });
  };
  return (
    <ul className='d-nav__links'>
      <li className={linkClass}>
        <a href='#center'>{t(`landing.nav.links.about`)}</a>
      </li>
      <li className={linkClass}>
        <a href='#services'>{t(`landing.nav.links.solution`)}</a>
      </li>
      <li className={linkClass}>
        <a onClick={handleClick}>{t(`landing.nav.links.log`)}</a>
      </li>
      <li className={linkClass}>
        <Button href='/app' type='secondary'>
          {t(`landing.nav.links.explore`)}
        </Button>
      </li>
    </ul>
  );
};

import React from 'react';
import { ServiceCard } from './ServiceCard';
import { useTranslation } from 'react-i18next';

export const Services = () => {
  const { t } = useTranslation('common');
  const socials = t('landing.services.services', { returnObjects: true });
  return (
    <div className='container' id='services'>
      <div className='services'>
        <div className='services__content'>
          <div className='services__head'>
            <h2 className='heading primary'>{t('landing.services.title')}</h2>
            <p className='paragraph primary'>{t('landing.services.subTitle')}</p>
          </div>
          <div className='services__list'>
            {socials.map((service) => (
              <ServiceCard
                key={crypto.randomUUID()}
                title={service.title}
                text={service.text}
                buttonText={service['button-text']}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { useTranslation } from 'react-i18next';

export const WhatIsAppStudents = () => {
  const { t } = useTranslation('common');
  return (
    <div className='container center' id='center'>
      <div className='what-is-app-student'>
        <div className='what-is-app-student__content'>
          <div className='what-is-app-student__texts'>
            <h3 className='heading'>{t('landing.about.title')}</h3>
            <p className='paragraph secondary'>{t('landing.about.para')}</p>
          </div>
          <picture className='what-is-app-student__illustration'>
            <img src='/assets/svgs/about_two.svg' alt='app students' />
          </picture>
        </div>
      </div>
    </div>
  );
};

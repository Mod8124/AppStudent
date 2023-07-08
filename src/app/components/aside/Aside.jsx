import React from 'react';
import { NavLink } from 'react-router-dom';
// icons
import { BsBook, BsListUl, BsSearch, BsHouse } from 'react-icons/bs';
import { useScrollDown } from '../../../hooks/useScrollDown';
import { MdLanguage } from 'react-icons/md';
import { useTranslation } from 'react-i18next';
import { useModal } from '../../../hooks/useModal';

const Aside = () => {
  const scrollDirection = useScrollDown();
  const { t, i18n } = useTranslation('common');
  const [active, toggleActive] = useModal(false);
  return (
    <aside className={`aside ${scrollDirection === 'down' ? 'aside--down' : 'aside--up'}`}>
      <article className='aside__links'>
        <div className='aside__linksContainer'>
          <NavLink
            to='/app/'
            className={({ isActive }) =>
              isActive ? 'aside__link aside__link--active' : 'aside__link'
            }
          >
            <BsHouse />
            {t('aside.home')}
          </NavLink>
          <NavLink
            to='/app/todo'
            className={({ isActive }) =>
              isActive ? 'aside__link aside__link--active' : 'aside__link'
            }
          >
            <BsListUl />
            {t('aside.task')}
          </NavLink>
          <NavLink
            to='/app/search?q='
            className={({ isActive }) =>
              isActive ? 'aside__link aside__link--active' : 'aside__link'
            }
          >
            <BsSearch />
            {t('aside.search')}
          </NavLink>
          <NavLink
            to='/app/dictionary'
            className={({ isActive }) =>
              isActive ? 'aside__link aside__link--active' : 'aside__link'
            }
          >
            <BsBook />
            {t('aside.dicti')}
          </NavLink>
        </div>

        <div
          className={
            active
              ? 'aside__link aside__linkLast aside__linkLast--active '
              : 'aside__link aside__linkLast'
          }
          onClick={toggleActive}
        >
          {active && (
            <div className='aside__lng'>
              <button onClick={() => i18n.changeLanguage('es')} className='aside__lng--button'>
                ES
              </button>
              <button onClick={() => i18n.changeLanguage('en')} className='aside__lng--button'>
                EN
              </button>
            </div>
          )}
          <MdLanguage />
          {t('aside.config')}
        </div>
      </article>
    </aside>
  );
};

export default Aside;

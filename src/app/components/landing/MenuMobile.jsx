import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toogleMenu } from '../../../store/ui/uiSlice';
import { Button } from './Button';
import { useTranslation } from 'react-i18next';

export const MenuMobile = ({ linkClass }) => {
  const { showMenu } = useSelector((state) => state.ui);
  const { t } = useTranslation('common');

  const dispatch = useDispatch();
  const handleRemoveMenu = () => {
    dispatch(toogleMenu());
  };

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'scroll';
    }
  }, [showMenu]);

  return (
    <div className={`wrapper-mobile ${showMenu && 'active'}`} onClick={handleRemoveMenu}>
      <ul className={`m-nav__links ${showMenu && 'active'}`}>
        <li className='nav__link--close'>
          <svg
            width='18'
            height='18'
            viewBox='0 0 18 18'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M12.4118 9L17.529 3.88278C18.157 3.25483 18.157 2.2367 17.529 1.60824L16.3918 0.470966C15.7638 -0.156989 14.7457 -0.156989 14.1172 0.470966L9 5.58818L3.88278 0.470966C3.25483 -0.156989 2.2367 -0.156989 1.60824 0.470966L0.470966 1.60824C-0.156989 2.23619 -0.156989 3.25432 0.470966 3.88278L5.58818 9L0.470966 14.1172C-0.156989 14.7452 -0.156989 15.7633 0.470966 16.3918L1.60824 17.529C2.23619 18.157 3.25483 18.157 3.88278 17.529L9 12.4118L14.1172 17.529C14.7452 18.157 15.7638 18.157 16.3918 17.529L17.529 16.3918C18.157 15.7638 18.157 14.7457 17.529 14.1172L12.4118 9Z'
              fill='#EEBBC3'
            />
          </svg>
        </li>
        <li className={linkClass}>
          <a href='#'>{t(`landing.nav.links.about`)}</a>
        </li>
        <li className={linkClass}>
          <a href='#'>{t(`landing.nav.links.solution`)}</a>
        </li>
        <li className={linkClass}>
          <Button href='#' type='primary'>
            {t(`landing.nav.links.log`)}
          </Button>
        </li>
        <li className={linkClass}>
          <Button href='/app' type='secondary'>
            {t(`landing.nav.links.explore`)}
          </Button>
        </li>
      </ul>
    </div>
  );
};

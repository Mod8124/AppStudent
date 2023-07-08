import { Link } from 'react-router-dom';
import Profile from './Profile';
import Searcher from './Searcher';
import { useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const { t } = useTranslation('common');

  const handleClick = () => {
    toast(`${t('header.toast')}`, {
      icon: '🚧',
      duration: 4500,
      position: 'top-right',
    });
  };
  return (
    <header className='header'>
      <div className='header__left'>
        <Link to='/app/' className='header__logo'>
          <span>App</span>Student
        </Link>
        <Searcher />
      </div>
      <div className='header__right'>
        {user ? (
          <Profile />
        ) : (
          <article className='header__visit'>
            <button className='header__login' onClick={handleClick}>
              {t('header.logIn')}
            </button>{' '}
            /{' '}
            <button className='header__register' onClick={handleClick}>
              {t('header.register')}
            </button>
          </article>
        )}
      </div>
    </header>
  );
};

export default Header;

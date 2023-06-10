import { Link } from 'react-router-dom';
import Profile from './Profile';
import Searcher from './Searcher';
import { useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const handleClick = () => {
    toast('Hola, estamos trabajando en esta funcionalidad!', {
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
              Iniciar sesión
            </button>{' '}
            /{' '}
            <button className='header__register' onClick={handleClick}>
              Registrate
            </button>
          </article>
        )}
      </div>
    </header>
  );
};

export default Header;

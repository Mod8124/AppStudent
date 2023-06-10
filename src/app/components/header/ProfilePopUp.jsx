/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import { BsBoxArrowLeft, BsFillFilePersonFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { onLogout } from '../../../store/auth/authSlice';

const ProfilePopUp = ({ handleClick, refProfile }) => {
  const dispatch = useDispatch();
  // const { name, username, image } = useSelector((state) => state.auth.user);

  const handleLogout = () => {
    localStorage.removeItem('token');
    dispatch(onLogout());
  };

  return (
    <div ref={refProfile} className='profile-pop'>
      <div className='profile-pop__header'>
        <img
          className='profile-pop__img'
          src="https://i.pinimg.com/564x/de/d1/ec/ded1eca7168a26953d81b1328a816b92.jpg'"
          alt={name}
        />
        <div className='profile-pop__user-info'>
          <h2 className='profile-pop__name'>denis</h2>
          <h2 className='profile-pop__user'>@Mod812</h2>
        </div>
      </div>
      <div className='profile-pop__body'>
        <Link to='/app/profile' className='profile-pop__link' onClick={handleClick}>
          <BsFillFilePersonFill />
          Tu Perfil
        </Link>
      </div>
      <div className='profile-pop__footer' onClick={handleLogout}>
        <Link className='profile-pop__link'>
          <BsBoxArrowLeft />
          Cerrar sesión
        </Link>
      </div>
    </div>
  );
};

export default ProfilePopUp;

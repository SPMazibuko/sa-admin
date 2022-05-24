import React from 'react';
import './header.css';
import {FaSearch} from 'react-icons/fa';
import {MdNotificationsActive} from 'react-icons/md';
import {FaUserTie} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
    const navigate = useNavigate();
  return (
    <div className='header__container'>
        <div className='nav'>
            <div className='search'>
                <input type="text" placeholder='Search...' />
                <button type='submit'><FaSearch className='search-icon'/></button>
            </div>
            <div className='user'>
                <MdNotificationsActive className='Notification-icon'/>
                <div className='img-case'>
                    <FaUserTie className='user-icon'/>
                </div>
            </div>
            <button type='submit' className='btn-logout'>Logout</button>
        </div>
        </div>
  )
}

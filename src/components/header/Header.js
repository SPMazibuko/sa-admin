import React from 'react';
import './header.css';
import {FaSearch} from 'react-icons/fa';
import {MdNotificationsActive} from 'react-icons/md';
import {FaUserTie} from 'react-icons/fa';


export const Header = () => {
  return (
    <div className='header__container'>
        <div className='nav'>
            <div className='search'>
                <input type="text" placeholder='Search...' />
                <button type='submit'><FaSearch className='search-icon'/></button>
            </div>
            <div className='user'>
                <a href='#' className='btn'>Add New</a>
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

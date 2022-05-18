import React, {useState} from 'react';
import './sidebar.css';
import {MdOutlineDashboard} from 'react-icons/md';
import {GoBook} from 'react-icons/go';
import {MdOutlineSchool} from 'react-icons/md';
import {BiHelpCircle} from 'react-icons/bi';
import {FiSettings} from 'react-icons/fi';

export const Sidebar = () => {
    const [activeNav, setActiveNav]= useState('#');
  return (
    <div className='side-menu'>
        <div className='sidebar__logo'>
            <h1>SA_System</h1>
        </div>

        <ul>
            <li href onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}>
                <MdOutlineDashboard /> &nbsp; Dashboard
            </li>
            <li onClick={() => setActiveNav('#students')} className={activeNav === '#students' ? 'active' : ''}>
                <GoBook /> &nbsp; Students
            </li>
            <li onClick={() => setActiveNav('#lectures')} className={activeNav === '#lectures' ? 'active' : ''}>
                <MdOutlineSchool /> &nbsp; Lectures
            </li>
            <li onClick={() => setActiveNav('#help')} className={activeNav === '#help' ? 'active' : ''}>
                <BiHelpCircle /> &nbsp; Help
            </li>
            <li onClick={() => setActiveNav('#settings')} className={activeNav === '#settings' ? 'active' : ''}>
                <FiSettings /> &nbsp; Settings
            </li>
        </ul>
    </div>
  )
}

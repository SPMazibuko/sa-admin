import React, {useState} from 'react';
import './students.css';
import { Sidebar } from '../sidebar/Sidebar';
import { Header } from '../header/Header';
import {FaRegUserCircle} from 'react-icons/fa';
import {IoIosInformationCircle} from 'react-icons/io';

export const Students = () => {
    return(
        <div>
            <Sidebar />
            <div className='dashboard__container'>
                <Header />
                <div className='students__container'>
                <div className="new-students">
                    <div className="title">
                        <h2>Registered Students</h2>
                        <a href="#" className= "btn">View All</a>
                        <a href="#" className= "btn">Add New Student</a>
                    </div>
                    <table>
                        <tr>
                            <th>Profile</th>
                            <th>Student Number</th>
                            <th>option</th>
                        </tr>
                        <tr>
                            <td><FaRegUserCircle className='dashboard__user-icon'/></td>
                            <td>22156987</td>
                            <td><IoIosInformationCircle className='dashboard__user-icon'/></td>
                        </tr>
                        <tr>
                            <td><FaRegUserCircle className='dashboard__user-icon'/></td>
                            <td>219545632</td>
                            <td><IoIosInformationCircle className='dashboard__user-icon'/></td>
                        </tr>
                    </table>
                </div>
            </div>
            </div>
        </div>
    );
}
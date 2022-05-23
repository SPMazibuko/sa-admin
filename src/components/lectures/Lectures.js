import React, {useState} from 'react';
import './lectures.css';
import { Sidebar } from '../sidebar/Sidebar';
import { Header } from '../header/Header';
import {FaRegUserCircle} from 'react-icons/fa';
import {IoIosInformationCircle} from 'react-icons/io';

export const Lectures = () => {
    return(
        <div>
            <Sidebar />
            <div className='dashboard__container'>
                <Header />
                <div className='students__container'>
                <div className="new-students">
                    <div className="title">
                        <h2>Registered Lectures</h2>
                        <a href="#" className= "btn">View All</a>
                        <a href="#" className= "btn">Add New Lecture</a>
                    </div>
                    <table>
                        <tr>
                            <th>Profile</th>
                            <th>Employee Number</th>
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
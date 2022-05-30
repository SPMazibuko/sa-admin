import React, {useState, useEffect} from 'react';
import './lectures.css';
import { Sidebar } from '../sidebar/Sidebar';
import { Header } from '../header/Header';
import {FaRegUserCircle} from 'react-icons/fa';
import {IoIosInformationCircle} from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import firebase from '../../firebase';
export const Lectures = () => {

    const navigate = useNavigate();
    return(
        <div>
            <Sidebar />
            <div className='dashboard__container'>
                <Header />
                <div className='students__container'>
                <div className="new-students">
                    <div className="title">
                        <h2>Registered Lectures</h2>
                        <button className= "btn-add" onClick={()=>navigate('/addlecture')}>Add Lecture</button>
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
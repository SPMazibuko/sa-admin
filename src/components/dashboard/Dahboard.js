import React from 'react';
import './dasboard.css';
import { Sidebar } from '../sidebar/Sidebar';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Header } from '../header/Header';
import {GoBook} from 'react-icons/go';
import {MdOutlineSchool} from 'react-icons/md';
import {FaRegUserCircle} from 'react-icons/fa';
import {IoIosInformationCircle} from 'react-icons/io';

const Dashboard = () => {
return(
<div> 
    <Sidebar />
     <div className='dashboard__container'>
         <Header />
         <div className='dashboard__content'>
             <div className='dashboard__cards'>
                 <div className='dashboard__card'>
                     <div className='box'>
                         <h1>700</h1>
                         <h3>Students</h3>
                     </div>
                     <div className="icon-case">
                        <GoBook className='card-icon'/>
                    </div>
                 </div>
                 <div className='dashboard__card'>
                     <div className='box'>
                         <h1>20</h1>
                         <h3>Lectures</h3>
                     </div>
                     <div className="icon-case">
                        <MdOutlineSchool className='card-icon'/>
                    </div>
                 </div>
             </div>
             <div className="new-students">
                    <div className="title">
                        <h2>New Students</h2>
                        <a href="#" class="btn">View All</a>
                    </div>
                    <table>
                        <tr>
                            <th>Profile</th>
                            <th>Name</th>
                            <th>option</th>
                        </tr>
                        <tr>
                            <td><FaRegUserCircle className='dashboard__user-icon'/></td>
                            <td>John Steve Doe</td>
                            <td><IoIosInformationCircle className='dashboard__user-icon'/></td>
                        </tr>
                        <tr>
                            <td><FaRegUserCircle className='dashboard__user-icon'/></td>
                            <td>John Steve Doe</td>
                            <td><IoIosInformationCircle className='dashboard__user-icon'/></td>
                        </tr>
                    </table>
                </div>
         </div>
     </div>

</div>
);
}

export default Dashboard;

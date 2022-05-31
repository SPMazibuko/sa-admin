import React from 'react';
import './dasboard.css';
import { Sidebar } from '../sidebar/Sidebar';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Header } from '../header/Header';
import {GoBook} from 'react-icons/go';
import {MdOutlineSchool} from 'react-icons/md';


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
                         <h1>40</h1>
                         <h3>Lectures</h3>
                     </div>
                     <div className="icon-case">
                        <MdOutlineSchool className='card-icon'/>
                    </div>
                 </div>
                 <div className='dashboard__card'>
                     <div className='box'>
                         <h1>90%</h1>
                         <h3>Overall School Attendance</h3>
                     </div>
                     <div className="icon-case">
                        <MdOutlineSchool className='card-icon'/>
                    </div>
                 </div>
             </div>

             <div className='noticeboard__container'>
                <div className="noticeboard">
                    <div className="title">
                        <h2>Latest Notice Updates</h2>
                        <button className= "btn-view">View All</button>
                    </div>
                    <table>
                        <tr>
                            <th>Date</th>
                            <th>Notice</th>
                            <th>Options</th>
                        </tr>
                        <tr>
                            <td>20/06/2020</td>
                            <td>Recess starts</td>
                            <td>delete/update</td>
                        </tr>
                        <tr>
                        <td>20/06/2020</td>
                            <td>Recess starts</td>
                            <td>delete/update</td>
                        </tr>
                    </table>
                </div>
            </div>
         </div>
     </div>

</div>
);
}

export default Dashboard;

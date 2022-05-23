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
                         <h1>20</h1>
                         <h3>Lectures</h3>
                     </div>
                     <div className="icon-case">
                        <MdOutlineSchool className='card-icon'/>
                    </div>
                 </div>
             </div>
         </div>
     </div>

</div>
);
}

export default Dashboard;

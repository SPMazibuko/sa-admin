import React from 'react';
import './addStudent.css';
import { Sidebar } from '../sidebar/Sidebar';
import { Header } from '../header/Header';

function AddStudent() {
  return (
    <div>
        <Sidebar />
        <div className='dashboard__container'>
            <Header />
            <div className='addstudent__container'>
                <div className='add-student'>
                    <div className="title">
                        <h2>Add New Student</h2>
                    </div>
                    <table>
                        
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddStudent
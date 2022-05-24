import React from 'react';
import './addLecture.css';
import { Sidebar } from '../sidebar/Sidebar';
import { Header } from '../header/Header';

function AddLecture() {
  return (
    <div>
        <Sidebar />
        <div>
            <Header />

            <div>
            AddLecture
            </div>
        </div>
    </div>
  )
}

export default AddLecture
import React, { useState } from 'react'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import not from '../../assets/as.jpeg'
import logo from '../../assets/logo1.jpeg'
import { useNavigate } from 'react-router-dom';
import Staff from './Staff';
import Fees from './Fees';
import Student from './student'
import Announcement from './Announcement';
import Attendance from './Attendance';
import ChangePassword from './ChangePassword';
import Profile from './Profile'

function Dashboard() {
    const navigate = useNavigate();
    const [showData, setShowData]=useState('Dashboard');
    const sections = [
        'Dashboard',
        'Student',
        'Staff',
        'Attendance',
        'Announcement',
        'Collect Fees',
        'Change password',
    ];
    const handleSectionClick = (section) => {
        setShowData(section);    
    };

    return (
        <div className=' flex h-screen w-screen bg-white'>
            <div className='h-[100%] w-64 bg-white'>
                <div className='h-[25%] w-64'>
                    <img
                        src={logo} />
                </div>
                <div className='py-3 bg-red-200 h-[75%]'>
                    <ul className="w-64 ">
                        {sections.map((section, index) => (
                            <li
                                key={index}
                                className="text-center w-full p-4 dark:md:hover:bg-fuchsia-600 cursor-pointer text-primary-600"
                                onClick={() => handleSectionClick(section)}
                            >
                                {section}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className=' bg-red-200 py-2 h-[14%] w-screen '>
                <div className='flex justify-between'>
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-64 p-2 rounded-2xl" />
                    <div className='flex justify-end '>
                        <img
                            src={not}
                            className="h-8 w-8 px-1 py-1" />
                        <div className='text-1xl bold w-max px-4'>Nouman Raees</div>
                    </div>
                </div>
                <div className=' bg-yellow-200 w-[50] h-10 mt-2 py-2'>
                    <h1 className='p-1 text-1xl'>{showData}</h1>
                </div>
                { showData === "Dashboard" && <Profile setValue={setShowData}/>}
                {showData==="Student" && <Student/>}
                {showData==="Staff" && <Staff />}
                {showData==="Collect Fees" && <Fees />}
                {showData==="Announcement" && <Announcement />}
                {showData==="Attendance" && <Attendance />}
                {showData==="Change password" && <ChangePassword />}
            </div>
        </div>
    )
}

export default Dashboard

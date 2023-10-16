import React from 'react';
import {BrowserRouter , Routes, Route} from "react-router-dom";
import Homepage from './components/Homepage/Homepage';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Dashboard from './components/Dashboard/Dashboard';
import './App.css';

function App() {
    return ( 
        <div className = "App" >
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signup" element={<Signup/>}/>              
                <Route path="/Dashboard" element={<Dashboard/>}/>
            </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

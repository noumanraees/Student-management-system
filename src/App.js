import React from 'react';
import './App.css';
import Homepage from './components/Homepage/Homepage';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import {BrowserRouter , Routes, Route} from "react-router-dom";

function App() {
    return ( 
        <div className = "App" >
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signup" element={<Signup/>}/>
            </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
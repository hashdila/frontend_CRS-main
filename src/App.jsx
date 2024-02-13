import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';

import Home from './home';
import Register from './forms/register';
import Login from './forms/login';
import UserData from './admin/Userdata';
import AdminLogin from './admin/adminlogin';
import Dashboard from './admin/dashboard';


function App() {


  

  return (
    
      <div>
       


    <Router>
          <Routes>
            <Route path="/" element={<Home />} />;
            <Route path="/Register" element={<Register/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/UserData" element={<UserData/>}/>
            <Route path="/AdminLogin" element={<AdminLogin/>}/>
            <Route path="/dashboard" element={<Dashboard />} />
            
          </Routes>
        </Router>
      </div>
        
  )
}

export default App

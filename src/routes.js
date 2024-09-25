import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Home from './pages/home/Home';

const AppRoutes = ({ onUserRegister, onUserLogin, userData }) => {
    return (
        <Router>
            <Routes>
                <Route path="/register" element={<Register onUserRegister={onUserRegister} />} />
                <Route path="/login" element={<Login onUserLogin={onUserLogin} />} />
                <Route path="/home" element={userData ? <Home userData={userData} /> : <Navigate to="/login" />} />
                <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;

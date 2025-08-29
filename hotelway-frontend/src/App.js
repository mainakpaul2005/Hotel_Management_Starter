// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import HotelDetailPage from './pages/HotelDetailPage';
import HotelOwnerDashboard from './pages/HotelOwnerDashboard';
import AdminDashboard from './pages/AdminDashboard';
import HotelsPage from './pages/HotelsPage'; // Import the new page

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                {/* Customer Pages */}
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/hotels" element={<HotelsPage />} /> {/* Add route for all hotels */}
                <Route path="/hotel/:id" element={<HotelDetailPage />} />

                {/* Hotel Owner Page */}
                <Route path="/owner/dashboard" element={<HotelOwnerDashboard />} />

                {/* Admin Page */}
                <Route path="/admin/dashboard" element={<AdminDashboard />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
// src/components/Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200">
            <nav className="container mx-auto px-6 py-3">
                <div className="flex items-center justify-between">
                    <NavLink to="/" className="text-2xl font-bold text-dark-text font-display tracking-wider">
                        HotelWay
                    </NavLink>
                    <div className="flex items-center space-x-4">
                        <NavLink to="/login" className="text-gray-600 hover:text-primary font-semibold">Login</NavLink>
                        <NavLink to="/signup" className="bg-primary text-white font-semibold px-4 py-2 rounded-lg hover:bg-accent transition-colors duration-300">
                            Sign Up
                        </NavLink>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
// src/pages/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="relative h-screen w-full flex items-center justify-center text-center overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1920&q=80')" }}
            />
            {/* Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/50" />

            {/* Content */}
            <div className="relative z-10 px-4">
                <h1 className="text-white font-extrabold text-huge leading-tight uppercase font-display">
                    Explore the World
                </h1>
                <p className="text-light-text text-xl md:text-2xl mt-4 max-w-3xl mx-auto">
                    Discover amazing places and experiences. Your next adventure awaits.
                </p>
                <div className="mt-10">
                    <Link
                        to="/hotels" // Changed this to a more specific link
                        className="bg-primary text-white font-bold py-4 px-10 rounded-full text-lg uppercase hover:bg-accent transition-all duration-300 ease-in-out transform hover:scale-110 shadow-lg"
                    >
                        Book Now
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
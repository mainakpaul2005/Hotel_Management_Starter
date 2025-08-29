// src/pages/HotelsPage.js
import React from 'react';
import { Link } from 'react-router-dom';

// Dummy hotel data
const hotels = [
    { id: 1, name: 'Grand Hyatt', location: 'New York, NY' },
    { id: 2, name: 'The Ritz-Carlton', location: 'San Francisco, CA' },
    { id: 3, name: 'Four Seasons', location: 'Chicago, IL' },
];

const HotelsPage = () => {
    return (
        <div className="container mx-auto p-6">
            <h1 className="font-display text-5xl font-bold text-dark-text mb-8 text-center">Our Hotels</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {hotels.map(hotel => (
                    <Link to={`/hotel/${hotel.id}`} key={hotel.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
                        <img className="w-full h-56 object-cover" src={`https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=400&q=80`} alt={hotel.name} />
                        <div className="p-6">
                            <h3 className="font-display text-2xl font-bold text-dark-text">{hotel.name}</h3>
                            <p className="text-gray-600 mt-2">{hotel.location}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default HotelsPage;
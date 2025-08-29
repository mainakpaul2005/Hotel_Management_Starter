// src/pages/HotelOwnerDashboard.js
import React from 'react';

const StatCard = ({ title, value, icon }) => (
    <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
        <div className="bg-blue-100 text-primary p-3 rounded-full">{icon}</div>
        <div>
            <h3 className="text-sm font-medium text-gray-500">{title}</h3>
            <p className="mt-1 text-3xl font-semibold text-gray-900">{value}</p>
        </div>
    </div>
);

const HotelOwnerDashboard = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="container mx-auto p-6">
                <h1 className="font-display text-5xl font-bold text-dark-text mb-8">Hotel Manager</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <StatCard title="Total Bookings" value="120" />
                    <StatCard title="Occupancy Rate" value="75%" />
                    <StatCard title="Revenue" value="$25,000" />
                    <StatCard title="Pending Approvals" value="3" />
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="font-display text-3xl font-bold">Bookings & Guest List</h2>
                    <p className="mt-2 text-gray-600">A list of all current and past bookings will be displayed here.</p>
                </div>
            </div>
        </div>
    );
};

export default HotelOwnerDashboard;
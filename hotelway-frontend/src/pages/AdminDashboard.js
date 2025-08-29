// src/pages/AdminDashboard.js
import React from 'react';
import { Link } from 'react-router-dom';

const AdminCard = ({ title, description, link }) => (
    <Link to={link} className="block bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
        <h3 className="font-display text-2xl font-bold text-dark-text">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
    </Link>
);

const AdminDashboard = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="container mx-auto p-6">
                <h1 className="font-display text-5xl font-bold text-dark-text mb-8">Admin Dashboard</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AdminCard title="Manage Users" description="View, edit, or remove users." link="/admin/users" />
                    <AdminCard title="Hotel Approvals" description="Approve or reject new hotels." link="/admin/hotels" />
                    <AdminCard title="User Complaints" description="Manage user complaints." link="/admin/complaints" />
                    <AdminCard title="Blog Posts" description="Review and approve blog posts." link="/admin/blog" />
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
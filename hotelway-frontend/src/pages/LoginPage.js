// src/pages/LoginPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 space-y-8">
                <div>
                    <h2 className="text-center text-5xl font-extrabold text-dark-text font-display uppercase">
                        Sign In
                    </h2>
                    <p className="mt-4 text-center text-sm text-gray-600">
                        Don't have an account?{' '}
                        <Link to="/signup" className="font-medium text-primary hover:text-accent">
                            Create one now
                        </Link>
                    </p>
                </div>
                <form className="space-y-6">
                    <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary" />
                    <input type="password" placeholder="Password" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary" />
                    <button type="submit" className="w-full bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-accent transition duration-300 ease-in-out transform hover:scale-105">
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    );
};
export default LoginPage;
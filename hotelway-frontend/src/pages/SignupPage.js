// src/pages/SignupPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const SignupPage = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 space-y-8">
                <div>
                    <h2 className="text-center text-5xl font-extrabold text-dark-text font-display uppercase">
                        Create Account
                    </h2>
                    <p className="mt-4 text-center text-sm text-gray-600">
                        Already have an account?{' '}
                        <Link to="/login" className="font-medium text-primary hover:text-accent">
                            Sign In
                        </Link>
                    </p>
                </div>
                <form className="space-y-4">
                    <input type="text" placeholder="Full Name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary" />
                    <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary" />
                    <input type="password" placeholder="Password" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary" />
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary text-gray-500">
                        <option>Select Gender</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                    </select>
                    <button type="submit" className="w-full bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-accent transition duration-300 ease-in-out transform hover:scale-105">
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
};
export default SignupPage;
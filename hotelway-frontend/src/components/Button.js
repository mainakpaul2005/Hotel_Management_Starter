// src/components/Button.js
import React from 'react';

const Button = ({ children, onClick, className = '' }) => {
    return (
        <button
            onClick={onClick}
            className={`bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-accent transition duration-300 ease-in-out transform hover:scale-105 ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;
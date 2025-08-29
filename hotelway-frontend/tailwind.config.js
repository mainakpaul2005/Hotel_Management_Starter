/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Druk Wide', 'sans-serif'], // We will add this font
            },
            colors: {
                'primary': '#007aff', // Apple's classic blue
                'accent': '#005ecb',
                'light-text': '#f5f5f7',
                'dark-text': '#1d1d1f',
            },
            fontSize: {
                'huge': '5rem', // A big font size, close to 50px
            },
            backdropBlur: {
                'xl': '24px',
            }
        },
    },
    plugins: [],
}
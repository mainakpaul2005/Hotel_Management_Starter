import React from 'react';

const HotelDetailPage = () => {
    return (
        <div className="bg-gray-50">
            {/* Hero Section */}
            <div className="relative h-[60vh] flex items-center justify-center text-white text-center bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542314831-068cd1dbb5eb?auto=format&fit=crop&w=1920&q=80')" }}>
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative z-10">
                    <h1 className="font-display text-huge font-bold">Hotel Name</h1>
                    <p className="text-2xl mt-2">Location City</p>
                    <button className="mt-6 bg-primary text-white font-bold py-3 px-8 rounded-full hover:bg-accent transition-colors duration-300">
                        Check Availability
                    </button>
                </div>
            </div>

            {/* About Section */}
            <div className="container mx-auto px-6 py-12">
                <div className="grid md:grid-cols-3 gap-12 items-start">
                    <div className="md:col-span-2">
                        <h2 className="font-display text-4xl font-bold mb-4">About the Hotel</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Located in the heart of the city, our hotel offers premium accommodations with stunning city views and luxurious amenities. Enjoy our state-of-the-art gym, relaxing spa, and exquisite dining experiences.
                        </p>
                    </div>
                    {/* Booking Card */}
                    <div className="bg-white p-6 rounded-lg shadow-2xl -mt-32 md:-mt-48 z-20">
                        <h3 className="font-display text-2xl font-bold mb-4">Pricing Details</h3>
                        <p className="text-lg text-gray-700 mb-4">$200 per night – includes breakfast and access to amenities.</p>
                        <div className="bg-gray-100 p-4 rounded-md mb-4">
                            <p className="font-bold text-center">Availability Calendar</p>
                            {/* Placeholder for calendar */}
                        </div>
                        <button className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-accent transition-colors">
                            Book Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HotelDetailPage;
import React from 'react';
import CountdownTimer from './CountdownTimer';
import banner from '../../assets/Pics and icons/recommended.svg'

function RecommendedBanner() {
    // Set your target date and time for the countdown
    const targetDate = '2024-08-15T00:00:00';

    return (
        <div className="relative w-full h-64 bg-gray-800 rounded-lg overflow-hidden mb-5">
            <img
                src={banner}
                alt="Flash Sale"
                className="w-full h-full object-cover"
            />
            <div className="absolute top-16 left-4">
                <h2 className="text-white text-3xl font-bold">Recommended Products</h2>
                <p className="text-white text-sm font-light mt-5">We recommend the best for you</p>
            </div>
            
        </div>
    );
}

export default RecommendedBanner;

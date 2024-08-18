import React from 'react';
import CountdownTimer from './CountdownTimer';
import banner from '../../assets/Pics and icons/Promotion Image.svg'

function FlashSaleBanner() {
    // Set your target date and time for the countdown
    const targetDate = '2024-08-15T00:00:00';

    return (
        <div className="relative w-full h-64 bg-gray-800 rounded-lg overflow-hidden mb-7">
            <img
                src={banner}
                alt="Flash Sale"
                className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4">
                <h2 className="text-white text-2xl font-bold">Super Flash Sale</h2>
                <p className="text-white text-xl">50% Off</p>
            </div>
            <div className="absolute bottom-8 left-4">
                <CountdownTimer targetDate={targetDate} />
            </div>
        </div>
    );
}

export default FlashSaleBanner;

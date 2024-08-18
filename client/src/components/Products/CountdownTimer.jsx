import React, { useState, useEffect } from 'react';

function CountdownTimer({ targetDate }) {
    const calculateTimeLeft = () => {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft = {
            hours: 0,
            minutes: 0,
            seconds: 0,
        };

        if (difference > 0) {
            timeLeft = {
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
    
        return () => clearTimeout(timer);
    }, [targetDate]); // Add targetDate to dependency array

    return (
        <div className="flex space-x-2">
            <div className="bg-white text-black p-3 rounded-md text-lg font-bold">
                {timeLeft.hours.toString().padStart(2, '0')}
            </div>
            <div className="bg-white text-black p-3 rounded-md text-lg font-bold">
                {timeLeft.minutes.toString().padStart(2, '0')}
            </div>
            <div className="bg-white text-black p-3 rounded-md text-lg font-bold">
                {timeLeft.seconds.toString().padStart(2, '0')}
            </div>
        </div>
    );
}

export default CountdownTimer;

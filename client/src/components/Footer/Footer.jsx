import { useState } from 'react';
import { HomeIcon, MagnifyingGlassIcon, ShoppingCartIcon, TagIcon, UserIcon } from '@heroicons/react/24/solid'; 

function Footer() {
    const [activeIcon, setActiveIcon] = useState('home');

    const handleClick = (iconName) => {
        setActiveIcon(iconName);
    }

    return (
        <div className="flex justify-between items-center p-4 bg-white w-full">
            <HomeIcon 
                onClick={() => handleClick('home')}
                className={`h-7 w-7 cursor-pointer ${
                    activeIcon === 'home' ? 'text-[#40bfff]' : 'text-gray-500'
                }`}
            />
            <MagnifyingGlassIcon 
                onClick={() => handleClick('search')}
                className={`h-6 w-6 cursor-pointer ${
                    activeIcon === 'search' ? 'text-[#40bfff]' : 'text-gray-500'
                }`}
            />
            <ShoppingCartIcon 
                onClick={() => handleClick('cart')}
                className={`h-6 w-6 cursor-pointer ${
                    activeIcon === 'cart' ? 'text-[#40bfff]' : 'text-gray-500'
                }`}
            />
            <TagIcon 
                onClick={() => handleClick('tag')}
                className={`h-6 w-6 cursor-pointer ${
                    activeIcon === 'tag' ? 'text-[#40bfff]' : 'text-gray-500'
                }`}
            />
            <UserIcon 
                onClick={() => handleClick('user')}
                className={`h-6 w-6 cursor-pointer ${
                    activeIcon === 'user' ? 'text-[#40bfff]' : 'text-gray-500'
                }`}
            />
        </div>
    )
}

export default Footer;
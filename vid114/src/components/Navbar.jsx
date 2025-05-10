import React from 'react';
import '../css/Navbar.css';

const Navbar = () => {
    return (
    
        < nav className = 'Nav' >

            <div className="logo font-bold text-xl">
                iTask
            </div>
            <ul className="flex gap-10 text-lg">
                <li className="cursor-pointer hover:font-bold">Home</li>
                <li className="cursor-pointer hover:font-bold">Your Tasks</li>
            </ul>
        </nav>
    );
};

export default Navbar;

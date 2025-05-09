import React from 'react';

const Navbar = () => {
    return (
        < nav className = 'flex justify-evenly bg-blue-500 text-white border' >

            <div className="logo font-bold text-xl">
                iTask
            </div>
            <ul className="flex gap-10 text-lg">
                <li className="cursor-pointer hover:underline">Home</li>
                <li className="cursor-pointer hover:underline">Your Tasks</li>
            </ul>
        </nav>
    );
};

export default Navbar;

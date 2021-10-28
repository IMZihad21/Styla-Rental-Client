import React from 'react';
import Navbar from '../Navbar/Navbar';

const Header = () => {
    return (
        <div className="md:px-20 py-2 bg-blue-100">
            <div className="flex justify-between">
                <div className="h-16">
                    <img className="w-full h-full" src="https://i.ibb.co/q00fs5n/stylarentallogo.png" alt="logo" />
                </div>
                <div>
                    <button className="px-10 py-3 my-auto bg-red-200 rounded">Sign In</button>
                </div>
            </div>
            <Navbar/>
        </div>
    );
};

export default Header;
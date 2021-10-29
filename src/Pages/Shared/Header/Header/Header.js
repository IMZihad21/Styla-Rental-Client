import { Link } from 'react-router-dom';
import React from 'react';

const Header = () => {
    return (
        <div className="flex justify-between px-2 md:px-20 py-2">
            <div className="h-14 my-auto my-auto bg-gray-400 rounded-xl">
                <Link to='/'>
                    <img className="w-full h-full" src="https://i.ibb.co/q00fs5n/stylarentallogo.png" alt="logo" />
                </Link>
            </div>
            <div className="flex">
                <div className="my-auto">
                    <Link to='/authorization'>
                        <button className="px-10 py-3 my-auto bg-red-200 rounded-xl">Sign In</button>
                    </Link>
                </div>
                <button>
                    <i className="fas fa-shopping-cart my-auto text-4xl pl-4"></i>
                </button>
                <button>
                    <i className="fas fa-search my-auto text-3xl pl-4"></i>
                </button>
            </div>
        </div>
    );
};

export default Header;
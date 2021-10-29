import React from 'react';
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="px-2 md:px-20 py-2 text-xl">
            <NavLink className="mx-4 hover:text-red-400" activeClassName='text-green-400' exact to='/'>Home</NavLink>
            <NavLink className="mx-4 hover:text-red-400" activeClassName='text-green-400' to='/dress/rent'>Rent A Dress</NavLink>
            <NavLink className="mx-4 hover:text-red-400" activeClassName='text-green-400' to='/dress/find'>Find A Dress</NavLink>
            <NavLink className="mx-4 hover:text-red-400" activeClassName='text-green-400' to='/orders/all'>Watch All Orders</NavLink>
        </div>
    );
};

export default Navbar;

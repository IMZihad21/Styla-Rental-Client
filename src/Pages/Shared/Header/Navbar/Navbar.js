import React from 'react';
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <NavLink exact to='/'>Home</NavLink>
            <NavLink to='/dress/rent'>Rent A Dress</NavLink>
            <NavLink to='/dress/find'>Find A Dress</NavLink>
            <NavLink to='/orders/all'>Watch All Orders</NavLink>
        </div>
    );
};

export default Navbar;
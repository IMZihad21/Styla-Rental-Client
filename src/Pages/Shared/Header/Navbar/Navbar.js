import React from 'react';
import { NavLink } from 'react-router-dom'
import useProvider from '../../../../Hooks/useProvider';

const Navbar = () => {
    const { user } = useProvider();
    return (
        <div>
            {
                user.uid && <div className="px-2 md:px-16 py-4 text-xl">
                    <NavLink className="mx-4 block md:inline-block mb-2 hover:text-red-500" activeClassName='text-green-400' exact to='/'>Home</NavLink>
                    <NavLink className="mx-4 block md:inline-block mb-2 hover:text-red-500" activeClassName='text-green-400' to='/dress/rent'>Rent Your Dress</NavLink>
                    <NavLink className="mx-4 block md:inline-block mb-2 hover:text-red-500" activeClassName='text-green-400' to='/dress/find'>Find A Dress</NavLink>
                    <NavLink className="mx-4 block md:inline-block mb-2 hover:text-red-500" activeClassName='text-green-400' exact to='/orders'>Your Orders</NavLink>
                    <NavLink className="mx-4 block md:inline-block mb-2 hover:text-red-500" activeClassName='text-green-400' to='/orders/all'>Watch All Orders</NavLink>
                </div>
            }
        </div>
    );
};

export default Navbar;

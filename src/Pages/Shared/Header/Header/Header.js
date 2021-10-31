import { Link as NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import Modal from 'react-modal';
import useProvider from '../../../../Hooks/useProvider';
import Cart from '../Cart/Cart';
import { ToastContainer } from 'react-toastify'

Modal.setAppElement("#root");

const Header = () => {
    const { user, logOut, } = useProvider();
    const [ cartOpen, setCartOpen ] = useState(false);
    const toggleCartModal = () => setCartOpen(!cartOpen);
    const modalStyle = {
        content: {
            top: '10%',
            left: '10%',
            right: '10%',
            bottom: '10%',
        },
    };;

    return (
        <div className="flex justify-between px-2 md:px-16 pt-4">
            <div className="h-14 my-auto my-auto bg-gray-400 rounded-xl">
                <NavLink to='/'>
                    <img className="w-full h-full" src="https://i.ibb.co/q00fs5n/stylarentallogo.png" alt="logo" />
                </NavLink>
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            </div>
            <div className="flex">
                <div className="my-auto">
                    {
                        user.uid ?
                            (<div className="flex space-x-4 bg-green-100 rounded-xl">
                                <NavLink to='/authorization'>
                                    <div className="flex">
                                        <div className="w-16 md:w-12 p-1 m-auto">
                                            <img className="w-full rounded-full" src={user.photoURL} alt={user.displayName} />
                                        </div>
                                        <h1 className="text-xl px-1 md:px-2 md:py-2">{user.displayName}</h1>
                                    </div>
                                </NavLink>
                                <button onClick={logOut} className="px-10 py-3 my-auto text-white font-bold bg-green-500 hover:bg-red-500 rounded-xl">
                                    Sign Out
                                </button>
                            </div>) :
                            (<NavLink to='/authorization'>
                                <button className="px-10 py-3 my-auto text-white font-bold bg-green-500  hover:bg-red-500 rounded-xl">
                                    Sign In
                                </button>
                            </NavLink>)
                    }
                </div>
                <button onClick={toggleCartModal}>
                    <i className="fas fa-shopping-cart my-auto text-4xl pl-4 text-gray-500 hover:text-red-500"></i>
                </button>
                <Modal
                    isOpen={cartOpen}
                    onRequestClose={toggleCartModal}
                    style={modalStyle}
                >
                    <div className='flex justify-between'>
                        <h1 className="text-6xl my-auto font-bold text-gray-500">Rent Cart</h1>
                        <button className='text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-16 py-2 text-center' onClick={toggleCartModal}>Close</button>
                    </div>
                    <Cart />
                </Modal>
                <button>
                    <i className="fas fa-search my-auto text-3xl pl-4 text-gray-500  hover:text-red-500"></i>
                </button>
            </div>
        </div>
    );
};

export default Header;
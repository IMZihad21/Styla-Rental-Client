import { Link as NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import React, { useState } from 'react';
import Modal from 'react-modal';
import useProvider from '../../../../Hooks/useProvider';
import Cart from '../Cart/Cart';

Modal.setAppElement("#root");

const Header = () => {
    const { user, logOut, cart, setCart } = useProvider();
    const [ cartOpen, setCartOpen ] = useState(false);
    const toggleCartModal = () => setCartOpen(!cartOpen);
    const handleCheckOut = () => {
        if (cart.length > 0) {
            setCart([]);
            toast.success("Succesfully added your dress to our collection. Thanks for using our service", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        else {

            toast.error("Your cart is empty!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }
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
                                <button className="px-10 py-3 my-auto text-white font-bold bg-green-500  hover:text-red-500 rounded-xl">
                                    Sign In
                                </button>
                            </NavLink>)
                    }
                </div>
                <button onClick={toggleCartModal}>
                    <i className="fas fa-shopping-cart my-auto text-4xl pl-4 text-green-500 hover:text-red-500"></i>
                </button>
                <Modal
                    isOpen={cartOpen}
                    onRequestClose={toggleCartModal}
                    style={modalStyle}
                >
                    <div className='flex justify-between'>
                        <button className='px-10 py-3 my-auto text-white font-bold bg-green-500  hover:bg-red-500 rounded' onClick={handleCheckOut}>Check Out</button>
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
                        <button className='px-10 py-3 my-auto text-white font-bold bg-green-500  hover:bg-red-500 rounded' onClick={toggleCartModal}>Close</button>
                    </div>
                    <Cart />
                </Modal>
                <button>
                    <i className="fas fa-search my-auto text-3xl pl-4 text-green-500  hover:text-red-500"></i>
                </button>
            </div>
        </div>
    );
};

export default Header;
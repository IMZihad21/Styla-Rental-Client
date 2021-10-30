import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement("#root");

const Header = () => {
    const [ cartOpen, setCartOpen ] = useState(false);
    const toggleCartModal = () => {
        setCartOpen(!cartOpen);
    };
    const modalStyle = {
        content: {
            top: '30%',
            left: '30%',
            right: '30%',
            bottom: '30%',
        },
    };;

    return (
        <div className="flex justify-between px-2 md:px-16 pt-4">
            <div className="h-14 my-auto my-auto bg-gray-400 rounded-xl">
                <Link to='/'>
                    <img className="w-full h-full" src="https://i.ibb.co/q00fs5n/stylarentallogo.png" alt="logo" />
                </Link>
            </div>
            <div className="flex">
                <div className="my-auto">
                    <Link to='/authorization'>
                        <button className="px-10 py-3 my-auto bg-yellow-500 rounded-xl">Sign In</button>
                    </Link>
                </div>
                <button onClick={toggleCartModal}>
                    <i className="fas fa-shopping-cart my-auto text-4xl pl-4"></i>
                </button>
                <Modal
                    isOpen={cartOpen}
                    onRequestClose={toggleCartModal}
                    style={modalStyle}
                >
                    <div className="rounded p-10">
                        {/* This is cart Placeholder */}
                    </div>
                </Modal>
                <button>
                    <i className="fas fa-search my-auto text-3xl pl-4"></i>
                </button>
            </div>
        </div>
    );
};

export default Header;
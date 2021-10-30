import React from 'react';
import useProvider from '../../../../Hooks/useProvider';

const Cart = () => {
    const { cart, setCart } = useProvider();
    let totalRent = 0;
    for (const dress of cart) {
        totalRent += dress.price;
    }
    const handleRemoveFromCart = dress => {
        const newCart = cart.filter(element => element !== dress)
        setCart(newCart);
    };
    return (
        <div className="text-center">
            <h1 className="text-7xl font-bold text-green-500 pb-5">Rent Cart</h1>

            {
                totalRent === 0 ?
                    <p className='text-2xl pb-5 font-semibold'>Cart Empty :( <br /> Check out our awesome collections and add to cart!</p> :
                    <p className='text-2xl pb-5'>Total Rent Price is: <span className='text-4xl text-green-500 font-semibold'>${totalRent}</span></p>
            }
            <div>
                {
                    cart.map(dress => <div className='flex justify-between border-2 rounded px-4 m-1'>
                        <div className='w-16 h-16'>
                            <img className='w-full h-full rounded' src={dress.image} alt={dress.name} />
                        </div>
                        <h1 className='w-2/6 text-3xl font-bold my-auto'>{dress.name} Dress</h1>
                        <p className='w-2/6 text-xl font-semibold my-auto'>Renting for <span className='text-green-500'>${dress.price}</span></p>
                        <button onClick={() => handleRemoveFromCart(dress)}><i className="text-3xl fas fa-trash-alt"></i></button>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Cart;
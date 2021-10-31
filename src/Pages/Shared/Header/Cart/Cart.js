import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useProvider from '../../../../Hooks/useProvider';
import { toast } from 'react-toastify';

const Cart = () => {
    const { user, cart, order, setCart, setOrder } = useProvider();
    const { register, handleSubmit, reset } = useForm();
    const [ inputError, setInputError ] = useState(false);
    let totalRent = 0;
    for (const dress of cart) {
        totalRent += dress.price;
    }
    let sdVat = parseInt(totalRent * .15);
    let totalCost = totalRent + sdVat;
    const handleRemoveFromCart = dress => {
        if (window.confirm("Do you really want to remove this?")) {
            const newCart = cart.filter(element => element !== dress)
            setCart(newCart);
        }

    };
    const onsubmit = (data) => {
        const { client, clientEmail, address } = data;
        setInputError(false);
        if (client === "" || clientEmail === "" || address === "") {
            setInputError(true);
            return;
        }
        const pendingOrder = cart.map(dress => {
            return { ...dress, ...data, pending: true }
        })
        setOrder([ ...order, ...pendingOrder ]);

        toast.success("Checkout has been completed. Please wait for approval", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        setCart([]);
        reset();
    };
    return (
        <div className="text-center">
            {
                totalRent === 0 ?
                    <p className='text-2xl mt-20 pb-5 font-semibold'>Cart Empty :( <br /> Check out our awesome collections and add to cart!</p> :
                    <div className='md:flex mt-5'>
                        <div className='md:w-4/6'>
                            <div className='flex text-gray-500 text-lg bg-gray-50 justify-between rounded md:px-4 m-1'>
                                <h1 className='hidden md:block my-auto w-16'>Product</h1>
                                <h1 className='w-2/6 my-auto'>Dress Name</h1>
                                <p className='w-2/6 my-auto'>Rent Price</p>
                                <p className='my-auto'>Remove</p>
                            </div>
                            {
                                cart.map(dress => <div key={dress.image} className='flex justify-between bg-gray-50 rounded md:px-4 m-1'>
                                    <div className='hidden md:block w-16 h-16'>
                                        <img className='w-full h-full rounded' src={dress.image} alt={dress.name} />
                                    </div>
                                    <h1 className='w-2/6 text-2xl font-bold my-auto'>{dress.name}</h1>
                                    <p className='w-2/6 text-lg font-semibold my-auto'>Renting for <span className='text-gray-500'>${dress.price}</span></p>
                                    <button onClick={() => handleRemoveFromCart(dress)}><i className="text-3xl fas fa-trash-alt"></i></button>
                                </div>)
                            }
                        </div>
                        <div className='md:w-2/6 mt-8 md:mt-0'>
                            <div className=' divide-y-2  divide-gray-400 border-2 border-gray-400 rounded '>
                                <h1 className='text-gray-500 text-lg bg-gray-50 justify-between rounded px-4 m-1'>Checkout</h1>
                                <div className='flex justify-between px-10 text-lg'>
                                    <p className='font-semibold'>Total Rent: </p>
                                    <p className='text-gray-500'>${totalRent}</p>
                                </div>
                                <div className='flex justify-between px-10 text-lg'>
                                    <p className='font-semibold'>15% SD+VAT: </p>
                                    <p className='text-gray-500'>${sdVat}</p>
                                </div>
                                <div className='flex justify-between px-10 text-lg'>
                                    <p className='font-semibold'>Total Rent Cost</p>
                                    <p className='text-gray-500'>${totalCost}</p>
                                </div>
                            </div>
                            <form className="mt-5" onSubmit={handleSubmit(onsubmit)}>
                                <div className="mb-6 text-left">
                                    <label htmlFor="client" className="text-lg font-medium text-gray--900 block mb-2">Your Name </label>
                                    <input defaultValue={user.displayName} {...register("client")} type="text" id="client" className="bg-green--50 border border-green--300 text-gray--900 sm:text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5" required="" />
                                </div>
                                <div className="mb-6 text-left">
                                    <label htmlFor="clientEmail" className="text-lg font-medium text-gray--900 block mb-2">Your Email </label>
                                    <input defaultValue={user.email} {...register("clientEmail")} type="email" id="clientEmail" className="bg-green--50 border border-green--300 text-gray--900 sm:text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5" required="" />
                                </div>
                                <div className="mb-6 text-left">
                                    <label htmlFor="address" className="text-lg font-medium text-gray--900 block mb-2">Your Address </label>
                                    <input  {...register("address")} type="text" min={1} id="address" className="bg-green--50 border border-green--300 text-gray--900 sm:text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5" required="" />
                                </div>
                                {
                                    inputError && <p className="my-5 text-red-500 text-xl font-semibold">* All field must be filled before Submit</p>
                                }
                                <button type="submit" className="text-white bg-green-700 hover:bg-red-500 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Checkout</button>
                            </form>
                        </div>
                    </div>
            }
        </div>
    );
};

export default Cart;
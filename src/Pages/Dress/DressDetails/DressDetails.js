import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { RatingView } from 'react-simple-star-rating';
import useProvider from '../../../Hooks/useProvider';
import { ToastContainer, toast } from 'react-toastify';

const DressDetails = () => {
    const [ dress, setDress ] = useState({});
    const { dressID } = useParams();
    const { user, cart, setCart } = useProvider();
    useEffect(() => {
        axios.get(`https://styla-rental.herokuapp.com/dress/${dressID}`)
            .then((response) => {
                setDress(response.data);
            })
    }, [])

    const handleAddToCart = () => {
        const match = cart.find(element => element.image === dress.image);
        if (!match) {
            setCart([ ...cart, dress ]);
            toast.success('Added to cart succesfully', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            return;
        }
        toast.error('Already added into cart', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };
    return (
        <div className='p-4 flex'>
            <div className='w-80 h-92 mx-auto'>
                <img className='w-full h-full rounded-xl' src={dress.image} alt={dress.name} />
            </div>
            <div className='w-1/2 my-auto text-left'>
                <h1 className='text-2xl my-2 font-semibold'>This amazing dress is named <span className='text-red-500 text-3xl font-bold'>{dress.name}</span></h1>
                <p className='text-lg my-2'>Posted by <span className='text-gray-500 font-bold'>{
                    user.displayName ?
                        `${user.displayName} (${user.email})` :
                        user.email
                }</span></p>
                <RatingView ratingValue={dress.rating} />
                <p className='font-semibold'>Rent this Dress for <span className='font-bold text-red-500'>${dress.price}</span></p>
                <button onClick={handleAddToCart} className='px-10 py-2 my-3 text-white font-bold bg-green-500 hover:bg-red-500 rounded-xl'>Rent this dress</button>
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar
                    newestOnTop
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            </div>
        </div>
    );
};

export default DressDetails;
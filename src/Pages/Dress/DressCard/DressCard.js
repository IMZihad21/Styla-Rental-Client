import React from 'react';
import { useHistory } from 'react-router';
import { RatingView } from 'react-simple-star-rating';
import { toast } from 'react-toastify';
import useProvider from '../../../Hooks/useProvider';

const DressCard = ({ dress }) => {
    const { name, image, price, rating, _id } = dress;
    const history = useHistory();
    const { cart, setCart } = useProvider();

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
        <div className='bg-gray-100 rounded-xl p-4'>
            <div className='w-60 h-80 mx-auto'>
                <img className='w-full h-full rounded-xl' src={image} alt={name} />
            </div>
            <div>
                <h1 className='text-2xl text-red-500 my-2 font-semibold'>{name}</h1> {/* Dress Name */}
                <RatingView ratingValue={rating} /> {/* Dress Rating */}
                <p className='font-semibold'>Rent this Dress for <span className='font-bold text-red-500'>${price}</span></p> {/* Dress Price */}
                <button onClick={handleAddToCart} className='px-10 py-2 my-3 text-white font-bold bg-green-500 hover:bg-red-500 rounded-xl'>Rent this dress</button>
                <button onClick={() => history.push(`/dress/${_id}`)} className='px-10 py-2 text-white font-bold bg-green-400 hover:bg-red-400 rounded-xl'>Check Dress Details</button>
            </div>
        </div>
    );
};

export default DressCard;
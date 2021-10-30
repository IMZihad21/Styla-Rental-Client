import React from 'react';
import { useHistory } from 'react-router';
import { RatingView } from 'react-simple-star-rating';

const DressCard = ({ dress }) => {
    const { name, image, price, rating, _id } = dress;
    const history = useHistory();

    return (
        <div className='bg-gray-100 rounded-xl p-4'>
            <div className='w-60 h-80 mx-auto'>
                <img className='w-full h-full rounded-xl' src={image} alt={name} />
            </div>
            <div>
                <h1 className='text-2xl text-red-500 my-2 font-semibold'>{name}</h1> {/* Dress Name */}
                <RatingView ratingValue={rating} /> {/* Dress Rating */}
                <p className='font-semibold'>Rent this Dress for <span className='font-bold text-red-500'>${price}</span></p> {/* Dress Price */}
                <button onClick={() => history.push(`/dress/${_id}`)} className='px-10 py-2 my-3 text-white font-bold bg-yellow-500 hover:bg-red-500 rounded-xl'>Rent this dress</button>
            </div>
        </div>
    );
};

export default DressCard;
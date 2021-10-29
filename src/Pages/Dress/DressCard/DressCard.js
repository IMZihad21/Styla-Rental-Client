import React from 'react';
import { RatingView } from 'react-simple-star-rating';

const DressCard = () => {
    return (
        <div className='bg-gray-100 rounded-xl p-4'>
            <div className='w-60 mx-auto'>
                <img className='w-full h-full rounded-xl' src="https://unsplash.com/photos/gsKdPcIyeGg/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8NHx8ZHJlc3N8fDB8MXx8fDE2MzU0ODkzNTc&force=true&w=640" alt="DressImage" />
            </div>
            <div>
                <h1>{ }</h1> {/* Dress Name */}
                <RatingView ratingValue={2} /> {/* Dress Rating */}
                <p>Price: <span>${ }</span></p> {/* Dress Price */}
            </div>
        </div>
    );
};

export default DressCard;
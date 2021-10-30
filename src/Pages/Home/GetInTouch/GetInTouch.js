import React from 'react';
import LocationMap from '../LocationMap/LocationMap';

const GetInTouch = () => {
    return (
        <div className='md:flex md:my-5 p-5 rounded-xl bg-gray-100'>
            <div className='md:w-1/2'>
                <div className='my-2 text-left pl-5'>
                    <p className='text-green-500 text-xl'>Our Contacts</p>
                    <h1 className='text-5xl font-semibold'>Get In Touch With Us</h1>
                </div>
                <div className='grid grid-cols-2 gap-4 p-2 text-center'>
                    <div className='bg-green-100 rounded-xl p-2'>
                        <i className="text-green-500 text-2xl p-3 fas fa-search-location"></i>
                        <h1 className='text-md font-bold'>KA-244, Kuril, Progoti Shoroni, Dhaka</h1>
                        <p>Try on Our dresses in our showroom</p>
                    </div>
                    <div className='bg-green-100 rounded-xl p-2'>
                        <i className="text-green-500 text-2xl p-3 fas fa-phone"></i>
                        <h1 className='text-md font-bold'>09 39473297</h1>
                        <p>Contact Us by Phone</p>
                    </div>
                    <div className='bg-green-100 rounded-xl p-2'>
                        <i className="text-green-500 text-2xl p-3 fas fa-envelope-square"></i>
                        <h1 className='text-md font-bold'>stylarental@gmail.com</h1>
                        <p>Contact Us by Email</p>
                    </div>
                    <div className='bg-green-100 rounded-xl p-2'>
                        <i className="text-green-500 text-2xl p-3 fab fa-instagram"></i>
                        <h1 className='text-md font-bold'>@StylaRentalService</h1>
                        <p>Check our instagram</p>
                    </div>
                </div>
            </div>
            <div className='md:w-1/2 my-auto'>
                <LocationMap />
            </div>
        </div>
    );
};

export default GetInTouch;
import React from 'react';
import LocationMap from '../LocationMap/LocationMap';

const GetInTouch = () => {
    return (
        <div className='md:flex md:my-5 p-5 rounded-xl bg-gray-100'>
            <div className='md:w-1/2'>
                <div className='my-16 text-left pl-5 py-2'>
                    <p className='text-yellow-500 text-xl'>Our Contacts</p>
                    <h1 className='text-5xl font-semibold mt-4'>Get In Touch With Us</h1>
                </div>
                <div className='grid grid-cols-2 gap-4 p-2 text-left'>
                    <div>
                        <i className="text-yellow-500 text-2xl p-3 fas fa-search-location"></i>
                        <span className='text-xl leading-none'>KA-244, Kuril, <br /> Progoti Shoroni, Dhaka</span>
                        <p>Try on Our dresses in our showroom</p>
                    </div>
                    <div>
                        <i className="text-yellow-500 text-2xl p-3 fas fa-phone"></i>
                        <span className='text-xl'>09 39473297</span>
                        <p>Contact Us by Phone</p>
                    </div>
                    <div>
                        <i class="text-yellow-500 text-2xl p-3 fas fa-envelope-square"></i>
                        <span className='text-xl'>stylarental@gmail.com</span>
                        <p>Contact Us by Email</p>
                    </div>
                    <div>
                        <i class="text-yellow-500 text-2xl p-3 fab fa-instagram"></i>
                        <span className='text-xl'>@StylaRentalService</span>
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
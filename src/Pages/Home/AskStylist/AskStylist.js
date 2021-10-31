import React from 'react';

const AskStylist = () => {
    return (
        <div className='md:flex bg-green-100 rounded-xl'>
            <div className='md:w-1/2 p-0'>
                <img className='w-full rounded-xl' src="https://i.ibb.co/5Yht0nY/matt-moloney-Nhbv-Saq-GExs-unsplash.jpg" alt="Stylist" />
            </div>
            <div className='md:w-1/2'>
                <div className='my-16 py-5 md:px-20'>
                    <p className='text-gray-500 text-xl'>Ask A Stylist</p>
                    <h1 className='text-5xl font-semibold mt-4 leading-relaxed'>Great Look <br />With Our Stylist</h1>
                    <p className='text-xl mt-5 md:mt-10'>If you are confused about what to wear, Our stylist can help you pick one</p>
                    <div className='pt-5'>
                        <input className='p-5 w-1/2' type="email" name="" id="" placeholder="Your E-mail" />
                        <button className='p-5 w-1/2 bg-green-500 text-white font-bold'>Contact Stylists</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AskStylist;
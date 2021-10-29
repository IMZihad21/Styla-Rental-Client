import React from 'react';
import { Link } from 'react-router-dom'
import DressCard from '../../Dress/DressCard/DressCard';

const TopDress = () => {
    return (
        <div className='my-5'>
            <div className='md:flex justify-between'>
                <div className='my-16 text-left pl-5 py-2'>
                    <p className='text-red-300 text-xl'>------ For Any Occasion</p>
                    <h1 className='text-5xl font-semibold mt-4'>Find Gorgeous Dresses <br /> For Any Occasion</h1>
                </div>
                <div>
                    <Link to='/dress/find'>
                        <button className='bg-red-300 text-2xl text-white my-16 px-10 py-5 rounded-xl'>View All Dresses</button>
                    </Link>
                </div>
            </div>
            <div className='grid grid-cols-4 gap-4'>
                <DressCard />
            </div>
        </div>
    );
};

export default TopDress;
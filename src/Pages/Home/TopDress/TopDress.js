import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import DressCard from '../../Dress/DressCard/DressCard';
import axios from 'axios'
import Loading from '../../Shared/Loading/Loading';

const TopDress = () => {
    const [ dresses, setDresses ] = useState([]);

    //Call GET API to get dress collections
    useEffect(() => {
        axios.get('https://styla-rental.herokuapp.com/dresses')
            .then((response) => {
                const data = response.data;
                const slicedData = data.slice(0, 6);
                setDresses(slicedData);
            })
    }, [])
    return (
        <div className='my-5'>
            <div className='md:flex justify-between'>
                <div className='my-16 text-left pl-5 py-2'>
                    <p className='text-gray-500 text-xl'>For Any Occasion</p>
                    <h1 className='text-5xl font-semibold mt-4'>Find Gorgeous Dresses <br /> For Any Occasion</h1>
                </div>
                <div>
                    <Link to='/dress/find'>
                        <button className='bg-green-500 text-2xl text-white md:mt-16 my-4 px-10 py-3 rounded-xl'>View All Dresses <i className="fas fa-arrow-right"></i></button>
                    </Link>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-5'>
                {
                    dresses.length > 0 ?
                        dresses.map(dress => <DressCard key={dress._id} dress={dress} />) :
                        <Loading />
                }
            </div>
        </div>
    );
};

export default TopDress;
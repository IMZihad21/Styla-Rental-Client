import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import DressCard from '../../Dress/DressCard/DressCard';
import axios from 'axios'
import Loading from '../../Shared/Loading/Loading';

const TopDress = () => {
    const [ dresses, setDresses ] = useState([]);

    //Call GET API to get dress collections
    useEffect(() => {
        axios.get('http://localhost:9000/dresses')
            .then((response) => {
                const data = response.data;
                if (data.length > 6) {
                    const slicedData = data.slice(0, 6);
                    setDresses(slicedData);
                }
                setDresses(data);
            }).catch((err) => {
                console.log(err);
            });
    }, [])
    return (
        <div className='my-5'>
            <div className='md:flex justify-between'>
                <div className='my-16 text-left pl-5 py-2'>
                    <p className='text-yellow-500 text-xl'>For Any Occasion</p>
                    <h1 className='text-5xl font-semibold mt-4'>Find Gorgeous Dresses <br /> For Any Occasion</h1>
                </div>
                <div>
                    <Link to='/dress/find'>
                        <button className='bg-yellow-500 text-2xl text-white my-16 px-10 py-5 rounded-xl'>View All Dresses</button>
                    </Link>
                </div>
            </div>
            <div className='grid grid-cols-4 gap-4'>
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
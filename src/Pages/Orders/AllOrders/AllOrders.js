import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loading from '../../Shared/Loading/Loading';

const AllOrders = () => {
    const [ orders, setOrders ] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:9000/cart/all')
            .then(({ data }) => {
                setOrders([ ...new Set([].concat(...data.map((o) => o.order))) ])
            })
    }, [])
    return (
        <div>
            {
                orders ?
                    orders.map(dress => <div key={Math.random()} className='flex justify-between bg-gray-50 rounded px-4 m-1'>
                        <div className='w-16 h-16'>
                            <img className='w-full h-full rounded' src={dress.image} alt={dress.name} />
                        </div>
                        <h1 className='w-2/6 text-2xl font-bold my-auto'>{dress.name}</h1>
                        <p className='w-2/6 text-lg font-semibold my-auto'>Renting for <span className='text-gray-500'>${dress.price}</span></p>
                        <p className='w-2/6 text-lg font-semibold my-auto'>Rented by <span className='text-gray-500'>{dress.client} ({dress.clientEmail})</span></p>
                        <p className='w-2/6 text-lg font-semibold my-auto'>Rented from <span className='text-gray-500'>{dress.address}</span></p>
                    </div>) :
                    <Loading />
            }
        </div>
    );
};

export default AllOrders;
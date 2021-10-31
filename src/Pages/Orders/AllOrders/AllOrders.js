import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loading from '../../Shared/Loading/Loading';

const AllOrders = () => {
    const [ order, setOrder ] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:9000/cart/all')
            .then(({ data }) => {
                setOrder([ ...new Set([].concat(...data.map((o) => o.order))) ])
            })
    }, [])
    const handleRemoveFromCart = ({ clientEmail, _id }) => {
        const data = { userID: clientEmail, productID: _id };
        if (window.confirm("Do you really want to remove this?")) {
            axios.put('http://localhost:9000/order', data)
                .then(({ data }) => {
                    const updatedOrder = order.filter(element => element._id !== _id);
                    setOrder(updatedOrder);
                })
        }
    };

    const handleAuthorizeDelivery = ({ clientEmail, _id }) => {
        const data = { userID: clientEmail, _id };
        if (window.confirm("Do you want to authorize this delivery?")) {
            axios.put('http://localhost:9000/order/authorize', data)
                .then(({ data }) => {
                    const updatedOrder = order.map(obj =>
                        obj._id === _id ? { ...obj, pending: false } : obj
                    );
                    setOrder(updatedOrder);
                })
        }
    };
    return (
        <div>
            {
                order ?
                    order.map(dress => <div key={Math.random()} className='flex justify-between bg-gray-50 rounded px-4 m-1'>
                        <div className='w-16 h-16'>
                            <img className='w-full h-full rounded' src={dress.image} alt={dress.name} />
                        </div>
                        <h1 className='w-2/6 text-2xl font-bold my-auto'>{dress.name}</h1>
                        <p className='w-2/6 text-lg font-semibold my-auto'>Renting for <span className='text-gray-500'>${dress.price}</span></p>
                        <p className='w-3/12 text-lg font-semibold my-auto'>Rented by <span className='text-gray-500'>{dress.client} ({dress.clientEmail})</span></p>
                        <p className='w-3/12 text-lg font-semibold my-auto'>Rented from <span className='text-gray-500'>{dress.address}</span></p>
                        {
                            dress.pending ?
                                <div className='flex my-auto w-3/12'>
                                    <p className=' text-lg font-semibold mx-1'>Pending for Delivery</p>
                                    <button onClick={() => handleAuthorizeDelivery(dress)} className='text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'>Authorize</button>
                                </div> :
                                <p className=' text-lg text-green-500 font-semibold my-auto px-4'>Delivered</p>
                        }
                        <button onClick={() => handleRemoveFromCart(dress)}><i className="text-3xl px-2 text-red-500 fas fa-trash-alt"></i></button>
                    </div>) :
                    <Loading />
            }
        </div>
    );
};

export default AllOrders;
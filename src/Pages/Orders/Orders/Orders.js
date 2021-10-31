import React from 'react';
import useProvider from '../../../Hooks/useProvider';
import Loading from '../../Shared/Loading/Loading';

const Orders = () => {
    const { order, setOrder } = useProvider();
    const handleRemoveFromCart = dress => {
        if (window.confirm("Do you really want to remove this?")) {
            const newOrder = order.filter(element => element !== dress)
            setOrder(newOrder);
        }
    };
    return (
        <div>
            {
                order ?
                    order.map(dress => <div key={Math.random()} className='flex justify-between bg-gray-50 rounded px-4 m-1'>
                        <div className='hidden md:block w-16 h-16'>
                            <img className='w-full h-full rounded' src={dress.image} alt={dress.name} />
                        </div>
                        <h1 className='w-2/6 text-2xl font-bold my-auto'>{dress.name}</h1>
                        <p className='w-2/6 text-lg font-semibold my-auto'>Renting for <span className='text-gray-500'>${dress.price}</span></p>
                        <button onClick={() => handleRemoveFromCart(dress)}><i className="text-3xl fas fa-trash-alt"></i></button>
                    </div>) :
                    <Loading />
            }
        </div>
    );
};

export default Orders;
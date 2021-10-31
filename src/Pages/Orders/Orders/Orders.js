import React from 'react';
import useProvider from '../../../Hooks/useProvider';
import Loading from '../../Shared/Loading/Loading';

const Orders = () => {
    const { order } = useProvider();
    return (
        <div>
            {
                order ?
                    order.map(order => <div key={order.image}>
                        <h1>{order.name}</h1>
                    </div>) :
                    <Loading />
            }
        </div>
    );
};

export default Orders;
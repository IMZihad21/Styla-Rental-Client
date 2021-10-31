import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DressCard from '../DressCard/DressCard';
import Loading from '../../Shared/Loading/Loading';

const FindDress = () => {
    const [ dresses, setDresses ] = useState([]);

    //Call GET API to get dress collections
    useEffect(() => {
        axios.get('http://localhost:9000/dresses')
            .then((response) => {
                setDresses(response.data)
            });
    }, [])
    return (
        <div className='mx-2 md:mx-16 mt-4'>
            <div className="bg-green--100">
                <div className="border-t border-green--200 text-center m-2">
                    <h1 className="text-5xl font-bold text-gray-500">Find your best dress from all collections</h1>
                    <div className='grid grid-cols-4 gap-4 py-8'>
                        {
                            dresses.length > 0 ?
                                dresses.map(dress => <DressCard key={dress._id} dress={dress} />) :
                                <Loading />
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FindDress;
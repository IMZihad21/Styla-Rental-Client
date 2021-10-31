import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DressCard from '../DressCard/DressCard';
import Loading from '../../Shared/Loading/Loading';

const FindDress = () => {
    const [ dresses, setDresses ] = useState([]);

    //Call GET API to get dress collections
    useEffect(() => {
        axios.get('https://styla-rental.herokuapp.com/dresses')
            .then((response) => {
                setDresses(response.data)
            });
    }, [])
    return (
        <div className='mx-2 md:mx-16 mt-4'>
            <div className="bg-green--100">
                <div className="border-t border-green--200 text-center m-2">
                    <h1 className="text-3xl md:text-5xl font-bold text-gray-500">Find best match for your day!</h1>
                    {
                        !dresses.length && <Loading />
                    }
                    <div className='grid grid-cols-1 md:grid-cols-4 gap-4 py-8'>
                        {
                            dresses.length > 0 && dresses.map(dress => <DressCard key={dress._id} dress={dress} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FindDress;
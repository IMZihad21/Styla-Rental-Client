import React from 'react';
import Banner from '../Banner/Banner';
import Catagories from '../Catagories/Catagories';
import TopDress from '../TopDress/TopDress';

const Home = () => {
    return (
        <div className='mx-2 md:mx-16 mt-4'>
            <Banner />
            <Catagories />
            <TopDress />
        </div>
    );
};

export default Home;
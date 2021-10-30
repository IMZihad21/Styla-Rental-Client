import React from 'react';
import Banner from '../Banner/Banner';
import AskStylist from '../AskStylist/AskStylist';
import GetInTouch from '../GetInTouch/GetInTouch';
import TopDress from '../TopDress/TopDress';

const Home = () => {
    return (
        <div className='mx-2 md:mx-16 mt-4'>
            <Banner />
            <TopDress />
            <AskStylist />
            <GetInTouch />
        </div>
    );
};

export default Home;
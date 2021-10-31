import React, { useEffect, useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import axios from 'axios';
import Loading from '../../Shared/Loading/Loading';

const Banner = () => {
    const [ banner, setBanner ] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:9000/banner')
            .then(response => {
                setBanner(response.data)
            })
    }, [])
    return (
        <div>
            <Carousel
                animationHandler="fade"
                autoPlay={true}
                infiniteLoop={true}
                showArrows={true}
                showStatus={false}
                showThumbs={false}
            >
                {
                    banner.length > 0 ?
                        banner.map(banner => <div key={banner._id}>
                            <img className='rounded-xl w-full h-full' src={banner.url} alt='bannerImage' />
                        </div>) :
                        <Loading />
                }
            </Carousel>
        </div>
    );
};

export default Banner;
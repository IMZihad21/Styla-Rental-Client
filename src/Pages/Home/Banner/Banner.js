import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    return (
        <div className='mx-2 md:mx-16 mt-4'>
            <Carousel
                animationHandler="fade"
                autoPlay={true}
                infiniteLoop={true}
                showArrows={true}
                showStatus={false}
                showThumbs={false}
            >
                <div>
                    <img className='rounded-xl w-full h-full' src="https://i.ibb.co/wpHd1ND/lucas-mendes-b21d-Fb-Ds-Ico-unsplash.jpg" alt='bannerImage' />
                    <p className="legend py-20">Legend 1</p>
                </div>
                <div>
                    <img className='rounded-xl w-full h-full' src="https://i.ibb.co/mJY5H1T/photo-nic-NIX7pbp6-UGU-unsplash.jpg" alt='bannerImage' />
                    <p className="legend py-20">Legend 1</p>
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;
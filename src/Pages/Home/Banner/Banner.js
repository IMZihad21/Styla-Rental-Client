import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    return (
        <div className="px-2 md:px-10 md:mx-auto md:my-3">
            <Carousel
                showArrows={true}
                autoPlay={true}
                infiniteLoop={true}
                emulateTouch={true}
                showThumbs={false}
            >
                <div className="h-96 md:h-auto">
                    <img className="h-full md:w-full rounded-xl" src="https://i.ibb.co/SVRyYT1/download-ixid-Mnwx-Mj-A3f-DB8-MXxz-ZWFy-Y2h8-Mnx8-ZHJlc3-Nlc3x8-MHx8f-Hwx-Nj-M1-Nj-Yy-Mj-M1-force-tr.png" alt="CarouselImages" />
                </div>
                <div className="h-96 md:h-auto">
                    <img className="h-full md:w-full rounded-xl" src="https://i.ibb.co/yfpgshJ/download-ixid-Mnwx-Mj-A3f-DB8-MXxz-ZWFy-Y2h8-MTV8f-GRy-ZXNz-ZXN8f-DB8f-Hx8-MTYz-NTY2-Mj-Iz-NQ-force.png" alt="CarouselImages" />
                </div>
                <div className="h-96 md:h-auto">
                    <img className="h-full md:w-full rounded-xl" src="https://i.ibb.co/BZNCCFZ/download-ixid-Mnwx-Mj-A3f-DB8-MXxz-ZWFy-Y2h8-Nnx8-ZHJlc3-Nlc3x8-MHx8f-Hwx-Nj-M1-Nj-Yy-Mj-M1-force-tr.png" alt="CarouselImages" />
                </div>
                <div className="h-96 md:h-auto">
                    <img className="h-full md:w-full rounded-xl" src="https://i.ibb.co/2SwdfF8/download-ixid-Mnwx-Mj-A3f-DB8-MXxz-ZWFy-Y2h8-NTN8f-GRy-ZXNz-ZXN8-ZW58-MHwwf-Hx8-MTYz-NTY3-MDUz-NA-fo.png" alt="CarouselImages" />
                </div>
                <div className="h-96 md:h-auto">
                    <img className="h-full md:w-full rounded-xl" src="https://i.ibb.co/51c4Ts6/photo-nic-NIX7pbp6-UGU-unsplash.png" alt="CarouselImages" />
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <div className='bg-gray-800 text-white grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 p-2 md:p-16'>
                <div>
                    <h1 className='font-semibold text-3xl text-left text-gray-500 py-3'>Hire Dresses</h1>
                    <div className='text-left pl-2'>
                        <Link className='block' to="/dummy">Evening Dress</Link>
                        <Link className='block' to="/dummy">Prom Dress</Link>
                        <Link className='block' to="/dummy">Wedding Guest Dress</Link>
                        <Link className='block' to="/dummy">Cocktail Dress</Link>
                        <Link className='block' to="/dummy">Birthday Party Dress</Link>
                    </div>
                </div>
                <div>
                    <h1 className='font-semibold text-3xl text-left text-gray-500 py-3'>Customer Care</h1>
                    <div className='text-left pl-2'>
                        <Link className='block' to="/dummy">Contact Us</Link>
                        <Link className='block' to="/dummy">How it Works</Link>
                        <Link className='block' to="/dummy">FAQs</Link>
                        <Link className='block' to="/dummy">Advanced try on service</Link>
                        <Link className='block' to="/dummy">Delivery Information</Link>
                    </div>
                </div>
                <div>
                    <h1 className='font-semibold text-3xl text-left text-gray-500 py-3'>About Us</h1>
                    <div className='text-left pl-2'>
                        <Link className='block' to="/dummy">About Us</Link>
                        <Link className='block' to="/dummy">We're Hiring</Link>
                        <Link className='block' to="/dummy">Rental Agreement</Link>
                        <Link className='block' to="/dummy">Student Discount</Link>
                    </div>
                </div>
                <div>
                    <h1 className='font-semibold text-3xl text-left text-gray-500 py-3'>Stay Connected</h1>
                    <div className='text-left pl-2 pt-2 text-xl md:text-4xl space-x-3'>
                        <Link to="/dummy"><i className="fab fa-facebook"></i></Link>
                        <Link to="/dummy"><i className="fab fa-twitter"></i></Link>
                        <Link to="/dummy"><i className="fab fa-instagram"></i></Link>
                        <Link to="/dummy"><i className="fab fa-pinterest"></i></Link>
                        <Link to="/dummy"><i className="fab fa-youtube"></i></Link>
                    </div>
                </div>
            </div>
            <div className='bg-gray-900 text-white px-16 py-5 text-left'>
                <h1 className='md:pl-20'>StylaRental @ 2021. All Right Reserved</h1>
            </div>
        </div>
    );
};

export default Footer;
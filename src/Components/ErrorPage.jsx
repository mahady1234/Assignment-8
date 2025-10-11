import React from 'react';
import { Link, useRouteError } from 'react-router';
import Navbar from './Navbar';
import Footer from './Footer';
import loaderImage from '../assets/error-404.png'

const ErrorPage = () => {
    const error = useRouteError()
    return <>
        <Navbar></Navbar>
        <div className='text-center text-4xl text-gray-600'>{error.message}
        </div>
        <div className='flex my-10 flex-col justify-center items-center'>
            <img src={loaderImage} alt="" />
            <h3 className="text-center mt-10 font-bold text-5xl">OPPS!! APP NOT FOUND</h3>
            <p className='text-[16px] my-5 text-gray-600'>The App you are requesting is not found on our system.  please try another apps</p>
            <Link to={'/'} className='btn bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-white'>Go Back</Link>




        </div>
        <Footer></Footer>

    </>







};

export default ErrorPage;



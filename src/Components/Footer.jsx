import React from 'react';
import logoImage from '../assets/logo.png'
import { PiFacebookLogoBold } from "react-icons/pi";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa6";
import { Link } from 'react-router';

const Footer = () => {
    return (
        <div className='bg-[#000000] text-white '>

            <div className='flex justify-center  gap-30 md:gap-200 py-10 items-center'>
                <Link to={'/'} className='flex justify-center items-center gap=5'>
                    <img src={logoImage} className='w-10' alt="image" />
                    <span className='text-white text-lg '>HERO.IO</span>
                </Link>
                <div>
                    <p className='text-xl'>Social Links</p>
                    <div className='flex gap-3 pt-3 justify-center items-center'>
                        <a target='blank' href="https://twitter.com/login?lang=sr">< BsTwitterX></BsTwitterX></a>
                        <a target='blank' href="https://www.linkedin.com/"><FaLinkedinIn></FaLinkedinIn></a>
                        <a target='blank' href="https://www.facebook.com/"><PiFacebookLogoBold ></PiFacebookLogoBold></a>
                    </div>
                </div>
            </div>
            <div>
                <p className='text-center pb-10'>Copyright © 2025 - All right reserved</p>
            </div>
        </div>
    );
};

export default Footer;
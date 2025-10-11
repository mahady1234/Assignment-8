import React from 'react';
import googleImage from '../assets/fi_16076057.png'
import appStoreImage from '../assets/fi_5977575.png'
import bannerImage from '../assets/hero.png'
import FirstCardSection from './FirstCardSection';

const BannerOne = () => {
    return (
        <div className='bg-[#fbf9f9] '>
            <div className='text-center  py-10'>
                <h3 className='text-5xl font-bold'>We Build</h3>
                <h3 className='text-4xl font-bold py-3'><span className='text-4xl bg-gradient-to-r from-[#632ee3] to-[#9f62f2] bg-clip-text text-transparent'>Productive</span> Apps</h3>
                <p className='text-gray-600 text-[16px]'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.<br />Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                <div className='flex justify-center items-center py-6 gap-2 md:gap-5'>
                    <a target='blank' href="https://play.google.com/store/games"><button className='flex items-center cursor-pointer gap-2 bg-white border-gray-200 border-2 rounded-sm px-6 py-2'><img src={googleImage} alt="" /><span>Google Play</span></button></a>
                    <a target='blank' href="https://www.apple.com/app-store/"><button className='flex cursor-pointer bg-white border-gray-200 border-2 rounded-sm px-6 py-2 items-center gap-2'><img src={appStoreImage} alt="" /><span>App Store</span></button></a>
                </div>
            </div>
            <div className='flex justify-center  items-center'>
                <img className='md:w-180 w-80' src={bannerImage} alt="" />
            </div>
            <div className='bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-white pb-10'>
                <h3 className='text-center text-2xl md:text-5xl py-8 font-semibold'>Trusted by Millions, Built for You</h3>
                <div className='flex justify-around items-center'>
                    <div className='items-center flex flex-col justify-center text-[10px] md:text-[14px]'>
                        <p>Total Downloads</p>
                        <h3 className='md:text-6xl text-xl font-bold py-3'>29.6M</h3>
                        <p>21% more than last month</p>
                    </div>
                    <div className='items-center flex flex-col justify-center text-[10px]  md:text-[14px]'>
                        <p>Total Reviews</p>
                        <h3 className='md:text-6xl text-xl font-bold py-3'>906K</h3>
                        <p>46% more than last month</p>
                    </div>
                    <div className='items-center flex flex-col justify-center text-[10px] md:text-[14px] '>
                        <p>Active Apps</p>
                        <h3 className='md:text-6xl text-xl font-bold py-3'>132+</h3>
                        <p>31 more will Launch</p>
                    </div>
                </div>
            </div>

            <FirstCardSection></FirstCardSection>
        </div>
    );
};

export default BannerOne;
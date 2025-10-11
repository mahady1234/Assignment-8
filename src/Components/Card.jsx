import React from 'react';
import { PiDownloadSimpleBold } from "react-icons/pi";
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router';

const Card = ({ d }) => {

    return (
        <Link to={`/cardDetailSection/${d.id}`}>
            <div className='p-3 bg-white flex flex-col justify-center items=center hover:scale-105 transition ease-in-out'>
                <img className='w-80 h-60 bg-cover overflow-hidden rounded-sm' src={d.image} alt="" />
                <h3 className='font-bold my-5 text-xl text-center'>{d.title}</h3>
                <div className='flex justify-around gap-5 md:gap-20 items-center mt-3'>
                    <div className='flex gap-2 items-center text-green-800 bg-green-100 px-2'>
                        <PiDownloadSimpleBold />
                        <span>{d.downloads}</span>
                    </div>
                    <div className='flex gap-2 items-center text-orange-400 bg-orange-100 px-2'>
                        <FaStar />
                        <span>{d.ratingAvg}</span>
                    </div>
                </div>

            </div>
        </Link>
    );
};

export default Card;
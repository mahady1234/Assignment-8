import 'react-toastify/dist/ReactToastify.css';
import React, { useState } from 'react';
import { TbFileLike } from "react-icons/tb";
import { Link, useParams } from 'react-router';
import useApps from '../Hooks/useHook';
import { FaDownload, FaStar } from "react-icons/fa";
import RatingsChart from './RatingsChart';
import { ToastContainer, toast } from 'react-toastify';
import loaderImage from '../assets/App-Error.png'



const CardDetailsSection = () => {

    const [install, setInstall] = useState(false)
    const { id } = useParams();


    const data = useApps();



    if (!data?.products?.data) {
        return <div className='flex flex-col justify-center items-center my-10 space-y-3'>
            <div><img className='w-50' src={loaderImage} alt="image" /></div>
            <h3 className="text-center mt-10 font-bold text-5xl">OPPS!! APP NOT FOUND</h3>
            <p className='text-[16px] text-gray-600'>The App you are requesting is not found on our system.  please try another apps</p>
            <Link to={'/secondCardSection'} className='btn bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-white'>Go Back</Link>
        </div>;
    }


    const singleData = data?.products?.data?.find(d => d.id === Number(id)) || {};

    const {
        title,
        image,
        description,
        downloads,
        companyName,
        ratingAvg,
        reviews,
        size, ratings
    } = singleData;



    const handleAddToInstallList = () => {
        let notify = () => toast(`${title}  installed`);
        setInstall(!install)
        let updatedList = []
        const existingList = JSON.parse(localStorage.getItem('installList'))


        if (existingList) {
            const isDuplicate = existingList.some(p => p.id === Number(id));
            if (isDuplicate) {
                notify();
                return;
            }
            updatedList = [...existingList, singleData]
        }

        else {
            updatedList.push(singleData)
        }
        localStorage.setItem('installList', JSON.stringify(updatedList))
    }



    return (
        <>
            <div className="px-10 pt-20 pb-10 flex md:flex-row flex-col gap-18 justify-items-start ml-1  md:ml-18 items-center">
                <div>
                    <img className='w-140 rounded-sm' src={image} alt={title} />
                </div>
                <div>
                    <h3 className='text-3xl font-bold pb-5'>{title}: {description}</h3>
                    <h3 className='font-semibold text-gray-500'>
                        Developed by <span className='text-purple-500'>{companyName}</span>
                    </h3>
                    <p className='border-1 border-b-gray-100 my-5'></p>

                    <div className='flex justify-around items-center py-5'>
                        <div className='flex flex-col justify-center items-center'>
                            <FaDownload className='text-green-500 size-9' />
                            <h3 className='py-3'>Downloads</h3>
                            <h3 className='text-3xl font-bold'>{downloads}</h3>
                        </div>

                        <div className='flex flex-col justify-center items-center'>
                            <FaStar className='text-orange-500 size-9' />
                            <h3 className='py-3'>Average Ratings</h3>
                            <h3 className='text-3xl font-bold'>{ratingAvg}</h3>
                        </div>

                        <div className='flex flex-col justify-center items-center'>
                            <TbFileLike className='text-blue-600 size-9' />
                            <h3 className='py-3'>Total Reviews</h3>
                            <h3 className='text-3xl font-bold'>{reviews}</h3>
                        </div>
                    </div>

                    <button disabled={install} onClick={() => handleAddToInstallList()} className='bg-green-400 text-white px-5 py-2 rounded-sm font-bold'>
                        {install ? "Installed" : "Install Now"} ({size} MB)
                    </button>
                </div>
            </div>
            <p className='border-1 mx-auto w-11/12 border-b-gray-100 my-5'></p>
            <div className="py-10 px-0 md:px-20 mx-auto w-10/12">
                <RatingsChart ratings={ratings || []} />
            </div>
            <p className='border-1 mx-auto w-11/12 border-b-gray-100 my-5'></p>

            <div className='
            '>
                <h3 className="text-2xl text-center font-bold mb-4 ">Description</h3>
                <h3 className="text-xl text-center font-bold mb-4 ">{description}</h3>


            </div>
            <ToastContainer position="top-center" autoClose={1000}></ToastContainer>
        </>
    );
};

export default CardDetailsSection;


import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { TbFileLike } from 'react-icons/tb';
import { toast, ToastContainer } from 'react-toastify';

const InstallList = () => {
    const [installed, setInstalled] = useState([])
    const [sort, setSort] = useState('none')
    const notify = (title) => toast(`${title} uninstalled successfully`);
    useEffect(() => {
        const existingList = JSON.parse(localStorage.getItem('installList'))
        if (existingList) setInstalled(existingList)
    }, [])

    const handleRemove = (id, title) => {

        const existingList = JSON.parse(localStorage.getItem('installList'))
        let updatedList = existingList.filter(data => data.id !== id)
        setInstalled(updatedList)
        notify(title)
        localStorage.setItem('installList', JSON.stringify(updatedList))
    }



    const sortItem = (() => {
        if (sort === "Ratings") {
            return [...installed].sort((a, b) => a.ratingAvg - b.ratingAvg)
        } else if (sort === "Reviews") {
            return [...installed].sort((a, b) => a.reviews - b.reviews)
        }
        else {
            return installed
        }
    })()


    return (
        <div className='bg-gray-100'>
            <div className='text-center'>
                <h3 className='font-bold text-5xl py-10 '>Your Installed Apps</h3>
                <p>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='flex md:flex-row flex-col justify-around gap-20 md:gap-120 items-center my-5'>
                <h3 className='font-bold text-xl'><span>({sortItem.length}) </span>Apps Found</h3>
                <div>
                    <label className='form-control cursor-pointer w-full max-w-xs'>
                        <select className='select select-bordered' value={sort} onChange={(e) => setSort(e.target.value)} >
                            <option className='font-bold' value="none ">Sort By Ratings or Reviews</option>
                            <option className='font-bold' value="Ratings">Sort By Ratings </option>
                            <option className='font-bold' value="Reviews">Sort By  Reviews</option>
                        </select>
                    </label>
                </div>
            </div>
            <div className='w-10/12 mx-auto space-y-5 my-10'>
                {
                    sortItem.map(app =>
                        <div className="flex md:flex-row flex-col rounded-sm gap-10 p-3 bg-base-100 shadow-sm">
                            <figure>
                                <img className='w-100 rounded-sm object-cover h-50'
                                    src={app.image}
                                    alt="Movie" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title font-bold text-2xl">{app.title}</h2>
                                <p className='font-semibold text-gray-600'>{app.description}</p>
                                <p className='border-1 mx-auto w-full border-b-gray-100 my-1'></p>
                                <div className='flex gap-5 items-center my-1'>
                                    <div className='flex flex-col justify-center items-center'>
                                        <FaStar className='text-orange-500 size-5' />
                                        <h3 className='py-1'>Average Ratings</h3>
                                        <h3 className='text-xl font-bold'>{app.ratingAvg}</h3>
                                    </div>

                                    <div className='flex flex-col justify-center items-center'>
                                        <TbFileLike className='text-blue-600 size-5' />
                                        <h3 className='py-1'>Total Reviews</h3>
                                        <h3 className='text-xl font-bold'>{app.reviews}</h3>
                                    </div>
                                </div>
                                <div className="card-actions justify-end">
                                    <button onClick={() => handleRemove(app.id, app.title)} className="btn btn-primary">Uninstall</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
            <ToastContainer position="top-center" autoClose={1000}></ToastContainer>
        </div>
    );
};

export default InstallList;
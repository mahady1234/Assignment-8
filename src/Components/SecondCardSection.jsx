import React, { useState } from 'react';
import searchImage from '../assets/fi_54481.png'
import useApps from '../Hooks/useHook';
import Card from './Card';
import SkeletonLoader from './SkeletonLoader';



const SecondCardSection = () => {

    const data = useApps()
    const { loading } = useApps()
    const [search, setSearch] = useState('')
    const term = search.trim().toLocaleLowerCase()
    const allData = data?.products.data || []

    const searchedProducts = term
        ? allData.filter(product =>
            product.title.toLocaleLowerCase().includes(term)
        )
        : allData


    return (
        <div className='bg-gray-100'>
            <div>
                <h3 className='text-3xl font-bold text-center pt-10 pb-5'>Our All Applications</h3>
                <p className='text-center'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className='flex justify-around gap-5 md:gap-120 items-center my-5'>
                <h3 className='font-bold text-sm md:text-xl'><span>({searchedProducts.length}) </span>Apps Found</h3>
                <div className='relative md:mx-0 mx-10'>
                    <input onChange={(e) => setSearch(e.target.value)} type="search" placeholder='search apps' className="search cursor-pointer rounded-sm px-3 py-1 border-2 border-black pl-8" />
                    <img className='absolute w-4 -mt-6 ml-3' src={searchImage} alt="" />
                </div>
            </div>
            {loading ? <SkeletonLoader></SkeletonLoader> :
                <div className='grid  grid-cols-1 md:grid-cols-4 gap-5 justify-center items-center mx-8 my-10 '>
                    {
                        searchedProducts.length === 0 ? <p className='text-4xl my-5 ml-120 w-full mx-auto font-bold text-red-500 text-center '>No Applicaion Found</p> : searchedProducts.map((d, index) => {
                            return <Card d={d} key={index}></Card>
                        })
                    }
                </div>
            }
        </div>
    );
};

export default SecondCardSection;
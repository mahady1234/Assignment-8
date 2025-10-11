import React from 'react';
import useApps from '../Hooks/useHook';
import Card from './Card';
import { Link } from 'react-router';
import SkeletonLoaderTwo from './SkeletonLoaderTwo';
const FirstCardSection = () => {

    const data = useApps()
    const { loading } = useApps()

    const allData = data?.products?.data?.slice(0, 8) || []
    return (
        <>
            {
                loading ? <SkeletonLoaderTwo></SkeletonLoaderTwo> :
                    <div className='grid  grid-cols-1 md:grid-cols-4 md:gap-5 gap-2 justify-center items-center mx-8 my-10 '>
                        {
                            allData.map((d, index) => {
                                return <Card d={d} key={index}></Card>
                            })
                        }
                    </div>
            }
            <div className='flex justify-center mb-5'>
                <Link to={'/secondCardSection'} className="btn bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-white">Show All</Link>
            </div>
        </>

    );
};

export default FirstCardSection;
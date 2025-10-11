import React from 'react'

const SkeletonLoader = ({ count = 30 }) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4 mx-5 my-10'>
            {Array.from({ length: count }).map((_, i) => (
                <div key={i} className='flex flex-col gap-4'>
                    <div className='skeleton h-48 w-full'></div>
                    <div className='skeleton h-4 w-28'></div>
                    <div className='skeleton h-4 w-full'></div>
                    <div className='skeleton h-4 w-full'></div>
                    <div className='skeleton h-4 w-full'></div>
                </div>
            ))}
        </div>
    )
}

export default SkeletonLoader
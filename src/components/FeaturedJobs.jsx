import React, { useEffect, useState } from 'react';

const FeaturedJobs = () => {
    const [features, setFeatures] = useState([]);


    useEffect(() => {
        const fetchFeatures = async () => {
            const response = await fetch('featuredJobs.json');
            const data = await response.json();
            setFeatures(data);
        };
        fetchFeatures();
    }, []);

    return (
        <div className='mb-10'>
            <h1 className='text-5xl font-extrabold mt-20 mb-5'>Featured Jobs</h1>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='grid grid-cols-2 gap-10 ml-20 mt-20'>
                {features.map((features, index) => (
                    <div className="card w-full bg-base-100 shadow-xl">
                        <figure><img src={features.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                <p key={index}>{features.name}</p>

                            </h2>
                            <div className="card-actions justify-center">
                                <div className="btn btn-outline">Remote</div>
                                <div className="btn btn-outline">Full Time</div>
                                <div className='flex mb-5'>
                                    <div className='flex mr-10'>
                                        <img src="/src/assets/Icons/Frame-4.png" alt='location' />
                                        <p>Dhaka, Bangladesh</p>
                                    </div>
                                    <div className='flex'>
                                        <img src="/src/assets/Icons/Frame.png" alt="salary" />
                                        <p>Salary : 100K - 150K</p>
                                    </div>
                                </div>
                                <button className='btn bg-[#4406CB]'>View Details</button>
                            </div>
                        </div>

                    </div>

                ))}
            </div>
            <div className='mt-10'> <button className='btn bg-[#4406CB]'>See All Jobs</button></div>
        </div>
    );
};

export default FeaturedJobs;
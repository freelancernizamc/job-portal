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



    const [seeAllJobs, setSeeAllJobs] = useState(false);

    function handleShowAllClick() {
        setSeeAllJobs(!seeAllJobs);
    }


    const handleClick = () => {
        window.location.href = '/jobdetails';
    };


    return (
        <div className='mb-10'>
            <h1 className='sm:text-2xl md:text-5xl font-extrabold mt-20 mb-5'>Featured Jobs</h1>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='grid md:grid-cols-2 gap-10 md:ml-20 mt-20'>
                {features.slice(0, seeAllJobs ? undefined : 4).map((features, index) => (
                    <div className="card w-full bg-base-100 shadow-xl">
                        <figure><img src={features.image} alt="Jobs" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                <p key={index}>{features.job_title}</p>

                            </h2>
                            <div className="card-actions justify-center">
                                <div className="btn btn-outline">Remote</div>
                                <div className="btn btn-outline">Full Time</div>
                                <div className='flex mb-5'>
                                    <div className='md:flex mr-10'>
                                        <img src="/src/assets/Icons/Frame-4.png" alt='location' />
                                        <p>Dhaka, Bangladesh</p>
                                    </div>
                                    <div className='md:flex'>
                                        <img src="/src/assets/Icons/Frame.png" alt="salary" />
                                        <p>Salary : 100K - 150K</p>
                                    </div>
                                </div>
                                <button onClick={handleClick} className='btn bg-[#4406CB]'>View Details</button>
                            </div>
                        </div>

                    </div>

                ))}
            </div>
            <div className='mt-10'> <button onClick={handleShowAllClick} className='btn bg-[#4406CB]'>{seeAllJobs ? '' : 'See All Jobs'}</button></div>
        </div>
    );
};

export default FeaturedJobs;
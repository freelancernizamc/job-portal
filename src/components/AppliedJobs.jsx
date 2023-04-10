import React, { useEffect, useState } from 'react';

const AppliedJobs = () => {

    const [features, setFeatures] = useState([]);


    useEffect(() => {
        const fetchFeatures = async () => {
            const response = await fetch('featuredJobs.json');
            const data = await response.json();
            setFeatures(data);
        };
        fetchFeatures();
    }, []);


    const handleClick = () => {
        window.location.href = '/jobdetails';
    };

    return (
        <div>
            <div className='h-[400px] text-center bg-[#F9F9FF] flex justify-center items-center'>
                <h1 className='text-3xl font-bold'>Applied Jobs</h1>

            </div>
            <div className='flex'>
                <div className='grid  gap-10 md:ml-20 mt-20 w-[500px]'>
                    {features.slice(0, 4).map((features, index) => (
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

                                </div>
                            </div>
                            <div>
                                <button onClick={handleClick} className='btn bg-[#4406CB]'>View Details</button>
                            </div>

                        </div>


                    ))}

                </div>

            </div>
        </div>
    );
};

export default AppliedJobs;
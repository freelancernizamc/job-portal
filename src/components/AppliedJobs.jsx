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
    const remoteClick = () => {
        window.location.href = '/featuredjobs';
    };

    return (
        <div>
            <div className='h-[400px] text-center bg-[#F9F9FF] flex justify-center items-center'>
                <h1 className='text-3xl font-bold'>Applied Jobs</h1>

            </div>
            <div className='flex justify-between'>
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
                                            <img src="https://i.ibb.co/NjChk1j/Frame-4.png" alt='location' />
                                            <p>Dhaka, Bangladesh</p>
                                        </div>
                                        <div className='md:flex'>
                                            <img src="https://i.ibb.co/p0vv2Gq/Frame.png" alt="salary" />
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
                <div>
                    <button onClick={remoteClick} className='btn bg-[#4406CB]'>Remote Job</button>
                    <button onClick={remoteClick} className='btn'>on-site</button>
                </div>
            </div>

        </div>
    );
};

export default AppliedJobs;
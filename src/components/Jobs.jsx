import React, { useEffect, useState } from 'react';



const Jobs = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            const response = await fetch('categories.json');
            const data = await response.json();
            setCategories(data);
        };
        fetchCategories();
    }, []);

    return (
        <div className='mb-10'>
            <h1 className='text-5xl font-extrabold mt-20 mb-5'>Job Category List</h1>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div>
                <div className='grid grid-cols-4 gap-4 mt-20'>
                    {categories.map((category, index) => (
                        <div className="card card-compact w-full bg-base-100 shadow-xl">
                            <figure><img src={category.image} alt="Jobs" /></figure>
                            <div className="card-body">
                                <p key={index}>{category.name}</p>
                                <p>{category.available_jobs} Available Jobs</p>

                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </div>
    );
};

export default Jobs;

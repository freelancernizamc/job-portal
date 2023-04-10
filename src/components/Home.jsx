import React from 'react';
import img from '../assets/All Images/md-nizamuddin (1).jpeg'
import Jobs from './Jobs';

const Home = () => {
    return (
        <div>
            <div className='flex items-center bg-[#FAF8FF]'>
                <div className='text-left'>
                    <h1 className='text-7xl font-extrabold pb-5'>One Step<br></br> Closer To Your <span className='text-[#4406CB]'>Dream Job</span></h1>
                    <p className='pb-5'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className='btn bg-[#4406CB]'>Get Started</button>
                </div>
                <div>
                    <img src={img} alt='image'></img>
                </div>
            </div>
            <div>
                <Jobs></Jobs>
            </div>
        </div>

    );
};

export default Home;
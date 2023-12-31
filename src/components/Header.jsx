import React from 'react';
import { Link } from 'react-router-dom';
import Jobs from './Jobs';

const Header = () => {


    const handleClick = () => {
        window.location.href = '/appliedjobs';
    };

    return (
        <div className="navbar bg-[#F9F9FF]">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Statistics</a></li>
                        <li><a>Applied Jobs</a></li>
                        <li><a>Blog</a></li>


                    </ul>
                </div>
                <a className="btn btn-ghost normal-case sm:text-1xl md:text-3xl font-extrabold">JOB <span className='text-[#4406CB]'>PORTAL</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <Link className='mr-5 text-xl' to='/home'>Home</Link>
                    <Link className='mr-5 text-xl' to='/statistics'>Statistics</Link>
                    <Link className='mr-5 text-xl' to='/appliedjobs'>Applied Jobs</Link>
                    <Link className='mr-5 text-xl' to='blogs'>Blogs</Link>

                </ul>
            </div>
            <div className="navbar-end">
                <a onClick={handleClick} className="btn btn-primary">Star Applying</a>
            </div>

        </div>

    );
};


export default Header;
import React from 'react';

const JobDetails = () => {

    const handleClick = () => {
        window.location.href = '/appliedjobs';
    };


    return (
        <div>
            <div className='h-[400px] text-center bg-[#F9F9FF] flex justify-center items-center'>
                <h1 className='text-3xl font-bold'>Job Details</h1>

            </div>
            <div className='flex'>
                <div className='mr-20'>
                    <p className='text-left'>
                        <span className='text-2xl font-bold'>Job Description:</span> A UI/UX (User Interface/User Experience) designer is responsible for designing and creating engaging and effective interfaces for software and web applications. This includes designing the layout, visual design, and interactivity of the user interface.
                    </p>
                    <p className='text-left'>
                        <span className='text-2xl font-bold'>Job Responsibility:</span> Collaborating with cross-functional teams: UI/UX designers often work closely with other teams, including product management, engineering, and marketing, to ensure that the user interface is aligned with business and technical requirements. You will need to be able to effectively communicate your design ideas and gather feedback from other team members.
                    </p>
                    <h2 className='text-2xl font-bold text-left'>Educational Requirements:</h2>
                    <p className='text-left'>Bachelor degree to complete any reputational university.</p>
                    <h2 className='text-2xl font-bold text-left'>Experiences:</h2>
                    <p className='text-left mb-10'>2-3 Years in this field.</p>
                </div>
                <div>
                    <div className="card w-96 bg-[#F4F2FF] shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">Job Details</h2>
                            <div className='flex'>
                                <img src="https://i.ibb.co/p0vv2Gq/Frame.png" alt="salary" />
                                <p>Salary : 100K - 150K</p>
                            </div>
                            <div className='flex'>
                                <img src="https://i.ibb.co/nnGrRXm/Frame-1.png" alt="salary" />
                                <p>Job Title : Product Designer</p>
                            </div>
                            <h2 className='text-xl font-bold'>Contact Information</h2>
                            <div className='flex'>
                                <img src="https://i.ibb.co/xqwtzsz/Frame-2.png" alt="phone" />
                                <p>Phone : 01819968181</p>
                            </div>
                            <div className='flex'>
                                <img src="/src/assets/Icons/Frame-3.png" alt="email" />
                                <p>Email : info@gmail.com</p>
                            </div>
                            <div className='flex'>
                                <img src="https://i.ibb.co/NjChk1j/Frame-4.png" alt="address" />
                                <p>Address : Dhanmondi 32, Sukrabad
                                    Dhaka, Bangladesh</p>
                            </div>
                            <div className="card-actions w-full">
                                <button onClick={handleClick} className="btn btn-primary w-full">Apply Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;
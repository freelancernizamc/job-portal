import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';




const data = [
    { name: 'Assignment 01', mark: 60 },
    { name: 'Assignment 02', mark: 57 },
    { name: 'Assignment 03', mark: 55 },
    { name: 'Assignment 04', mark: 55 },
    { name: 'Assignment 05', mark: 50 },
    { name: 'Assignment 06', mark: 50 },
    { name: 'Assignment 07', mark: 60 },
    { name: 'Assignment 08', mark: 48 },
];

const Statistics = () => {
    return (
        <div>
            <div className='h-[400px] text-center bg-[#F9F9FF] flex justify-center items-center'>
                <h1 className='text-3xl font-bold'>My Assignment Marks Statistics</h1>

            </div>
            <ResponsiveContainer width="100%" height={400}>
                <AreaChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="mark" stroke="#8884d8" fill="#8884d8" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};




export default Statistics;
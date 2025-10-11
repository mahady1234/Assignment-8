import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const RatingsChart = ({ ratings }) => {
    return (
        <div className="w-full h-100 bg-white rounded-lg p-1 md:p-5">
            <h3 className="text-2xl font-bold mb-4 md:pl-0 pl-10">Ratings</h3>

            <ResponsiveContainer md:width="100%" md:height="100%" height={300}>
                <BarChart
                    layout="vertical"
                    data={ratings}
                    margin={{
                        top: 10,
                        right: 20,
                        left: 5,
                        bottom: 10,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis type="category" dataKey="name" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="count" fill="#ff8800" barSize={20} radius={[4, 4, 4, 4]} />
                </BarChart>
            </ResponsiveContainer>
        </div>





    );
};

export default RatingsChart;

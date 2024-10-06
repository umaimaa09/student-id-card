import React from 'react';

interface studentProps {
    name: string;
    age: number;
    rollNumber: string;
    studentClass: string;
}

function StudentIDCard ({name, age, rollNumber, studentClass}: studentProps) {
    return (
        <div className = "bg-gray-100 shadow-md p-4 rounded-lg w-72 m-4">
            <h2 className='text-xl font-bold'> {name} </h2>
            <p className='text-gray-700'> Age: {age} </p>
            <p className='text-gray-700'> Roll number: {rollNumber} </p>
            <p className='text-gray-700'> Class: {studentClass}</p>
        </div>
    )
};

 export default StudentIDCard;
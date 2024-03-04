import React from 'react';
import { FaJava } from 'react-icons/fa';

const Skills = () =>{
    return(
    <div name ='skills' className ='bg-[#051622] text-gray-300'>
     <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
            <p className='text-4xl font-bold inline border-b-4 border-[#DEB992]'>Skills</p>
            <p className='py-4'>// These are the technologies I've worked with</p>
        </div>

        <div className = 'w-full  justify-center items-center grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 text-center'>
            <p><FaJava size ={60}/></p>
            </div>
        </div>
     </div>
    </div>
    );
}

export default Skills;

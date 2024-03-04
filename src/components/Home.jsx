import React from 'react';
import { HiArrowCircleRight } from 'react-icons/hi';

const Home = () => {
    return(
        <div className='w-full h-screen bg-[#051622]'>

            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-[#DEB992]'>Hi, my name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Shalu.</h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Full-stack Developer</h2>
                <p className='text-[#8892b0] py-4 max-w-[700px]'>I'm a passionate full-stack developer with a love for turning ideas into Captivating digital experiences. 
</p>
            
            <div>
            <button className='text-white group border-2 px-6  py-3 my-2 flex items-center hover:bg-[#DEB992] hover:border-[#DEB992]'>
                View Work
                <span className='group-hover:rotate-90 duration-300'>
                    <HiArrowCircleRight className='ml-3' />
                </span>
            </button>
            </div>
            </div>

        </div>
    )
}

export default Home;
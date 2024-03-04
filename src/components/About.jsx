import React from 'react';

const About =() =>{
    return(
        <div name ='about' className='w-full h-screen bg-[#051622] text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-[#DEB992]'>
                            About
                        </p>
                    </div>
                    <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Hi, I'm Shalu, nice to meet you. Please take a look around.</p>
                    </div>
                    <div>
                        <p>I am a Btech graduate in Information technology from IMS 
                            ENGINEERING COLLEGE GHAZIABAD. Passionate about building 
                            excellent software that impoves the lives of those arount 
                            me.Ability to work with skills like Java,Html,Css, Javascript,
                            Node Js,C,SQL, power BI,React,Next.js</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
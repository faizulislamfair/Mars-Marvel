import React from 'react';
import './Home.css';
import Features from './../Features/Features';


const Home = () => {


    return (
        <div className='w-full bg-[#000] h-auto feature-body'>
            <div className='max-w-[1280px] mx-auto px-2'>

                <div className='xs:text-3xl py-12 md:text-4xl text-[#E5DBCC]'>
                    Mars Marvel
                </div>

                <Features></Features>

            </div>
        </div>
    );
};

export default Home;
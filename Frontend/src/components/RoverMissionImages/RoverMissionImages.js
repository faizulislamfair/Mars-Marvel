import React from 'react';
import { Link } from 'react-router-dom';


const RoverMissionImages = () => {



    return (

        <div className='w-full'>
            <div className='max-w-[1240px] grid grid-cols-1 place-items-center mx-auto px-2'>
                <div>
                    <div className='flex flex-row justify-between p-5 mb-2'>
                        <Link to='/'>
                            <img className='xs:hidden md:block translate-x-5' src="./arrow_left.svg" alt="" />
                        </Link>
                        <h3 className='text-3xl text-center text-[#E5DBCC] md:translate-x-7'>Rover Mission Images</h3>
                        <Link to='/'>
                            <h3 className='xs:hidden md:block text-[#E5DBCC] text-xl font-light -translate-x-12'>Mars Marvel</h3>
                        </Link>
                    </div>
                    <img src="./divider.svg" className='xs:hidden md:block opacity-50' alt="" />

                    <div className='text-3xl flex flex-col items-center'>


                        <div className='flex xs:flex-col md:flex-row pt-10 mt-10 gap-20 text-xl font-bold'>
                            <Link to='/rover_mission_images/sol'>
                                <button className='px-10 py-5 rounded-full bg-[#ECF7FF] text-[#2980B9] hover:bg-[#2980B9] hover:text-[#fff]'>Sol</button>
                            </Link>

                            <Link to='/rover_mission_images/camera'>
                                <button className='px-10 py-5 rounded-full bg-[#ECF7FF] text-[#2980B9] hover:bg-[#2980B9] hover:text-[#fff]'>Camera</button>
                            </Link>

                            <Link to='/rover_mission_images/earth_date'>
                                <button className='px-10 py-5 rounded-full bg-[#ECF7FF] text-[#2980B9] hover:bg-[#2980B9] hover:text-[#fff]'>Earth Date</button>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default RoverMissionImages;
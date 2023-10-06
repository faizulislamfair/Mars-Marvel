import React from 'react';
import { Link } from 'react-router-dom';



const ImagesPerCamera = () => {

    return (
        <div className='w-full'>
            <div className='max-w-[1240px] mx-auto px-2'>
                <div className='flex flex-row justify-between p-5 mb-2'>
                    <Link to='/rover_mission_images'>
                        <img className='translate-x-5' src="/arrow_left.svg" alt="" />
                    </Link>
                    <h3 className='text-3xl text-center text-[#E5DBCC] translate-x-7'>Camera</h3>
                    <Link to='/'>
                        <h3 className='text-[#E5DBCC] text-xl font-light -translate-x-12'>Mars Marvel</h3>
                    </Link>

                </div>
                <img src="/divider.svg" className='opacity-50 translate-x-10' alt="" />
                <div className='mt-5 text-3xl flex flex-col items-center'>

                    <div className='grid grid-cols-4 mt-20 gap-10'>
                        <Link to='/rover_mission_images/camera/fhaz'>
                            <button className='px-10 py-5 rounded-full bg-[#ECF7FF] text-[#2980B9] hover:bg-[#2980B9] hover:text-[#fff]'>FHAZ</button>
                        </Link>


                        <Link to='/rover_mission_images/camera/rhaz'>
                            <button className='px-10 py-5 rounded-full bg-[#ECF7FF] text-[#2980B9] hover:bg-[#2980B9] hover:text-[#fff]'>RHAZ</button>
                        </Link>

                        <Link to='/rover_mission_images/camera/mast'>
                            <button className='px-10 py-5 rounded-full bg-[#ECF7FF] text-[#2980B9] hover:bg-[#2980B9] hover:text-[#fff]'>MAST</button>
                        </Link>

                        <Link to='/rover_mission_images/camera/chemcam'>
                            <button className='px-10 py-5 rounded-full bg-[#ECF7FF] text-[#2980B9] hover:bg-[#2980B9] hover:text-[#fff]'>CHEMCAM</button>
                        </Link>

                        <Link to='/rover_mission_images/camera/mahli'>
                            <button className='px-10 py-5 rounded-full bg-[#ECF7FF] text-[#2980B9] hover:bg-[#2980B9] hover:text-[#fff]'>MAHLI</button>
                        </Link>

                        <Link to='/rover_mission_images/camera/mardi'>
                            <button className='px-10 py-5 rounded-full bg-[#ECF7FF] text-[#2980B9] hover:bg-[#2980B9] hover:text-[#fff]'>MARDI</button>
                        </Link>
                        <Link to='/rover_mission_images/camera/navcam'>
                            <button className='px-10 py-5 rounded-full bg-[#ECF7FF] text-[#2980B9] hover:bg-[#2980B9] hover:text-[#fff]'>NAVCAM</button>
                        </Link>

                        <Link to='/rover_mission_images/camera/pancam'>
                            <button className='px-10 py-5 rounded-full bg-[#ECF7FF] text-[#2980B9] hover:bg-[#2980B9] hover:text-[#fff]'>PANCAM</button>
                        </Link>

                        <Link to='/rover_mission_images/camera/minites'>
                            <button className='px-10 py-5 rounded-full bg-[#ECF7FF] text-[#2980B9] hover:bg-[#2980B9] hover:text-[#fff]'>MINITES</button>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ImagesPerCamera;
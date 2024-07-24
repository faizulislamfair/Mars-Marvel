import React, { useState, useEffect, useLayoutEffect } from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import DocumentOnMars from './../DocumentOnMars/DocumentOnMars';


const DocumentsOnMars = () => {

    const marsDocs = useLoaderData();

    const [displayMarsDocs, setDisplayMarsDocs] = useState(marsDocs);

    const inlineStyles = {
        backgroundImage: 'linear-gradient(115deg, #D35400 3.28%, #2980B9 100%, rgba(41, 128, 185, 0.00) 96.99%)'
    };


    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });


    console.log(displayMarsDocs);


    return (
        <div className='w-full'>
            <div className='max-w-[1240px] grid grid-cols-1 place-items-center mx-auto px-2 text-[#E5DBCC]'>

                <div>
                    <div className='flex flex-row justify-between p-5 mb-5'>
                        <Link to='/'>
                            <img src="./arrow_left.svg" className='xs:hidden md:block' alt="" />
                        </Link>
                        <h3 className='text-3xl text-center text-[#E5DBCC]'>Research Hub</h3>
                        <Link to='/'>
                            <h3 className='xs:hidden md:block text-[#E5DBCC] text-xl font-light -translate-x-12'>Mars Marvel</h3>
                        </Link>
                    </div>
                    <img src="./divider.svg" className='xs:hidden md:block pb-3 opacity-50' alt="" />

                    <div className='flex flex-col items-center'>

                        <div className='grid sm:grid-cols-12 md:grid-cols-2 lg:grid-cols-3 place-items-center sm:gap-0 md:gap-10 mt-5 text-[#E5DBCC] text-justify'>

                            <Link to='/research_on_mars/research_paper'>
                                <div className='rounded-xl hover:scale-105 ease-in duration-300'>
                                    <div className='py-10'>
                                        <div className='rounded-xl overflow-hidden max-w-sm pb-3 bg-[#0E0E0E] shadow shadow-gray-700'>
                                            <img src='./research_paper.jpg' style={{ width: '500px', height: '220px' }} alt="" />
                                            <div className='px-6 py-4'>
                                                <div className='font-medium text-xl mb-2'>Research Papers</div>
                                                <p className='text-[#E5DBCC] text-justify'>
                                                    These papers cover a wide range of topics, including its geology, climate, potential for human colonization, robotic missions, astrobiology, and contribute to our understanding of the Red Planet, guide future exploration and scientific endeavors in the quest to unravel the mysteries of Mars.
                                                </p>
                                            </div>
                                            <button style={inlineStyles} className=' bg-[#ff585d] px-5 py-3 rounded-xl hover:scale-105 ease-in duration-300 ml-5'>
                                                View
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Link>

                            <Link to='/research_on_mars/promote_research'>
                                <div className='rounded-xl hover:scale-105 ease-in duration-300'>
                                    <div className='py-10'>
                                        <div className='rounded-xl overflow-hidden max-w-sm pb-3 bg-[#0E0E0E] shadow shadow-gray-700'>
                                            <img src='./promote_research.jpg' style={{ width: '500px', height: '220px' }} alt="" />
                                            <div className='px-6 py-4'>
                                                <div className='font-medium text-xl mb-2'>Promote Research</div>
                                                <p className='text-[#E5DBCC] text-justify'>
                                                    Unlock the Secrets of Mars: Dive into the World of Martian Research! Join the scientific community in unraveling the mysteries of the Red Planet. Discover groundbreaking insights into Mars' geology, atmosphere, potential for human habitation, and the search for signs of past or present life.
                                                </p>
                                            </div>
                                            <button style={inlineStyles} className=' bg-[#ff585d] px-5 py-3 rounded-xl hover:scale-105 ease-in duration-300 ml-5'>
                                                View
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Link>

                            <Link to='/research_on_mars/science_magazine'>
                                <div className='rounded-xl hover:scale-105 ease-in duration-300'>
                                    <div className='py-10'>
                                        <div className='rounded-xl overflow-hidden shadow max-w-sm pb-3 bg-[#0E0E0E] shadow-gray-700'>
                                            <img src='./science_magazine.jpg' style={{ width: '500px', height: '220px' }} alt="" />
                                            <div className='px-6 py-4'>
                                                <div className='font-medium text-xl mb-2'>Science Magazine</div>
                                                <p className='text-[#E5DBCC] text-justify'>
                                                    Embark on a Martian Odyssey with Science Magazine! Dive into a treasure trove of peer-reviewed articles exploring Mars' geology, climate, astrobiology, and potential for human colonization. Stay at the forefront of Martian research and join the quest to understand this enigmatic planet.
                                                </p>
                                            </div>
                                            <button style={inlineStyles} className='bg-[#ff585d] px-5 py-3 rounded-xl hover:scale-105 ease-in duration-300 ml-5'>
                                                View
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Link>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default DocumentsOnMars;
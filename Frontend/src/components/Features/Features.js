import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Features.css';


const Features = () => {

    const inlineStyles = {
        backgroundImage: 'linear-gradient(115deg, #D35400 3.28%, #2980B9 100%, rgba(41, 128, 185, 0.00) 96.99%)'
    };


    const tabInlineStyles = {
        backgroundColor: 'rgba(255, 255, 255, 0.04)',
        backdropFilter: 'blur(4px)',
    };


    const centerTabInlineStyles = {
        backgroundColor: 'rgba(255, 255, 255, 0.20)',
        backdropFilter: 'blur(4px)',
    };



    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div className='w-full text-[#E5DBCC]'>

            <div className='max-w-[1280px] mx-auto md:px-2'>

                <div className='grid xs:grid-cols-1 md:grid-cols-2 place-items-center xs:gap-5 md:gap-10'>

                    <div className='grid grid-cols-1 place-items-center container'>

                        <Link to='/real_time_weather'>
                            <div className='grid grid-cols-1 place-items-center mb-14 shadow shadow-gray-700 rounded-xl hover:scale-105 ease-in duration-300 xs:pl-4 xs:pr-15 md:px-16 pt-2 text-left feature_body bg-[#0E0E0E]'>

                                <div>
                                    <div className='xs:hidden xl:block flex flex-col p-3'>
                                        <p className='text-sm'>September 23, 2023</p>
                                        <h3 className='text-xl'>
                                            Weather
                                        </h3>
                                    </div>

                                    <div className='xs:hidden xl:flex flex-row justify-between p-4'>
                                        <div className='flex flex-row'>
                                            <img className='-translate-x-3 xs:hidden xl:block w-[32px]' src="./sun.svg" alt="" />
                                            <div className='flex flex-col pr-2'>
                                                <div> High: 24°F</div>
                                                <div> Low: -139.8°F</div>
                                            </div>
                                        </div>
                                        <img src="./Line_1.svg" className='xs:hidden xl:block' alt="" />
                                        <div className='pl-2 flex flex-row'>
                                            <img src="./wind.svg" className='w-[32px] xs:hidden xl:block' alt="" />
                                            <div className='flex flex-row p-3'>
                                                <div>8&nbsp;&nbsp;</div>
                                                <div>m/s</div>
                                            </div>
                                        </div>
                                        <img src="./Line_1.svg" className='xs:hidden xl:block' alt="" />
                                        <div className='pl-2 flex flex-row'>
                                            <img src="./import.svg" className='w-[32px] xs:hidden xl:block' alt="" />
                                            <div className='flex flex-row p-3'>
                                                <div>1023&nbsp;&nbsp;</div>
                                                <div>hPa</div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className='xs:block'>
                                        <div className='flex flex-row justify-around'>
                                            <img className='xs:-translate-x-6' src="./arrow-left.svg" alt="" />

                                            <div className='flex flex-row text-center text-sm p-2 rounded -translate-x-1'>
                                                <div style={tabInlineStyles} className='flex flex-col rounded xs:-translate-x-5 md:-translate-x-4 p-1'>
                                                    <div>Sol 680</div>
                                                    <div>October 24</div>
                                                    <img className='py-2 opacity-70' src="./rectangle_11.svg" alt="" />
                                                    <div>High: 240 °F</div>
                                                    <div>Low: -139.80 °F</div>
                                                </div>

                                                <div style={centerTabInlineStyles} className='flex flex-col -translate-x-1'>
                                                    <div>Sol 680</div>
                                                    <div>October 24</div>
                                                    <img className='py-2 opacity-70' src="./rectangle_11.svg" alt="" />
                                                    <div>High: 240 °F</div>
                                                    <div>Low: -139.80 °F</div>
                                                </div>


                                                <div style={tabInlineStyles} className='flex flex-col translate-x-4'>
                                                    <div>Sol 680</div>
                                                    <div>October 24</div>
                                                    <img className='py-2 opacity-70' src="./rectangle_11.svg" alt="" />
                                                    <div>High: 240 °F</div>
                                                    <div>Low: -139.80 °F</div>
                                                </div>
                                            </div>

                                            <img className='xs:translate-x-2 md:translate-x-6' src="./arrow-right.svg" alt="" />
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </Link>


                        <Link to='/research_on_mars'>

                            <div className='mb-14 shadow shadow-gray-700 rounded-xl hover:scale-105 ease-in duration-300 px-5 py-5 text-left bg-[#0E0E0E]'>
                                <h3 className='text-xl font-normal'>Research Hub</h3>
                                <p className='text-base font-normal font-family: Montserrat;
mt-2'>Numerous research papers and documents explore Mars, focusing on its geology, climate, and the search for signs of life. These materials draw from data gathered by missions like NASA's Curiosity rover, offer valuable insights into the Red Planet and promote study</p>
                                <button style={inlineStyles} className='rounded font-bold mt-2 py-2 px-6 mb-3 text-sm'>Start Reading</button>

                            </div>

                        </Link>

                        <Link to='/mars_trek_wmts'>

                            <div className='mb-14 shadow shadow-gray-700 rounded-xl hover:scale-105 ease-in duration-300 px-5 py-5 text-left bg-[#0E0E0E]'>
                                <h3 className='text-xl font-normal'>Mars Trek Web Map Tile Service</h3>
                                <p className='text-base font-normal font-family: Montserrat;
mt-2'>Mars Trek's Web Map Tile Service (WMTS) offers users access to NASA's Mars data and imagery, enabling the integration of Martian maps and information into custom applications and projects for in-depth exploration of the Red Planet.</p>
                                <button style={inlineStyles} className='rounded font-bold mt-2 py-2 px-6 mb-3 text-sm'>View WMTS</button>

                            </div>

                        </Link>






                    </div>


                    <div className='grid grid-cols-1 place-items-center container'>
                        <Link to='/chat_voice_bot'>

                            <div className='container'>
                                <div className='shadow shadow-gray-700 rounded-xl hover:scale-105 ease-in duration-300 px-5 py-5 pt-2 text-left bg-[#0E0E0E]'>
                                    <h3 className='text-xl font-normal'>Chat & Voice Bot</h3>
                                    <p className='text-base font-normal font-family: Montserrat;
mt-2'>It enables the chatbot to understand user queries and provide relevant responses based on predefined intents and machine learning-based training.</p>
                                    <button style={inlineStyles} className='rounded font-bold mt-2 py-2 px-6 text-sm'>Start</button>

                                </div>
                            </div>

                        </Link>

                        <Link to='/rover_mission_images'>

                            <div className='mt-12 mb-14 shadow shadow-gray-700 rounded-xl hover:scale-105 ease-in duration-300 px-12 pt-2 text-left bg-[#0E0E0E]'>
                                <h3 className='text-xl font-normal'>Rover Mission Images</h3>
                                <p className='text-base font-normal font-family: Montserrat;
mt-2'>Watch Breathtaking images from Mars Rovers</p>

                                <div className='flex justify-between	'>
                                    <div className='flex gap-5 my-2 text-xs'>
                                        <p><u>Sol</u></p>
                                        <p className='opacity-80'>Camera</p>
                                        <p className='opacity-80'>Earth Date</p>
                                    </div>
                                    <div className='grid grid-cols-1'>
                                        <img src="./search-normal.svg" alt="" />
                                    </div>
                                </div>


                                <div className='grid grid-cols-2 gap-4'>
                                    <img src="./rover_home_1.svg" alt="" />
                                    <img src="./rover_home_2.svg" alt="" />
                                </div>

                                <button style={inlineStyles} className='rounded text-sm font-bold mt-2 py-2 px-6 mb-3 text-justify'>See All Images</button>

                            </div>
                        </Link>

                        <Link to='/mars_quizzes'>

                            <div className='mb-14 shadow shadow-gray-700 rounded-xl hover:scale-105 ease-in duration-300 px-5 py-5 text-left bg-[#0E0E0E]'>
                                <h3 className='text-xl font-normal'>Mars Quizzes</h3>
                                <p className='text-base font-normal font-family: Montserrat;
mt-2'>Exploring Mars: Quizzes for Young Space Enthusiasts, we've created an engaging and educational experience tailored specifically for students and young people. This collection of quizzes is designed to make learning about Mars a fun and interactive journey.</p>
                                <button style={inlineStyles} className='rounded font-bold mt-2 py-2 px-6 mb-3 text-sm'>Go to Quiz</button>

                            </div>
                        </Link>

                    </div>
                </div >
            </div>
        </div>
    );
};

export default Features;
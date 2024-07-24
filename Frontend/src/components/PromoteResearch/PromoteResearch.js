import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import MarsModel from './../MarsModel/MarsModel';

const PromoteResearch = () => {
    return (
        <div className='w-full grid grid-cols-1 place-items-center'>
            <div className='max-w-[1240px] grid grid-cols-1 place-items-center mx-auto px-2'>

                <div className='m-10'>
                    <div className='flex flex-row justify-between p-5 mb-2'>
                        <Link to='/research_on_mars'>
                            <img className='xs:hidden md:block translate-x-5' src="/arrow_left.svg" alt="" />
                        </Link>
                        <h3 className='text-3xl text-center text-[#E5DBCC] md:translate-x-10'>Promote Research</h3>
                        <Link to='/'>
                            <h3 className='xs:hidden md:block text-[#E5DBCC] text-xl font-light'>Mars Marvel</h3>
                        </Link>
                    </div>
                    <img src="/divider.svg" className='xs:hidden md:block opacity-50 translate-x-10' alt="" /><br />

                    <iframe src="https://mars.nasa.gov/gltf_embed/24881" width="100%" height="450px" frameborder="0" />

                    <div className='grid grid-cols-1 place-items-center'>
                        <p className='text-2xl'>As the condition of earth is uncertain, we can't but look for alternative habitual planets to hold onto the survival of human race and so we've developed this portal to encourage amateur astronomers, citizen scientists and anybody interested to carry out research on Mars!
                        </p>

                        <div className='container grid grid-cols-1 place-items-center pt-7'>
                            <div className='grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center mt-12 gap-10 text-2xl'>

                                <a href="https://mars.nasa.gov/" target='_blank' rel='noreferrer'>
                                    <button className='px-10 py-5 rounded-full bg-[#ECF7FF] text-[#2980B9] hover:bg-[#2980B9] hover:text-[#fff]' >
                                        NASA Science Mars Exploration
                                    </button>
                                </a>


                                <Link to='/research_on_mars/research_paper' target='_blank'>
                                    <button className='px-10 py-5 rounded-full bg-[#ECF7FF] text-[#2980B9] hover:bg-[#2980B9] hover:text-[#fff]' >
                                        Mars Research Papers Section
                                    </button>
                                </Link>


                                <Link to='/research_on_mars/science_magazine' target='_blank'>
                                    <button className='px-10 py-5 rounded-full bg-[#ECF7FF] text-[#2980B9] hover:bg-[#2980B9] hover:text-[#fff]' >
                                        Mars Magazine Section
                                    </button>
                                </Link>




                                <a href="https://colab.research.google.com/?utm_source=scs-index" target='_blank' rel="noreferrer">
                                    <button className='px-10 py-5 rounded-full bg-[#ECF7FF] text-[#2980B9] hover:bg-[#2980B9] hover:text-[#fff]' >
                                        Google Colab
                                    </button>
                                </a>

                                <Link to='/chat_voice_bot' target='_blank'>
                                    <button className='px-10 py-5 rounded-full bg-[#ECF7FF] text-[#2980B9] hover:bg-[#2980B9] hover:text-[#fff]' >
                                        Talk to Chatbot
                                    </button>
                                </Link>


                                <Link to='/real_time_weather' target='_blank'>
                                    <button className='px-10 py-5 rounded-full bg-[#ECF7FF] text-[#2980B9] hover:bg-[#2980B9] hover:text-[#fff]' >
                                        View Weather Section
                                    </button>
                                </Link>


                                <Link to='/rover_mission_images' target='_blank'>
                                    <button className='px-10 py-5 rounded-full bg-[#ECF7FF] text-[#2980B9] hover:bg-[#2980B9] hover:text-[#fff]' >
                                        View Rover Mission Images Section
                                    </button>
                                </Link>


                                <Link to='/mars_trek_wmts' target='_blank'>
                                    <button className='px-10 py-5 rounded-full bg-[#ECF7FF] text-[#2980B9] hover:bg-[#2980B9] hover:text-[#fff]' >
                                        Mars Trek Web Map Tile Service
                                    </button>
                                </Link>


                                <Link to='/surveys_feedback'>
                                    <button className='px-10 py-5 rounded-full bg-[#ECF7FF] text-[#2980B9] hover:bg-[#2980B9] hover:text-[#fff]' >
                                        Public Surveys and Feedback
                                    </button>
                                </Link>


                                <button className='px-10 py-5 rounded-full bg-[#ECF7FF] text-[#2980B9] hover:bg-[#2980B9] hover:text-[#fff]' >
                                    Mars Art and Culture
                                </button>

                                <button className='px-10 py-5 rounded-full bg-[#ECF7FF] text-[#2980B9] hover:bg-[#2980B9] hover:text-[#fff]' >
                                    Mars Missions, Rovers and Spacecraft
                                </button>


                                <button className='px-10 py-5 rounded-full bg-[#ECF7FF] text-[#2980B9] hover:bg-[#2980B9] hover:text-[#fff]' >
                                    Educational Outreach
                                </button>

                                <button className='px-10 py-5 rounded-full bg-[#ECF7FF] text-[#2980B9] hover:bg-[#2980B9] hover:text-[#fff]' >
                                    Public Engagement
                                </button>

                                <button className='px-10 py-5 rounded-full bg-[#ECF7FF] text-[#2980B9] hover:bg-[#2980B9] hover:text-[#fff]' >
                                    Research Grants and Funding
                                </button>


                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>

    );
};

export default PromoteResearch;

import React from 'react';
import { Link } from 'react-router-dom';

const InPress = () => {
    return (
        <div className='w-full grid grid-cols-1 place-items-center'>
            <div className='max-w-[1240px] mx-auto px-2'>

                <div className=''>
                    <div className='flex flex-row justify-between p-5 mb-2'>
                        <Link to='/research_on_mars/research_paper'>
                            <img className='xs:hidden md:block translate-x-5' src="/arrow_left.svg" alt="" />
                        </Link>
                        <h3 className='text-3xl text-center text-[#E5DBCC] md:translate-x-10'>In Press</h3>
                        <Link to='/'>
                            <h3 className='xs:hidden md:block text-[#E5DBCC] text-xl font-light -translate-x-12'>Mars Marvel</h3>
                        </Link>
                    </div>
                </div>


                <img src="/divider.svg" className='xs:hidden md:block opacity-50 translate-x-10' alt="" />
                <br />


                <div className='container mx-auto grid grid-cols-1 place-items-center'>

                    <div className='grid grid-cols-1 place-items-center gap-10 m-12'>

                        <a href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2023JE007865" target='_blank' rel='noreferrer'>
                            <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                <p>On the Diversity and Formation Modes of Martian Minerals</p>
                            </div>
                        </a>

                        <a href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2022JE007237" target='_blank' rel='noreferrer'>
                            <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                <p>Geologic Structure of the Vera Rubin Ridge, Gale Crater, Mars
                                </p>
                            </div>
                        </a>
                    </div>

                </div>


            </div>
        </div>
    );
};

export default InPress;
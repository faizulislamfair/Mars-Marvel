import React from 'react';
import { Link } from 'react-router-dom';

const ResearchPaper = () => {


    return (
        <div className='grid grid-cols-1 place-items-center'>
            <div className='w-full grid grid-cols-1 place-items-center'>
                <div className='max-w-[1240px] mx-auto px-2'>
                    <div className='flex flex-row justify-between p-5 mb-2'>
                        <Link to='/research_on_mars'>
                            <img className='xs:hidden md:block translate-x-5' src="/arrow_left.svg" alt="" />
                        </Link>
                        <h3 className='text-3xl text-center text-[#E5DBCC]'>Research Papers</h3>
                        <Link to='/'>
                            <h3 className='xs:hidden md:block text-[#E5DBCC] text-xl font-light -translate-x-12'>Mars Marvel</h3>
                        </Link>
                    </div>
                    <img src="/divider.svg" className='xs:hidden md:block opacity-50 translate-x-10' alt="" /><br />

                    <div className='grid grid-cols-1 place-items-center'>

                        <p className='text-2xl pb-7 pt-7'>Paper Credits: Mars Science Laboratory Science Team Papers
                        </p>


                        <div className='container'>
                            <div className='grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center gap-10 mt-12'>
                                <Link to='/research_on_mars/research_paper/in_press'>
                                    <button className='px-10 py-5 rounded-full bg-[#ECF7FF] text-[#2980B9] hover:bg-[#2980B9] hover:text-[#fff]'>In Press</button>
                                </Link>
                                <Link to='/research_on_mars/research_paper/2023'>
                                    <button className='px-10 py-5 rounded-full bg-[#ECF7FF] text-[#2980B9] hover:bg-[#2980B9] hover:text-[#fff]'>2023</button>
                                </Link>
                                <Link to='/research_on_mars/research_paper/2022'>
                                    <button className='px-10 py-5 rounded-full bg-[#ECF7FF] text-[#2980B9] hover:bg-[#2980B9] hover:text-[#fff]'>2022</button>
                                </Link>
                                <Link to='/research_on_mars/research_paper/2021'>
                                    <button className='px-10 py-5 rounded-full bg-[#ECF7FF] text-[#2980B9] hover:bg-[#2980B9] hover:text-[#fff]'>2021</button>
                                </Link>
                                <Link to='/research_on_mars/research_paper/2020'>
                                    <button className='px-10 py-5 rounded-full bg-[#ECF7FF] text-[#2980B9] hover:bg-[#2980B9] hover:text-[#fff]'>2020</button>
                                </Link>
                                <Link to='/research_on_mars/research_paper/2019'>
                                    <button className='px-10 py-5 rounded-full bg-[#ECF7FF] text-[#2980B9] hover:bg-[#2980B9] hover:text-[#fff]'>2019</button>
                                </Link>
                                <Link to='/research_on_mars/research_paper/2018'>
                                    <button className='px-10 py-5 rounded-full bg-[#ECF7FF] text-[#2980B9] hover:bg-[#2980B9] hover:text-[#fff]'>2018</button>
                                </Link>
                                <Link to='/research_on_mars/research_paper/2017'>
                                    <button className='px-10 py-5 rounded-full bg-[#ECF7FF] text-[#2980B9] hover:bg-[#2980B9] hover:text-[#fff]'>2017</button>
                                </Link>
                                <Link to='/research_on_mars/research_paper/2016'>
                                    <button className='px-10 py-5 rounded-full bg-[#ECF7FF] text-[#2980B9] hover:bg-[#2980B9] hover:text-[#fff]'>2016</button>
                                </Link>
                                <Link to='/research_on_mars/research_paper/2015'>
                                    <button className='px-10 py-5 rounded-full bg-[#ECF7FF] text-[#2980B9] hover:bg-[#2980B9] hover:text-[#fff]'>2015</button>
                                </Link>
                                <Link to='/research_on_mars/research_paper/2014'>

                                    <button className='px-10 py-5 rounded-full bg-[#ECF7FF] text-[#2980B9] hover:bg-[#2980B9] hover:text-[#fff]'>2014</button>
                                </Link>
                                <Link to='/research_on_mars/research_paper/2013'>
                                    <button className='px-10 py-5 rounded-full bg-[#ECF7FF] text-[#2980B9] hover:bg-[#2980B9] hover:text-[#fff]'>2013</button>
                                </Link>
                                <Link to='/research_on_mars/research_paper/2012'>
                                    <button className='px-10 py-5 rounded-full bg-[#ECF7FF] text-[#2980B9] hover:bg-[#2980B9] hover:text-[#fff]'>2012</button>
                                </Link>
                                <Link to='/research_on_mars/research_paper/2008_2011'>
                                    <button className='px-10 py-5 rounded-full bg-[#ECF7FF] text-[#2980B9] hover:bg-[#2980B9] hover:text-[#fff]'>2008-11</button>
                                </Link>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>

    );
};

export default ResearchPaper;
import React, { useState, useEffect, useLayoutEffect } from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import MarsQuiz from './../MarsQuiz/MarsQuiz';


const MarsQuizzes = () => {

    const quiz = useLoaderData();

    const [displayQuiz, setDisplayQuiz] = useState(quiz);


    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });


    console.log(displayQuiz);


    return (
        <div>
            <div className='w-full xs:place-content-center xs:place-items-center'>
                <div className='max-w-[1240px] mx-auto xs:px-0 md:px-2'>
                    <div className='flex flex-row justify-between p-5'>
                        <Link to='/'>
                            <img className='xs:hidden md:block translate-x-5' src="./arrow_left.svg" alt="" />
                        </Link>
                        <h3 className='text-3xl text-center text-[#E5DBCC]'>Mars Quizzes</h3>
                        <Link to='/'>
                            <h3 className='xs:hidden md:block text-[#E5DBCC] text-xl font-light -translate-x-12'>Mars Marvel</h3>
                        </Link>

                    </div>
                    <img src="./divider.svg" className='xs:hidden md:block opacity-50 translate-x-10 pb-5' alt="" />
                    <div className='w-full'>
                        <div className='max-w-[1240px] mx-auto xs:px-0 md:px-2'>
                            <div className='container xs:place-content-center xs:place-items-center justify-items-center'>
                                <div className='grid sm:grid-cols-12 md:grid-cols-2 lg:grid-cols-4 xs:place-content-center xs:place-items-center  justify-items-center xs:gap-5 md:gap-10 mt-7 text-2xl mb-3 xs:ml-10 md:ml-0 xs:-mr-10 md:-mr-0'>
                                    {
                                        displayQuiz?.map((eachQuiz, id) => <MarsQuiz className='xs:ml-10 md:ml-0 xs:-mr-10 md:-mr-0 md:my-5' key={eachQuiz.id} eachQuiz={eachQuiz}></MarsQuiz>)
                                    }
                                </div>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    );
};

export default MarsQuizzes;
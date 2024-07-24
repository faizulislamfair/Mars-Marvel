import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import MarsQuizDetailsQuestions from '../MarsQuizDetailsQuestions/MarsQuizDetailsQuestions';
import './MarsQuizDetails.css';


const MarsQuizzesDetails = () => {

    const quiz = useLoaderData();
    const questions = quiz.questions;



    return (
        <div>
            <div className='w-full grid grid-cols-1 place-items-center'>
                <div className='max-w-[1240px] mx-auto grid grid-cols-1 place-items-center'>
                    <div>
                        <div className='flex flex-row justify-between p-5'>
                            <Link to='/mars_quizzes'>
                                <img className='xs:hidden md:block translate-x-5' src="/arrow_left.svg" alt="" />
                            </Link>
                            <h1 className='m-5 text-3xl'>Quiz on {quiz.name}</h1>
                            <Link to='/'>
                                <h3 className='xs:hidden md:block xs:text-center text-[#E5DBCC] text-xl font-light md:-translate-x-12'>Mars Marvel</h3>
                            </Link>
                        </div>
                        <img src="/divider.svg" className='xs:hidden md:block opacity-50 pb-8' alt="" />


                        {
                            questions.map(questionName => <MarsQuizDetailsQuestions
                                className="grid grid-cols-1 place-items-center"
                                key={questionName.id}
                                questionName={questionName}
                            ></MarsQuizDetailsQuestions>)
                        }
                    </div>
                </div>
            </div>

        </div>

    );
};

export default MarsQuizzesDetails;
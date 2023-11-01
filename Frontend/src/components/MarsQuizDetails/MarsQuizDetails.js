import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import MarsQuizDetailsQuestions from '../MarsQuizDetailsQuestions/MarsQuizDetailsQuestions';
import './MarsQuizDetails.css';


const MarsQuizzesDetails = () => {

    const quiz = useLoaderData();
    const questions = quiz.questions;



    return (
        <div>
            <div className='w-full'>
                <div className='max-w-[1240px] mx-auto md:px-2'>
                    <div className='flex flex-row justify-between p-5'>
                        <Link to='/mars_quizzes'>
                            <img className='xs:hidden md:block translate-x-5' src="/arrow_left.svg" alt="" />
                        </Link>
                        <h1 className='m-5 text-3xl'>Quiz on {quiz.name}</h1>
                        <Link to='/'>
                            <h3 className='xs:hidden md:block xs:text-center text-[#E5DBCC] text-xl font-light md:-translate-x-12'>Mars Marvel</h3>
                        </Link>
                    </div>
                    <img src="/divider.svg" className='xs:hidden md:block opacity-50 translate-x-10 pb-8' alt="" />


                    {
                        questions.map(questionName => <MarsQuizDetailsQuestions
                            className='xs:translate-x-8 md:translate-x-0'
                            key={questionName.id}
                            questionName={questionName}
                        ></MarsQuizDetailsQuestions>)
                    }
                </div>
            </div>

        </div>

    );
};

export default MarsQuizzesDetails;
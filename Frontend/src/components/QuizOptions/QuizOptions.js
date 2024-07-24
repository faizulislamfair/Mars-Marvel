import React from 'react';
import './QuizOptions.css';


const QuizOptions = (props) => {
    const { option, iconPress, correctAnswer } = props;


    return (
        <div className='p-5 cursor-pointer hover:bg-[#0e0e0e]'>
            <div onClick={() => iconPress(props)} className='quizItems'>
                <p className='font-bold'>{option}</p>
            </div>
        </div>
    );
};

export default QuizOptions;
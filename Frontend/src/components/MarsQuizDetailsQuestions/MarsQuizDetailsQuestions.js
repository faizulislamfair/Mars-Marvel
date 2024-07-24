import React from 'react';
import './MarsQuizDetailsQuestions.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons'
import QuizOptions from './../QuizOptions/QuizOptions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const MarsQuizDetailsQuestions = ({ questionName }) => {

    const { options, id, question, correctAnswer } = questionName;

    const iconPress = (x) => {
        const a = x.option;
        const b = x.correctAnswer;

        if (a === b) {
            //console.log('right');
            const message = 'Congratulations, your answer is correct!';
            toast(message);
            console.log(message);
        } else {
            const message = 'Sorry, your answer is wrong!';
            toast(message);
            console.log(message);
        }

    }


    const answerDisplay = () => {
        console.log(correctAnswer);
        toast(correctAnswer);
    }


    return (
        <div className='w-full'>
            <div className='max-w-[1240px] grid grid-cols-1 place-items-center mx-auto px-2'>
                <div className='container carded'>

                    <div className='questionAndIcon text-center justify-center'>
                        <p className='text-center justify-center text-lg font-semibold'>Question {question}</p>
                        <FontAwesomeIcon onClick={() => answerDisplay(correctAnswer)} className='icon cursor-pointer' icon={faEye}></FontAwesomeIcon>
                    </div>

                    {
                        options.map(option => <QuizOptions
                            option={option}
                            iconPress={iconPress}
                            correctAnswer={correctAnswer}
                        ></QuizOptions>)
                    }

                    <ToastContainer
                        theme="dark"
                    ></ToastContainer>

                </div>

            </div>
        </div>

    );
};

export default MarsQuizDetailsQuestions;
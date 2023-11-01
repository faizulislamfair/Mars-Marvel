import React from 'react';
import { Link } from 'react-router-dom';
import './MarsQuiz.css';


const MarsQuiz = ({ eachQuiz }) => {


    const { _id, name } = eachQuiz;


    return (
        <div className='w-full'>
            <div className='max-w-[1240px] mx-auto px-2 mt-3 xs:place-content-center xs:place-items-center xs:justify-items-center xs:justify-content-center'>
                <Link to={`/mars_quiz/${_id}`}>
                    <button className='py-5 px-2 rounded-full bg-[#ECF7FF] text-[#2980B9] hover:bg-[#2980B9] hover:text-[#fff]'>
                        {name}
                    </button>
                </Link>
            </div>
        </div>

    );
};

export default MarsQuiz;
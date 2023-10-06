import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';



const SurveysFeedback = () => {

    const [feedback, setFeedback] = useState({});

    const notify = () => toast("Feedback Added Successfully!");

    const handleAddFeedback = event => {
        event.preventDefault();
        // console.log(feedback);


        fetch('https://mmarvel-backend.vercel.app/feedback', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(feedback)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    event.target.reset();
                }
            })
    }




    const handleInputBlur = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newFeedback = { ...feedback }
        newFeedback[field] = value;
        setFeedback(newFeedback);
    }


    const inlineStyles = {
        backgroundImage: 'linear-gradient(115deg, #D35400 3.28%, #2980B9 100%, rgba(41, 128, 185, 0.00) 96.99%)'
    };



    return (
        <div className='w-full'>
            <div className='max-w-[1240px] mx-auto px-2'>
                <div className='flex flex-row justify-between p-5 mb-2'>
                    <Link to='/research_on_mars/promote_research'>
                        <img className='translate-x-5' src="/arrow_left.svg" alt="" />
                    </Link>
                    <h3 className='text-3xl text-center text-[#E5DBCC] translate-x-12'>Your valuable feedback please!</h3>
                    <Link to='/'>
                        <h3 className='text-[#E5DBCC] text-xl font-light -translate-x-12'>Mars Marvel</h3>
                    </Link>
                </div>
                <img src="/divider.svg" className='opacity-50 translate-x-10 pb-10' alt="" />
                <form onSubmit={handleAddFeedback}>
                    <input className='text-[#000] font-bold p-10 m-5 text-xl rounded-xl' onBlur={handleInputBlur} type="text" name='name' placeholder='feedback' required />
                    <br />


                    <button style={inlineStyles} onClick={notify} className='text-xl bg-[#ff585d] p-3  rounded-xl hover:scale-105 ease-in duration-300' type="submit">Add Feedback</button>
                </form>
                <ToastContainer />
            </div>
        </div>
    );
};

export default SurveysFeedback;
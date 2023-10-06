import React from 'react';
import { Link } from 'react-router-dom';

const ChatVoiceBot = () => {
    return (
        <div className='w-full'>
            <div className='max-w-[1240px] mx-auto px-2 text-[#E5DBCC]'>
                <div className='flex flex-col px-12 m-5'>

                    <div className='flex flex-row justify-between p-5'>
                        <Link to='/'>
                            <img src="./arrow_left.svg" alt="" />
                        </Link>
                        <h3 className='text-3xl translate-x-12'>Chat & Voice Bot</h3>
                        <Link to='/'>
                            <h3 className='text-[#E5DBCC] text-xl font-light'>Mars Marvel</h3>
                        </Link>
                    </div>


                    <img src="./divider.svg" className='pb-12 mb-7 opacity-50' alt="" />


                    <div className='flex flex-row'>
                        <p className='text-2xl mt-20 p-10'>You can start by saying "hello" <br></br> or "hey yeah"!</p>
                        <iframe width="800" height="600" allow="microphone;" src="https://console.dialogflow.com/api-client/demo/embedded/a76036ec-d59a-46ba-aa52-58a2abfbe5e2"></iframe>
                        <p className='text-2xl  mt-20 p-10'>Press on "Microphone logo"<br></br> for Voice Bot Options</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatVoiceBot;
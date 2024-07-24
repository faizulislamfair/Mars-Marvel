import React from 'react';
import { Link } from 'react-router-dom';

const ChatVoiceBot = () => {
    return (
        <div className='w-full grid grid-cols-1 place-items-center'>
            <div className='max-w-[1240px] mx-auto grid grid-cols-1 place-items-center px-2 text-[#E5DBCC]'>
                <div className='px-12 m-5'>

                    <div className='flex flex-row justify-between p-5'>
                        <Link to='/'>
                            <img src="./arrow_left.svg" className='xs:hidden md:block' alt="" />
                        </Link>
                        <h3 className='text-3xl'>Chat & Voice Bot</h3>
                        <Link to='/' className='xs:hidden md:block'>
                            <h3 className='text-[#E5DBCC] text-xl font-light'>Mars Marvel</h3>
                        </Link>
                    </div>


                    <img src="./divider.svg" className='xs:hidden md:block md:pb-12 md:mb-7 md:opacity-50' alt="" />


                    <div className='container mx-auto flex flex-row'>
                        <p className='xs:hidden md:block text-2xl mt-20 p-10'>You can start by saying "hello" <br></br> or "hey"!</p>
                        <iframe width="800" height="600" allow="microphone;" src="https://console.dialogflow.com/api-client/demo/embedded/a76036ec-d59a-46ba-aa52-58a2abfbe5e2"></iframe>
                        <p className='xs:hidden md:block text-2xl mt-20 p-10'>Press on "Microphone logo"<br></br> for Voice Bot Options</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatVoiceBot;
import React from 'react';
import { Link } from 'react-router-dom';
import './DocumentOnMars.css';


const DocumentOnMars = ({ eachDoc }) => {

    const { _id, name, image } = eachDoc;

    const inlineStyles = {
        backgroundImage: 'linear-gradient(115deg, #D35400 3.28%, #2980B9 100%, rgba(41, 128, 185, 0.00) 96.99%)'
    };




    return (
        <div>
            <Link to={`/document_on_mars/${_id}`}>
                <div className='rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='py-10'>
                        <div className='rounded-xl overflow-hidden shadow-lg max-w-sm bg-[#fff] pb-3'>
                            <img src={image} alt="" />
                            <div className='px-6 py-4'>
                                <div className='font-bold text-xl mb-2'>Mastering Space and Time</div>
                                <p className='text-[#767676]'>
                                    How should the futuristic ways of transportation be? What are the ways of shortening the time of traveling? How to utilize all the space around us in the most optimum ways?
                                </p>
                            </div>
                            <button style={inlineStyles} className=' bg-[#ff585d] p-3 rounded-xl hover:scale-105 ease-in duration-300'>
                                {name}
                            </button>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default DocumentOnMars;
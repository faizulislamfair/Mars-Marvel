import React from 'react';
import MarsTrekMap from './../MarsTrekMap/MarsTrekMap';
import { Link } from 'react-router-dom';


const MarsTrekWMTS = () => {
    return (
        <div className='w-full'>
            <div className='max-w-[1240px] mx-auto px-2'>
                <div className='flex flex-row justify-between p-5 mb-2'>
                    <Link to='/'>
                        <img className='translate-x-2' src="./arrow_left.svg" alt="" />
                    </Link>
                    <h3 className='text-3xl text-center text-[#E5DBCC]'>Mars Trek Map</h3>
                    <Link to='/'>
                        <h3 className='text-[#E5DBCC] text-xl font-light -translate-x-12'>Mars Marvel</h3>
                    </Link>

                </div>
                <img src="./divider.svg" className='pb-5 mb-7 opacity-50 translate-x-10' alt="" />
                <div className='container justify-items-center'></div>
                <MarsTrekMap />
            </div>
        </div>
    );
};

export default MarsTrekWMTS;
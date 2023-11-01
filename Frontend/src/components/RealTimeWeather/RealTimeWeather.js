import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './RealTimeWeather.css';

const RealTimeWeather = () => {


    const [weatherData, setWeatherData] = useState({});
    const [loading, setLoading] = useState(true);
    const [earthDate, setEarthDate] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    "https://api.nasa.gov/insight_weather/?api_key=aAwe42dM4pfZoZkj3g3QkiJSa1tWP9ysNe2aZitr&feedtype=json&ver=1.0"
                );

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                setWeatherData(data);
                setLoading(false);

                const currentDate = new Date();

                const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                const monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

                const dayName = daysOfWeek[currentDate.getUTCDay()];
                const monthName = monthsOfYear[currentDate.getUTCMonth()];
                const year = currentDate.getUTCFullYear();

                const formattedEarthDate = `Earth day: ${dayName}, ${monthName} ${currentDate.getUTCDate()}, ${year}`;

                setEarthDate(formattedEarthDate);
            } catch (error) {
                console.error('Error fetching APOD data:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div className='pt-5'>Data Loading...</div>;
    }

    // if (!sol) {
    //     return <div>Error fetching data. Please try again later.</div>;
    // }

    console.log(weatherData);




    return (
        <div className='w-full'>
            <div className='max-w-[1240px] mx-auto px-2'>
                <div className='real_time text-[#000] font-black container'>
                    <div className='flex flex-col px-12 m-5'>

                        <div className='flex flex-row justify-between p-5 mb-5'>
                            <Link to='/'>
                                <img src="./arrow_left.svg" className='xs:hidden md:block' alt="" />
                            </Link>
                            <h3 className='text-3xl md:text-center text-[#E5DBCC] xs:min-w-[200px]'>Real-Time Weather Updates</h3>
                            <Link to='/'>
                                <h3 className='xs:hidden md:block text-[#E5DBCC] text-xl font-light'>Mars Marvel</h3>
                            </Link>

                        </div>
                        <img src="./divider.svg" className='xs:hidden md:block pb-12 mb-7 opacity-50' alt="" />

                        {/* 
            <h2 className='text-3xl text-center pt-20'>
                Latest Weather at Elysium Planitia
            </h2>

            <p className='text-xl text-justify p-10 pb-12'>
                NASA’s InSight Mars lander takes continuous weather measurements (temperature, wind, pressure) on the surface of Mars at Elysium Planitia, a flat, smooth
                plain near Mars’ equator.
            </p>





            <div className='flex flex-row justify-around'>
                <p className='text-3xl'>Martian day number: &nbsp;Sol {weatherData?.validity_checks?.sols_checked}</p>

                <p className='text-3xl'>{earthDate}</p>

            </div> */}


                        {/* 
            <div className='text-[#000] text-center text-2xl p-10 pb-14 font-black flex flex-row'>
                <p className='p-12'>Day Keys (sol_keys): {weatherData?.sol_keys}</p> <br />
                <p className='p-12'>Temperature: {weatherData?.validity_checks['1219']?.AT?.sol_hours_with_data?.map(x => <p>{x}</p>)}</p> <br />
                <p className='p-12'>Wind Speed: {weatherData?.validity_checks['1219']?.HWS?.sol_hours_with_data?.map(x => <p>{x}</p>)}</p> <br />
                <p className='p-12'>Pressure: {weatherData?.validity_checks['1219']?.PRE?.sol_hours_with_data?.map(x => <p>{x}</p>)}</p> <br />
                <p className='p-12'>Wind Direction: {weatherData?.validity_checks['1219']?.WD?.sol_hours_with_data?.map(x => <p>{x}</p>)}</p> <br />

            </div> */}

                        <div className='xs:block md:hidden py-2'>
                            <p className='text-[#E5DBCC] text-2xl min-w-[300px]'>Please, keep scrolling right for sequential info!</p>
                        </div>


                        <div className='xs:-translate-x-0 md:-translate-x-24'>
                            <iframe src='https://mars.nasa.gov/layout/embed/image/mslweather/' className='xs:-translate-x-0 md:-translate-x-14' width='1380' height='673' scrolling='no' frameborder='0'></iframe>
                        </div>





                    </div>
                </div>
            </div>
        </div>
    );
};

export default RealTimeWeather;
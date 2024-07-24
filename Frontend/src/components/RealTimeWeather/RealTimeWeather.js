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


    console.log(weatherData);




    return (
        <div className='w-full'>
            <div className='grid grid-cols-1 place-items-center max-w-[1240px] mx-auto px-2'>


                <div className='grid grid-cols-1 real_time text-[#000] font-black container mx-auto'>
                    <div className='grid grid-cols-1 px-12 m-5'>

                        <div className='xs:grid xs:grid-cols-1 xs:place-items-center md:flex md:flex-row md:justify-between p-5 mb-5'>
                            <Link to='/'>
                                <img src="./arrow_left.svg" className='xs:hidden md:block' alt="" />
                            </Link>
                            <h3 className='text-3xl md:text-center text-[#E5DBCC] xs:min-w-[200px]'>Real-Time Weather Updates</h3>
                            <Link to='/'>
                                <h3 className='xs:hidden md:block text-[#E5DBCC] text-xl font-light'>Mars Marvel</h3>
                            </Link>
                        </div>


                        <img src="./divider.svg" className='xs:hidden md:block pb-12 mb-7 opacity-50' alt="" />

                        <div className='grid grid-cols-1 place-items-center'>
                            <div className="grid grid-cols-1 bg-cover bg-no-repeat place-items-center md:bg-[url('/public/rover.png')] text-center xs:bg-none max-h-[1000px] md:w-[600px] lg:w-[1000px] p-10">

                                <div className='xs:text-[#E5DBCC] md:text-[#000]'>
                                    <div className='font-extrabold min-w-[280px] text-3xl'>
                                        Latest Weather <br />
                                        at Gale Crater
                                    </div>

                                    <div className='font-semibold min-w-[280px] text-md py-5'>
                                        Curiosity is taking daily weather measurements at Gale Crater in the southern hemisphere <br />
                                        of Mars, near the equator. At this location, it's currently early summer.
                                    </div>

                                </div>

                                <div className='xs:text-[#E5DBCC] md:text-[#000] flex justify-center min-w-[280px] xs:flex-col md:flex-row font-bold gap-10 text-3xl'>
                                    <div className='flex flex-col'>
                                        <h5>Sol 4226</h5>
                                        <h5>June 26, 2024</h5>
                                    </div>

                                    <div className='flex flex-col'>
                                        <h5>High:23° F/C</h5>
                                        <h5>Low:-141° F/C</h5>
                                    </div>
                                </div>

                                <div className='text-[#fff] flex xs:flex-col md:flex-row font-light text-xl gap-10 pt-12'>

                                    <div className='xs:hidden lg:block flex flex-col bg-zinc-800/90 w-40 rounded'>
                                        <h5 className=''>Sol 4222</h5>
                                        <h5 className=''>June 22</h5>
                                        <img className='py-2 opacity-70' src="./rectangle_11.svg" alt="" />
                                        <h5 className=''>High: 32°F</h5>
                                        <h5 className=''>Low: -141°F</h5>
                                    </div>

                                    <div className='xs:hidden lg:block flex flex-col bg-zinc-800/90 w-40 rounded'>
                                        <h5 className=''>Sol 4223</h5>
                                        <h5 className=''>June 23</h5>
                                        <img className='py-2 opacity-70' src="./rectangle_11.svg" alt="" />
                                        <h5 className=''>High: 32°F</h5>
                                        <h5 className=''>Low: -94°F</h5>
                                    </div>

                                    <div className='flex flex-col bg-zinc-800/90 w-40 rounded'>
                                        <h5>Sol 4224</h5>
                                        <h5>June 24</h5>
                                        <img className='py-2 opacity-70' src="./rectangle_11.svg" alt="" />
                                        <h5>High: 19°F</h5>
                                        <h5>Low: -103°F</h5>
                                    </div>

                                    <div className='flex flex-col bg-zinc-800/90 w-40 rounded'>
                                        <h5>Sol 4225</h5>
                                        <h5>June 25</h5>
                                        <img className='py-2 opacity-70' src="./rectangle_11.svg" alt="" />
                                        <h5>High: 25°F</h5>
                                        <h5>Low: -99°F</h5>
                                    </div>

                                    <div className='flex flex-col bg-zinc-800/90 w-40 rounded'>
                                        <h5>Sol 4226</h5>
                                        <h5>June 26</h5>
                                        <img className='py-2 opacity-70' src="./rectangle_11.svg" alt="" />
                                        <h5>High: 23°F</h5>
                                        <h5>Low: -141°F</h5>
                                    </div>
                                </div>

                            </div>
                        </div>


                        <br />

                    </div>
                </div>
            </div>
        </div >
    );
};

export default RealTimeWeather;
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ImagesPerEarthDate = () => {
    const [earthDate, setEarthDate] = useState('2015-06-03');
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // NASA API URL
        const apiUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${earthDate}&api_key=B2xWu4dVY9rTfi8aDaPE3Jl9XLYjEbfdo3hGmrxP`;

        // Fetch data from the NASA API
        fetch(apiUrl)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                // Set the retrieved photos in the state
                if (data.photos.length === 0) {
                    setPhotos([]);
                    setError('No Images Found');
                } else {
                    setPhotos(data.photos);
                }
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, [earthDate]); // Re-run effect when earthDate changes

    const handleDateChange = (e) => {
        setEarthDate(e.target.value);
    };

    const incrementDate = () => {
        // Parse the current Earth date and increment by one day
        const currentDate = new Date(earthDate);
        currentDate.setDate(currentDate.getDate() + 1);
        const newDate = currentDate.toISOString().split('T')[0];
        setEarthDate(newDate);
    };

    const decrementDate = () => {
        // Parse the current Earth date and decrement by one day
        const currentDate = new Date(earthDate);
        currentDate.setDate(currentDate.getDate() - 1);
        const newDate = currentDate.toISOString().split('T')[0];
        setEarthDate(newDate);
    };

    if (loading) {
        return <div>Loading...</div>;
    }


    if (error) {
        return <div>Error: {error.message}</div>;
    }


    return (
        <div className='w-full'>
            <div className='max-w-[1240px] mx-auto px-2'>
                <div className='flex flex-row justify-between p-5 mb-2'>
                    <Link to='/rover_mission_images'>
                        <img className='xs:hidden md:block translate-x-5' src="/arrow_left.svg" alt="" />
                    </Link>
                    <h3 className='text-3xl text-center text-[#E5DBCC] md:translate-x-7'>Earth Date</h3>
                    <Link to='/'>
                        <h3 className='xs:hidden md:block text-[#E5DBCC] text-xl font-light -translate-x-12'>Mars Marvel</h3>
                    </Link>

                </div>
                <img src="/divider.svg" className='xs:hidden md:block opacity-50 translate-x-10' alt="" />
                <div className='mt-5 text-3xl flex flex-col items-center pt-7'>
                    <p>Watch Breathtaking images from Mars Rovers</p> <br />
                    <p>Enter Earth Date as per your desire:</p> <br />            <div>
                        <div className="custom-input flex flex-row gap-2">

                            <input
                                type="text"
                                id="earthDate"
                                value={earthDate}
                                onChange={handleDateChange}
                                className='text-[#000] font-black text-center p-2'
                            />
                            <div className='flex flex-col'>
                                <button className="increment-button" onClick={incrementDate}>
                                    ^
                                </button>
                                <button className="decrement-button rotate-180" onClick={decrementDate}>
                                    ^
                                </button>
                            </div>
                        </div>
                    </div>
                    <h2 className='text-3xl py-12'>Photos from {earthDate}</h2>

                    <div className='grid xs:grid-cols-12 md:grid-cols-3 gap-3'>
                        {photos.map((photo) => (
                            <p className='xs:p-2 md:p-10' key={photo.id}>
                                <img src={photo.img_src} alt={photo.camera.full_name} />
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImagesPerEarthDate;
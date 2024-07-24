import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const ImagesPerCameraMast = () => {
    const [sol, setSol] = useState(1000);
    const [camera, setCamera] = useState('mast');
    const [photos, setPhotos] = useState([]);
    const [error, setError] = useState(null);
    const [apiKey] = useState('B2xWu4dVY9rTfi8aDaPE3Jl9XLYjEbfdo3hGmrxP');
    useEffect(() => {
        const fetchMarsPhotos = async () => {
            try {
                const response = await fetch(
                    `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${sol}&camera=${camera}&api_key=${apiKey}`
                );

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();

                if (!data.photos || data.photos.length === 0) {
                    throw new Error('No photos available for the specified parameters.');
                }

                setPhotos(data.photos);
                setError(null);
            } catch (error) {
                setError(error.message || 'An error occurred while fetching data.');
                setPhotos([]);
            }
        };

        fetchMarsPhotos();
    }, [sol, camera, apiKey]);

    // const handleSolChange = (event) => {
    //     // Update the sol value when the input changes
    //     setSol(event.target.value);
    // };


    return (
        <div className='w-full'>
            <div className='max-w-[1240px] mx-auto px-2'>
                <div className='flex flex-row justify-between p-5 mb-2'>
                    <Link to='/rover_mission_images/camera'>
                        <img className='xs:hidden md:block translate-x-5' src="/arrow_left.svg" alt="" />
                    </Link>
                    <h3 className='text-3xl text-center text-[#E5DBCC] md:translate-x-7'>Mast</h3>
                    <Link to='/'>
                        <h3 className='xs:hidden md:block text-[#E5DBCC] text-xl font-light -translate-x-12'>Mars Marvel</h3>
                    </Link>

                </div>
                <img src="/divider.svg" className='xs:hidden md:block opacity-50 translate-x-10' alt="" />
                <div className='mt-5 text-3xl flex flex-col items-center pt-7'>
                    <h1 className='mb-5'>Mars Camera Photos: Mast</h1>
                    {/* <div>
                <label htmlFor="solInput">Enter Sol (Mars Day):</label>
                <input
                    type="number"
                    id="solInput"
                    value={sol}
                    onChange={handleSolChange}
                />
            </div> */}

                    {error ? (
                        <div className="text-red-600">{error}</div>
                    ) : (
                        <div className='grid xs:grid-cols-12 md:grid-cols-3 gap-3'>
                            {photos.map((photo) => (
                                <p className='xs:p-2 md:p-10' key={photo.id}>
                                    <img src={photo.img_src} alt={`Rover - Sol ${sol}`} />
                                    <p>{photo.camera.full_name}</p>
                                </p>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ImagesPerCameraMast;

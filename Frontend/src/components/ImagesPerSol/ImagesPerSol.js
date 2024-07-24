import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const ImagesPerSol = () => {

    const [sol, setSol] = useState(2500);
    const [loading, setLoading] = useState(true);
    const [photos, setPhotos] = useState([]);
    const [apiKey] = useState('B2xWu4dVY9rTfi8aDaPE3Jl9XLYjEbfdo3hGmrxP');


    useEffect(() => {
        const fetchMarsPhotos = async () => {
            try {
                const response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${sol}&api_key=${apiKey}`);

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                setPhotos(data.photos);
                setLoading(false);

            } catch (error) {
                setPhotos([]);
                setLoading(false);
            }
        };

        fetchMarsPhotos();
    }, [sol, apiKey]);

    if (loading) {
        return <div className='pt-5'>Data Loading...</div>;
    }

    const handleSolChange = (event) => {
        setSol(event.target.value);
    };



    return (
        <div className='w-full'>
            <div className='max-w-[1240px] mx-auto px-2'>
                <div className='flex flex-row justify-between p-5 mb-2'>
                    <Link to='/rover_mission_images'>
                        <img className='xs:hidden md:block translate-x-5' src="/arrow_left.svg" alt="" />
                    </Link>
                    <h3 className='text-3xl text-center text-[#E5DBCC] md:translate-x-7'>Sol</h3>
                    <Link to='/'>
                        <h3 className='xs:hidden md:block text-[#E5DBCC] text-xl font-light -translate-x-12'>Mars Marvel</h3>
                    </Link>

                </div>
                <img src="/divider.svg" className='xs:hidden md:block opacity-50 translate-x-10' alt="" />

                <div className='mt-5 text-3xl flex flex-col items-center pt-7'>
                    <p>Watch Breathtaking images from Mars Rovers</p> <br />
                    <p>Enter Martian Day Number (Sol) as per your desire:</p> <br />
                    <input
                        type="number"
                        id="solInput"
                        value={sol}
                        onChange={handleSolChange}
                        className='text-[#000] font-black text-center p-2'
                    />
                    <div>
                        <br />
                        <h2 className='text-3xl pt-5'>Photos from {sol} Sol</h2>
                        <br />
                        <div className='grid xs:grid-cols-12 md:grid-cols-3 gap-3'>
                            {photos.map((photo) => (
                                <p className='xs:p-2 md:p-10' key={photo.id}>
                                    <img src={photo.img_src} alt={`Rover - Sol ${sol}`} />
                                    <p>{photo.camera.full_name}</p>
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImagesPerSol;
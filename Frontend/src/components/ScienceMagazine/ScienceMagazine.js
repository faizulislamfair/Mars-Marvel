import React from 'react';
import { Link } from 'react-router-dom';

const ScienceMagazine = () => {
    return (
        <div className='w-full grid grid-cols-1 place-items-center'>
            <div className='max-w-[1240px] grid grid-cols-1 place-items-center mx-auto px-2'>
                <div className='m-10'>
                    <div className='flex flex-row justify-between p-5 mb-2'>
                        <Link to='/research_on_mars'>
                            <img className='xs:hidden md:block translate-x-5' src="/arrow_left.svg" alt="" />
                        </Link>
                        <h3 className='text-3xl text-center text-[#E5DBCC] md:translate-x-10'>Science Magazine Issues</h3>
                        <Link to='/'>
                            <h3 className='xs:hidden md:block text-[#E5DBCC] text-xl font-light'>Mars Marvel</h3>
                        </Link>
                    </div>
                    <img src="/divider.svg" className='xs:hidden md:block opacity-50 translate-x-10' alt="" />

                    <div className='grid grid-cols-1 place-items-center'>
                        <p className='text-2xl pb-5 pt-10'>Magazine Credits: Mars Science Laboratory Science Team Papers
                        </p>

                        <div className='w-full grid grid-cols-1 place-items-center'>
                            <div className='max-w-[1240px] grid grid-cols-1 place-items-center mx-auto px-2'>
                                <div className='container grid grid-cols-1 place-items-center'>
                                    <div className='grid xs:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 mt-12 text-2xl'>
                                        <div className='bg-[#7F8C8D] rounded-lg p-2'>
                                            <h2 className='text-[#000]'>From January 31, 2019,</h2>
                                            <div className='text-[#fff] bg-[#000] m-2 p-2 rounded-lg text-left'>
                                                <a href="https://www.science.org/doi/full/10.1126/science.aat0738?ijkey=xakdRhWj7CWEE&siteid=sci&keytype=ref" target="_blank" rel="noopener noreferrer">
                                                    <p className='bg-[#0E0E0E] text-[#E5DBCC] p-2 m-2 rounded-lg hover:scale-105 ease-in duration-300'>A surface gravity traverse on Mars indicates low bedrock density at Gale Crater</p>
                                                </a>
                                            </div>
                                        </div>
                                        <div className='bg-[#7F8C8D] rounded-lg p-2'>
                                            <h2 className='text-[#000]'>From June 28, 2017,</h2>
                                            <div className='text-[#fff] bg-[#000] m-2 p-2 rounded-lg text-left'>
                                                <a href="https://www.science.org/doi/10.1126/scirobotics.aan4582?ijkey=P5QFCDUgMW0uQ&keytype=ref&siteid=robotics" target="_blank" rel="noopener noreferrer">
                                                    <p className='bg-[#0E0E0E] text-[#E5DBCC] p-2 m-2 rounded-lg hover:scale-105 ease-in duration-300'>AEGIS autonomous targeting for ChemCam on Mars Science Laboratory: Deployment and results of initial science team use</p>
                                                </a>
                                            </div>
                                        </div>
                                        <div className='bg-[#7F8C8D] rounded-lg p-2'>
                                            <h2 className='text-[#000]'>From June 2, 2017,</h2>
                                            <div className='text-[#fff] bg-[#000] m-2 p-2 rounded-lg text-left'>
                                                <a href="https://www.science.org/doi/10.1126/science.aah6849?ijkey=65ocQ1IJAVIJ.&keytype=ref&siteid=sci" target="_blank" rel="noopener noreferrer">
                                                    <p className='bg-[#0E0E0E] text-[#E5DBCC] p-2 m-2 rounded-lg hover:scale-105 ease-in duration-300'>Redox stratification of an ancient lake in Gale crater, Mars</p>
                                                </a>
                                            </div>
                                        </div>
                                        <div className='bg-[#7F8C8D] rounded-lg p-2'>
                                            <h2 className='text-[#000]'>From Oct. 9, 2015,</h2>
                                            <div className='text-[#fff] bg-[#000] m-2 p-2 rounded-lg text-left'>
                                                <a href="https://www.science.org/doi/10.1126/science.aah6849?ijkey=65ocQ1IJAVIJ.&keytype=ref&siteid=sci" target="_blank" rel="noopener noreferrer">
                                                    <p className='bg-[#0E0E0E] text-[#E5DBCC] p-2 m-2 rounded-lg hover:scale-105 ease-in duration-300'>Redox stratification of an ancient lake in Gale crater, Mars</p>
                                                </a>
                                            </div>
                                        </div>
                                        <div className='bg-[#7F8C8D] rounded-lg p-2 max-h-[450px]'>
                                            <h2 className='text-[#000]'>From Jan. 23, 2015,</h2>
                                            <div className='text-[#fff] bg-[#000] m-2 p-2 rounded-lg text-left'>
                                                <a href="https://www.science.org/doi/10.1126/science.1261713?ijkey=wh80Qt3dcQZKw&keytype=ref&siteid=sci" target="_blank" rel="noopener noreferrer">
                                                    <p className='bg-[#0E0E0E] text-[#E5DBCC] p-2 m-2 rounded-lg hover:scale-105 ease-in duration-300'>Mars Methane Detection and Variability at Gale Crater</p>
                                                </a>
                                                <a href="https://www.science.org/doi/10.1126/science.1260291?ijkey=rJnJhjOGsS5S.&keytype=ref&siteid=sci" target="_blank" rel="noopener noreferrer">
                                                    <p className='bg-[#0E0E0E] text-[#E5DBCC] p-2 m-2 rounded-lg hover:scale-105 ease-in duration-300'>The Imprint of Atmospheric Evolution in the D/H or Hesperian Clay Minerals on Mars</p>
                                                </a>
                                                <a href="https://video.ibm.com/recorded/56542725" target="_blank" rel="noopener noreferrer">
                                                    <p className='bg-[#0E0E0E] text-[#E5DBCC] p-2 m-2 rounded-lg hover:scale-105 ease-in duration-300'><b>Dec. 16, 2014 Press Conference:</b> Recent Findings from NASA's Curiosity Rover about Modern and Ancient Mars: Organics & Methane on Mars</p>
                                                </a>
                                            </div>
                                        </div>
                                        <div className='bg-[#7F8C8D] rounded-lg p-2'>
                                            <h2 className='text-[#000]'>From Jan. 24, 2014,</h2>
                                            <div className='text-[#fff] bg-[#000] m-2 p-2 rounded-lg text-left'>
                                                <a href="https://www.science.org/doi/10.1126/science.1249944" target="_blank" rel="noopener noreferrer">
                                                    <p className='bg-[#0E0E0E] text-[#E5DBCC] p-2 m-2 rounded-lg hover:scale-105 ease-in duration-300'>Habitability, Taphonomy, and the Search for Organic Carbon on Mars</p>
                                                </a>
                                                <a href="https://www.science.org/doi/10.1126/science.1260291" target="_blank" rel="noopener noreferrer">
                                                    <p className='bg-[#0E0E0E] text-[#E5DBCC] p-2 m-2 rounded-lg hover:scale-105 ease-in duration-300'>The Imprint of Atmospheric Evolution in the D/H or Hesperian Clay Minerals on Mars</p>
                                                </a>
                                                <a href="https://www.science.org/doi/10.1126/science.1244797?ijkey=O0XhFmLAOd8IY&keytype=ref&siteid=sci" target="_blank" rel="noopener noreferrer">
                                                    <p className='bg-[#0E0E0E] text-[#E5DBCC] p-2 m-2 rounded-lg hover:scale-105 ease-in duration-300'>Mars' Surface Radiation Environment Measured with the Mars Science Laboratory's Curiosity Rover</p>
                                                </a>
                                                <a href="https://www.science.org/doi/10.1126/science.1244734?ijkey=4XVH3UcP7XB6s&keytype=ref&siteid=sci" target="_blank" rel="noopener noreferrer">
                                                    <p className='bg-[#0E0E0E] text-[#E5DBCC] p-2 m-2 rounded-lg hover:scale-105 ease-in duration-300'>Elemental Geochemistry of Sedimentary Rocks at Yellowknife Bay, Gale Crater, Mars</p>
                                                </a>
                                                <a href="https://www.science.org/doi/10.1126/science.1247166?ijkey=jPJHOZQYLZtHM&keytype=ref&siteid=sci" target="_blank" rel="noopener noreferrer">
                                                    <p className='bg-[#0E0E0E] text-[#E5DBCC] p-2 m-2 rounded-lg hover:scale-105 ease-in duration-300'>In Situ Radiometric and Exposure Age Dating of the Martian Surface</p>
                                                </a>
                                                <a href="https://www.science.org/doi/10.1126/science.1242777?ijkey=xLmOh3YoFcu3Q&keytype=ref&siteid=sci" target="_blank" rel="noopener noreferrer">
                                                    <p className='bg-[#0E0E0E] text-[#E5DBCC] p-2 m-2 rounded-lg hover:scale-105 ease-in duration-300'>A Habitable Fluvio-Lacustrine Environment at Yellowknife Bay, Gale Crater, Mars</p>
                                                </a>
                                                <a href="https://www.science.org/doi/10.1126/science.1243480?ijkey=faEBOcw4g07d2&keytype=ref&siteid=sci" target="_blank" rel="noopener noreferrer">
                                                    <p className='bg-[#0E0E0E] text-[#E5DBCC] p-2 m-2 rounded-lg hover:scale-105 ease-in duration-300'> Mineralogy of a Mudstone at Yellowknife Bay, Gale Crater, Mars</p>
                                                </a>
                                                <a href="https://www.science.org/doi/10.1126/science.1248097?ijkey=hOpxi9Y.E3yfY&keytype=ref&siteid=sci" target="_blank" rel="noopener noreferrer">
                                                    <p className='bg-[#0E0E0E] text-[#E5DBCC] p-2 m-2 rounded-lg hover:scale-105 ease-in duration-300'>Ancient Aqueous Environments at Endeavour Crater</p>
                                                </a>
                                            </div>
                                        </div>
                                        <div className='bg-[#7F8C8D] rounded-lg p-2'>
                                            <h2 className='text-[#000]'>From Sept. 27, 2013,</h2>
                                            <div className='text-[#fff] bg-[#000] m-2 p-2 rounded-lg text-left'>
                                                <a href="https://www.science.org/doi/10.1126/science.1244258?ijkey=zmigLCW740i4k&keytype=ref&siteid=sci" target="_blank" rel="noopener noreferrer">
                                                    <p className='bg-[#0E0E0E] text-[#E5DBCC] p-2 m-2 rounded-lg hover:scale-105 ease-in duration-300'>Analysis of Surface Materials by the Curiosity Mars Rover</p>
                                                </a>
                                                <a href="https://www.science.org/doi/10.1126/science.1238670?ijkey=Z0a6dRM1r1Vrw&keytype=ref&siteid=sci" target="_blank" rel="noopener noreferrer">
                                                    <p className='bg-[#0E0E0E] text-[#E5DBCC] p-2 m-2 rounded-lg hover:scale-105 ease-in duration-300'>Soil Diversity and Hydration as Observed by ChemCam at Gale Crater, Mars</p>
                                                </a>
                                                <a href="https://www.science.org/doi/10.1126/science.1238932?ijkey=x1kDKH86wM5G2&keytype=ref&siteid=sci" target="_blank" rel="noopener noreferrer">
                                                    <p className='bg-[#0E0E0E] text-[#E5DBCC] p-2 m-2 rounded-lg hover:scale-105 ease-in duration-300'>X-ray Diffraction Results from Mars Science Laboratory: Mineralogy of Rocknest at Gale Crater</p>
                                                </a>
                                                <a href="https://www.science.org/doi/10.1126/science.1238937?ijkey=.0FDNq4IE1IhI&keytype=ref&siteid=sci" target="_blank" rel="noopener noreferrer">
                                                    <p className='bg-[#0E0E0E] text-[#E5DBCC] p-2 m-2 rounded-lg hover:scale-105 ease-in duration-300'>Volatile, Isotope, and Organic Analysis of Martian Fines with the Mars Curiosity Rover</p>
                                                </a>
                                                <a href="https://www.science.org/doi/10.1126/science.1239463?ijkey=fuWPmSKyw00ok&keytype=ref&siteid=sci" target="_blank" rel="noopener noreferrer">
                                                    <p className='bg-[#0E0E0E] text-[#E5DBCC] p-2 m-2 rounded-lg hover:scale-105 ease-in duration-300'>The Petrochemistry of Jake_M: A Martian Mugearite</p>
                                                </a>
                                                <a href="https://www.science.org/doi/10.1126/science.1239505?ijkey=ptvaghS1su%2F%2FI&keytype=ref&siteid=sci" target="_blank" rel="noopener noreferrer">
                                                    <p className='bg-[#0E0E0E] text-[#E5DBCC] p-2 m-2 rounded-lg hover:scale-105 ease-in duration-300'>Curiosity at Gale Crater, Mars: Characterization and Analysis of the Rocknest Sand Shadow</p>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ScienceMagazine;
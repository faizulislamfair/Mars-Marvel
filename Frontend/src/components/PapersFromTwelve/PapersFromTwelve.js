import React from 'react';
import { Link } from 'react-router-dom';

const PapersFromTwelve = () => {
    return (
        <div>
            <div className='w-full grid grid-cols-1 place-items-center'>
                <div className='max-w-[1240px] mx-auto px-2'>
                    <div className='flex flex-row justify-between p-5 mb-2'>
                        <Link to='/research_on_mars/research_paper'>
                            <img className='xs:hidden md:block translate-x-5' src="/arrow_left.svg" alt="" />
                        </Link>
                        <h3 className='text-3xl text-center text-[#E5DBCC] md:translate-x-10'>2012</h3>
                        <Link to='/'>
                            <h3 className='xs:hidden md:block text-[#E5DBCC] text-xl font-light -translate-x-12'>Mars Marvel</h3>
                        </Link>
                    </div>
                    <img src="/divider.svg" className='xs:hidden md:block opacity-50 translate-x-10' alt="" />
                    <br />
                    <div className='container mx-auto grid grid-cols-1 place-items-center justify-items-center'>
                        <div className='grid xs:grid-cols-1 justify-items-center gap-10 m-12'>
                            <a href="https://link.springer.com/article/10.1007/s11214-012-9898-9" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Collecting Samples in Gale Crater, Mars; an Overview of the Mars Science Laboratory Sample Acquisition, Sample Processing and Handling System
                                    </p>
                                </div>
                            </a>
                            <a href="https://link.springer.com/article/10.1007/s11214-012-9905-1" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Characterization and Calibration of the CheMin Mineralogical Instrument on Mars Science Laboratory
                                    </p>
                                </div>
                            </a>
                            <a href="https://link.springer.com/article/10.1007/s11214-012-9873-5" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Calibration of the Mars Science Laboratory Alpha Particle X-ray Spectrometer
                                    </p>
                                </div>
                            </a>
                            <a href="https://link.springer.com/article/10.1007/s11214-012-9893-1" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>The Mars Science Laboratory Organic Check Material
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2012JE004132" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Textural and modal analyses of picritic basalts with ChemCam Laser-Induced Breakdown Spectroscopy
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S058485471200095X" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Comparison of partial least squares and lasso regression techniques as applied to laser-induced breakdown spectroscopy of geological samples
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S0009254111004554" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Remote laser-induced breakdown spectroscopy analysis of East African Rift sedimentary samples under Mars conditions
                                    </p>
                                </div>
                            </a>
                            <a href="https://link.springer.com/article/10.1007/s11214-012-9910-4" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Curiosity’s Mars Hand Lens Imager (MAHLI) Investigation
                                    </p>
                                </div>
                            </a>
                            <a href="https://link.springer.com/article/10.1007/s11214-012-9891-3" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Surface Properties of the Mars Science Laboratory Candidate Landing Sites: Characterization from Orbit and Predictions
                                    </p>
                                </div>
                            </a>
                            <a href="https://link.springer.com/article/10.1007/s11214-012-9916-y" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Selection of the Mars Science Laboratory Landing Site
                                    </p>
                                </div>
                            </a>
                            <a href="https://link.springer.com/article/10.1007/s11214-012-9921-1" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>REMS: The Environmental Sensor Suite for the Mars Science Laboratory Rover
                                    </p>
                                </div>
                            </a>
                            <a href="https://link.springer.com/article/10.1007/s11214-012-9892-2" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Mars Science Laboratory Mission and Science Investigation
                                    </p>
                                </div>
                            </a>
                            <a href="https://link.springer.com/article/10.1007/s11214-012-9913-1" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>The Radiation Assessment Detector (RAD) Investigation
                                    </p>
                                </div>
                            </a>
                            <a href="https://opg.optica.org/ao/abstract.cfm?uri=ao-51-7-B74" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Examining natural rock varnish and weathering rinds with laser-induced breakdown spectroscopy for application to ChemCam on Mars
                                    </p>
                                </div>
                            </a>
                            <a href="https://link.springer.com/article/10.1007/s11214-012-9879-z" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>The Sample Analysis at Mars Investigation and Instrument Suite
                                    </p>
                                </div>
                            </a>
                            <a href="https://link.springer.com/article/10.1007/s11214-012-9882-4" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>The Mars Science Laboratory Engineering Cameras
                                    </p>
                                </div>
                            </a>
                            <a href="https://link.springer.com/article/10.1007/s11214-012-9912-2" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>The ChemCam Instrument Suite on the Mars Science Laboratory (MSL) Rover: Science Objectives and Mast Unit Description
                                    </p>
                                </div>
                            </a>
                            <a href="https://link.springer.com/article/10.1007/s11214-012-9924-y" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Dynamic Albedo of Neutrons (DAN) Experiment Onboard NASA’s Mars Science Laboratory
                                    </p>
                                </div>
                            </a>
                            <a href="https://opg.optica.org/ao/abstract.cfm?URI=ao-51-7-B130" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Comparison of two partial least squares-discriminant analysis algorithms for identifying geological samples with the ChemCam laser-induced breakdown spectroscopy instrument
                                    </p>
                                </div>
                            </a>
                            <a href="https://link.springer.com/article/10.1007/s11214-012-9886-0" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Ceramic ChemCam Calibration Targets on Mars Science Laboratory
                                    </p>
                                </div>
                            </a>
                            <a href="https://link.springer.com/article/10.1007/s11214-012-9911-3" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Assessment of Environments for Mars Science Laboratory Entry, Descent, and Surface Operations
                                    </p>
                                </div>
                            </a>
                            <a href="https://link.springer.com/article/10.1007/s11214-012-9902-4" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>The ChemCam Instrument Suite on the Mars Science Laboratory (MSL) Rover: Body Unit and Combined System Tests
                                    </p>
                                </div>
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PapersFromTwelve;
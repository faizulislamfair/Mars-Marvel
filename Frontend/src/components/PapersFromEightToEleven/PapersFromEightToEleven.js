import React from 'react';
import { Link } from 'react-router-dom';

const PapersFromEightToEleven = () => {
    return (
        <div>
            <div className='w-full grid grid-cols-1 place-items-center'>
                <div className='max-w-[1240px] mx-auto px-2'>
                    <div className='flex flex-row justify-between p-5 mb-2'>
                        <Link to='/research_on_mars/research_paper'>
                            <img className='xs:hidden md:block translate-x-5' src="/arrow_left.svg" alt="" />
                        </Link>
                        <h3 className='text-3xl text-center text-[#E5DBCC] md:translate-x-10'>2008-2011</h3>
                        <Link to='/'>
                            <h3 className='xs:hidden md:block text-[#E5DBCC] text-xl font-light -translate-x-12'>Mars Marvel</h3>
                        </Link>
                    </div>
                    <img src="/divider.svg" className='xs:hidden md:block opacity-50 translate-x-10' alt="" />
                    <br />
                    <div className='container mx-auto grid grid-cols-1 place-items-center justify-items-center'>
                        <div className='grid xs:grid-cols-1 justify-items-center gap-10 m-12'>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S001910351100306X" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>The influence of multivariate analysis methods and target grain size on the accuracy of remote quantitative chemical analysis of rocks using laser induced breakdown spectroscopy
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S0032063310003168" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Methane on Mars: Current observations, interpretation, and future plans
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S0584854711002199" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Laser induced breakdown spectroscopy library for the Martian environment
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S0584854710003034" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Strategies for Mars remote Laser-Induced Breakdown Spectroscopy analysis of sulfur in geological samples
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S0584854711000632" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Onboard calibration igneous targets for the Mars Science Laboratory Curiosity rover and the Chemistry Camera laser induced breakdown spectroscopy instrument
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.nature.com/articles/ngeo480" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Beyond water on Mars
                                    </p>
                                </div>
                            </a>
                            <a href="http://astrumterra.com/files/Hardgrove_NIMA_2011.pdf" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Effects of geochemical composition on neutron die-away measurements:
                                        Implications for Mars Science Laboratory’s Dynamic Albedo of
                                        Neutrons experiment</p>
                                </div>
                            </a>
                            <a href="https://opg.optica.org/ao/abstract.cfm?uri=ao-49-13-C211" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Calibrating the ChemCam laser-induced breakdown spectroscopy instrument for carbonate minerals on Mars</p>
                                </div>
                            </a>
                            <a href="https://link.springer.com/article/10.1007/s00216-011-4747-3" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Nonlinear mapping technique for data visualization and clustering assessment of LIBS data: application to ChemCam data
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.liebertpub.com/doi/abs/10.1089/ast.2007.0157" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>The Dynamic Albedo of Neutrons (DAN) Experiment for NASA's 2009 Mars Science Laboratory
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.mdpi.com/1424-8220/10/10/9211" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>The Rover Environmental Monitoring Station Ground Temperature Sensor: A Pyrometer for Measuring Ground Temperature on Mars
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.liebertpub.com/doi/abs/10.1089/ast.2010.0506" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Preservation of Martian Organic and Environmental Records: Final Report of the Mars Biosignature Working Group</p>
                                </div>
                            </a>
                            <a href="https://www.liebertpub.com/doi/abs/10.1089/ast.2007.0160" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Mitigation of the Impact of Terrestrial Contamination on Organic Measurements from the Mars Science Laboratory</p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S003206331000259X" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Determining the local abundance of Martian methane and its’ <sup>13</sup>C/<sup>12</sup>C and D/H isotopic ratios for comparison with related gas and soil analysis on the 2011 Mars Science Laboratory (MSL) mission</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PapersFromEightToEleven;
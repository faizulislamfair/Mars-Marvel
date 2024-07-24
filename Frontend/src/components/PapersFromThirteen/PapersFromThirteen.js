import React from 'react';
import { Link } from 'react-router-dom';

const PapersFromThirteen = () => {
    return (
        <div>
            <div className='w-full grid grid-cols-1 place-items-center'>
                <div className='max-w-[1240px] mx-auto px-2'>
                    <div className='flex flex-row justify-between p-5 mb-2'>
                        <Link to='/research_on_mars/research_paper'>
                            <img className='xs:hidden md:block translate-x-5' src="/arrow_left.svg" alt="" />
                        </Link>
                        <h3 className='text-3xl text-center text-[#E5DBCC] md:translate-x-10'>2013</h3>
                        <Link to='/'>
                            <h3 className='xs:hidden md:block text-[#E5DBCC] text-xl font-light -translate-x-12'>Mars Marvel</h3>
                        </Link>
                    </div>
                    <img src="/divider.svg" className='xs:hidden md:block opacity-50 translate-x-10' alt="" />
                    <br />
                    <div className='container mx-auto grid grid-cols-1 place-items-center justify-items-center'>
                        <div className='grid xs:grid-cols-1 justify-items-center gap-10 m-12'>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2013GL057763" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Primordial argon isotope fractionation in the atmosphere of Mars measured by the SAM instrument on Curiosity and implications for atmospheric loss
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.science.org/doi/10.1126/science.1238932" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>X-ray Diffraction Results from Mars Science Laboratory: Mineralogy of Rocknest at Gale Crater
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.science.org/doi/10.1126/science.1239505" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Curiosity at Gale Crater, Mars: Characterization and Analysis of the Rocknest Sand Shadow
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S0168583X13002681" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Refinement of the Compton–Rayleigh scatter ratio method for use on the Mars Science Laboratory alpha particle X-ray spectrometer
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S0584854713001067?via%3Dihub" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Independent component analysis classification of laser induced breakdown spectroscopy spectra
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/jgre.20144" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Evidence for perchlorates and the origin of chlorinated hydrocarbons detected by SAM at the Rocknest aeolian deposit in Gale Crater
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.science.org/doi/10.1126/science.1244258" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Analysis of Surface Materials by the Curiosity Mars Rover
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2013JE004510" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Neutron background environment measured by the Mars Science Laboratory's Dynamic Albedo of Neutrons instrument during the first 100 sols
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.science.org/doi/10.1126/science.1238937" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Volatile, Isotope, and Organic Analysis of Martian Fines with the Mars Curiosity Rover
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.science.org/doi/10.1126/science.1237966" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Abundance and Isotopic Composition of Gases in the Martian Atmosphere from the Curiosity Rover
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.science.org/doi/10.1126/science.1238670" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Soil Diversity and Hydration as Observed by ChemCam at Gale Crater, Mars
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2013JE004426" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>MAHLI at the Rocknest sand shadow: Science and science-enabling activities
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S0032063313002407?via%3Dihub" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>The Hohmann–Parker effect measured by the Mars Science Laboratory on the transfer from Earth to Mars: Consequences and opportunities
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.science.org/doi/10.1126/science.1239463" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>The Petrochemistry of Jake_M: A Martian Mugearite
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.science.org/doi/abs/10.1126/science.1242902?sid=7ea09144-5802-406f-bdb5-21040f874ecc" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Low Upper Limit to Methane Abundance on Mars
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2023JE007865" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Isotope Ratios of H, C, and O in CO<sub>2</sub> and H<sub>2</sub>O of the Martian Atmosphere
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/pii/S0584854713000505" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Pre-flight calibration and initial data processing for the ChemCam laser-induced breakdown spectroscopy instrument on the Mars Science Laboratory rover
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.science.org/doi/10.1126/science.1237317" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Martian Fluvial Conglomerates at Gale Crater
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2013GL057840" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Isotopes of nitrogen on Mars: Atmospheric measurements by Curiosity's mass spectrometer
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.cambridge.org/core/journals/international-journal-of-astrobiology/article/gale-crater-the-mars-science-laboratorycuriosity-rover-landing-site/61967227D1AAFCE4E5CE1CE0620C78B0" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Gale crater: the Mars Science Laboratory/Curiosity Rover Landing Site</p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2013JE004435" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Characteristics of pebble- and cobble-sized clasts along the Curiosity rover traverse from Bradbury Landing to Rocknest
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.science.org/doi/10.1126/science.1235989" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Measurements of Energetic Particle Radiation in Transit to Mars on the Mars Science Laboratory
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

export default PapersFromThirteen;
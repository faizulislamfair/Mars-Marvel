import React from 'react';
import { Link } from 'react-router-dom';

const PapersFromFifteen = () => {
    return (
        <div>
            <div className='w-full grid grid-cols-1 place-items-center'>
                <div className='max-w-[1240px] mx-auto px-2'>
                    <div className='flex flex-row justify-between p-5 mb-2'>
                        <Link to='/research_on_mars/research_paper'>
                            <img className='xs:hidden md:block translate-x-5' src="/arrow_left.svg" alt="" />
                        </Link>
                        <h3 className='text-3xl text-center text-[#E5DBCC] md:translate-x-10'>2015</h3>
                        <Link to='/'>
                            <h3 className='xs:hidden md:block text-[#E5DBCC] text-xl font-light -translate-x-12'>Mars Marvel</h3>
                        </Link>
                    </div>
                    <img src="/divider.svg" className='xs:hidden md:block opacity-50 translate-x-10' alt="" />
                    <br />
                    <div className='container mx-auto grid grid-cols-1 place-items-center justify-items-center'>
                        <div className='grid xs:grid-cols-1 justify-items-center gap-10 m-12'>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S0019103514004102" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>ChemCam results from the Shaler outcrop in Gale crater, Mars
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S0019103515001347" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>The Mars Science Laboratory scooping campaign at Rocknest
                                    </p>
                                </div>
                            </a>
                            <a href="https://ascelibrary.org/doi/abs/10.1061/9780784479179.019" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Roving on Mars with Opportunity and Curiosity: Terramechanics and Terrain Properties
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2015JE004799" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Modeling the thermal and physical evolution of Mount Sharp's sedimentary rocks, Gale Crater, Mars: Implications for diagenesis on the MSL Curiosity rover traverse
                                    </p>
                                </div>
                            </a>
                            <a href="https://analyticalsciencejournals.onlinelibrary.wiley.com/doi/abs/10.1002/cem.2727" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Manifold preprocessing for laser-induced breakdown spectroscopy under Mars conditions
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S0584854715000518" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>A study of machine learning regression methods for major elemental analysis of rocks using laser-induced breakdown spectroscopy
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2014JE004757" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Diagenesis and clay mineral formation at Gale Crater, Mars
                                    </p>
                                </div>
                            </a>
                            <a href="https://pubs.geoscienceworld.org/msa/ammin/article/100/4/824/40402/" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>The origin and implications of clay minerals from Yellowknife Bay, Gale crater, Mars†</p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S0019103514002449" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Compositions of coarse and fine particles in martian soils at gale: A window into the production of soils
                                    </p>
                                </div>
                            </a>
                            <a href="https://pubs.geoscienceworld.org/msa/elements/article-abstract/11/1/45/137634/Determining-Mineralogy-on-Mars-with-the-CheMin-X?redirectedFrom=fulltext" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Determining Mineralogy on Mars with the CheMin X-Ray Diffractometer </p>
                                </div>
                            </a>
                            <a href="https://planetarydata.jpl.nasa.gov/img/data/msl/MSLMHL_0010/DOCUMENT/MAHLI_TECH_REPT_0001.PDF" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Curiosity’s robotic arm-mounted
                                        Mars Hand Lens Imager (MAHLI):
                                        Characterization and calibration status</p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2014GL062553" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Mineralogy and fluvial history of the watersheds of Gale, Knobel, and Sharp craters: A regional context for the Mars Science Laboratory Curiosity's exploration
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2014GL062742" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>First detection of fluorine on Mars: Implications for Gale Crater's geochemistry
                                    </p>
                                </div>
                            </a>
                            <a href="https://ascelibrary.org/doi/abs/10.1061/9780784479179.020" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Curiosity’s Traverse from The Kimberley to the Base of Mt. Sharp: An Orbital Data Perspective
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S0032063315000495" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Reevaluated martian atmospheric mixing ratios from the mass spectrometer on the Curiosity rover
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2014JE004737" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Organic molecules in the Sheepbed Mudstone, Gale Crater, Mars
                                    </p>
                                </div>
                            </a>
                            <a href="https://pubs.geoscienceworld.org/msa/elements/article-abstract/11/1/39/137631/In-Situ-Compositional-Measurements-of-Rocks-and?redirectedFrom=fulltext" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>In Situ Compositional Measurements of Rocks and Soils with the Alpha Particle X-ray Spectrometer on NASA's Mars Rovers </p>
                                </div>
                            </a>
                            <a href="https://pubs.geoscienceworld.org/msa/elements/article-abstract/11/1/19/137624/Curiosity-s-Mission-of-Exploration-at-Gale-Crater?redirectedFrom=fulltext" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Curiosity's Mission of Exploration at Gale Crater, Mars </p>
                                </div>
                            </a>
                            <a href="https://www.science.org/doi/10.1126/science.aac7575" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Deposition, exhumation, and paleoclimate of an ancient lake deposit, Gale crater, Mars
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.aanda.org/articles/aa/abs/2015/05/aa25680-15/aa25680-15.html" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Variations of dose rate observed by MSL/RAD in transit to Mars
                                    </p>
                                </div>
                            </a>
                            <a href="https://iopscience.iop.org/article/10.1088/0004-637X/810/1/24" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>MODELING THE VARIATIONS OF DOSE RATE MEASURED BY RAD DURING THE FIRST MSL MARTIAN YEAR: 2012–2014
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S0019103514001146" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>ChemCam passive reflectance spectroscopy of surface materials at the Curiosity landing site, Mars
                                    </p>
                                </div>
                            </a>
                            <a href="https://pubs.geoscienceworld.org/msa/elements/article-abstract/11/1/27/137627/Images-from-Curiosity-A-New-Look-at-Mars?redirectedFrom=fulltext" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Images from Curiosity: A New Look at Mars </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2013JE004539" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Measurements of the neutron spectrum on the Martian surface with MSL/RAD
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S0019103514002917" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Understanding the signature of rock coatings in laser-induced breakdown spectroscopy data
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S0019103514002838" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>The ChemCam Remote Micro-Imager at Gale crater: Review of the first year of operations on Mars
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S0168900215004210" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Ground tests with active neutron instrumentation for the planetary science missions
                                    </p>
                                </div>
                            </a>
                            <a href="https://pubs.geoscienceworld.org/msa/elements/article-abstract/11/1/51/137637/Volatile-and-Isotopic-Imprints-of-Ancient-Mars?redirectedFrom=fulltext" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Volatile and Isotopic Imprints of Ancient Mars </p>
                                </div>
                            </a>
                            <a href="https://www.science.org/doi/10.1126/science.1260291" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>The imprint of atmospheric evolution in the D/H of Hesperian clay minerals on Mars
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2014JE004681" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Chemical variations in Yellowknife Bay formation sedimentary rocks analyzed by ChemCam on board the Curiosity rover on Mars
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2015JE004825" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Evaluation of the Tenax trap in the Sample Analysis at Mars instrument suite on the Curiosity rover as a potential hydrocarbon source for chlorinated organics detected in Gale Crater
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S0273117715001015" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Atmospheric movies acquired at the Mars Science Laboratory landing site: Cloud morphology, frequency and significance to the Gale Crater water cycle and Phoenix mission results
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S0019103514004825" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Observational evidence of a suppressed planetary boundary layer in northern Gale Crater, Mars as seen by the Navcam instrument onboard the Mars Science Laboratory rover
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S0019103514005521" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Gale crater and impact processes – Curiosity’s first 364 Sols on Mars</p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S0168900215004490" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Data processing of the active neutron experiment DAN for a Martian regolith investigation
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2014JE004732" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Mars Science Laboratory diurnal moisture observations and column simulations
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S001910351400445X" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Hydrogen detection with ChemCam at Gale crater
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.pnas.org/doi/full/10.1073/pnas.1420932112" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Evidence for indigenous nitrogen in sedimentary and aeolian deposits from the Curiosity rover investigations at Gale crater, Mars
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S001910351500398X" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Water equivalent hydrogen estimates from the first 200 sols of Curiosity’s traverse (Bradbury Landing to Yellowknife Bay): Results from the Dynamic Albedo of Neutrons (DAN) passive mode experiment
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.science.org/doi/abs/10.1126/science.1261713" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Mars methane detection and variability at Gale crater
                                    </p>
                                </div>
                            </a>
                            <a href="https://pubs.geoscienceworld.org/msa/elements/article-abstract/11/1/33/137628/ChemCam-Chemostratigraphy-by-the-First-Mars?redirectedFrom=fulltext" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>ChemCam: Chemostratigraphy by the First Mars Microprobe </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2015GL066664" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>On determining the zenith angle dependence of the Martian radiation environment at Gale Crater altitudes
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

export default PapersFromFifteen;
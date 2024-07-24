import React from 'react';
import { Link } from 'react-router-dom';

const PapersFromFourteen = () => {
    return (
        <div>
            <div className='w-full grid grid-cols-1 place-items-center'>
                <div className='max-w-[1240px] mx-auto px-2'>
                    <div className='flex flex-row justify-between p-5 mb-2'>
                        <Link to='/research_on_mars/research_paper'>
                            <img className='xs:hidden md:block translate-x-5' src="/arrow_left.svg" alt="" />
                        </Link>
                        <h3 className='text-3xl text-center text-[#E5DBCC] md:translate-x-10'>2014</h3>
                        <Link to='/'>
                            <h3 className='xs:hidden md:block text-[#E5DBCC] text-xl font-light -translate-x-12'>Mars Marvel</h3>
                        </Link>
                    </div>
                    <img src="/divider.svg" className='xs:hidden md:block opacity-50 translate-x-10' alt="" />
                    <br />
                    <div className='container mx-auto grid grid-cols-1 place-items-center justify-items-center'>
                        <div className='grid xs:grid-cols-1 justify-items-center gap-10 m-12'>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2013JE004493" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Abundances and implications of volatile-bearing species from evolved gas analysis of the Rocknest aeolian deposit, Gale Crater, Mars
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2013JE004605" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Terrain physical properties derived from orbital data and the first 360 sols of Mars Science Laboratory Curiosity rover observations in Gale Crater

                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2013JE004519" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>MSL-APXS titanium observation tray measurements: Laboratory experiments and results for the Rocknest fines at the Curiosity field site in Gale Crater, Mars

                                    </p>
                                </div>
                            </a>
                            <a href="https://journals.iucr.org/m/issues/2014/06/00/yu5005/index.html" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>The first X-ray diffraction measurements on Mars

                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2013JE004590" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Chemistry and texture of the rocks at Rocknest, Gale Crater: Evidence for sedimentary origin and diagenetic alteration

                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2013JE004579" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>The rock abrasion record at Gale Crater: Mars Science Laboratory results from Bradbury Landing to Rocknest

                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S0168583X14001803" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>The Mars Science Laboratory APXS calibration target: Comparison of Martian measurements with the terrestrial calibration

                                    </p>
                                </div>
                            </a>
                            <a href="https://arc.aiaa.org/doi/abs/10.2514/1.A32708" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Reconstruction of Atmospheric Properties from Mars Science Laboratory Entry, Descent, and Landing
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S0016703714002117" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Weathering of olivine under CO<sub>2</sub> atmosphere: A martian perspective
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2014JE004716" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Constraints on abundance, composition, and nature of X-ray amorphous components of soils and rocks at Gale crater, Mars

                                    </p>
                                </div>
                            </a>
                            <a href="https://www.annualreviews.org/doi/full/10.1146/annurev-earth-060313-055024" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Mineralogy of the Martian Surface

                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2013JE004547" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Charged particle spectra obtained with the Mars Science Laboratory Radiation Assessment Detector (MSL/RAD) on the surface of Mars

                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S0584854714000901" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>In situ calibration using univariate analyses based on the onboard ChemCam targets: first prediction of Martian rock and soil compositions☆

                                    </p>
                                </div>
                            </a>
                            <a href="https://www.science.org/doi/10.1126/science.1247166" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>In Situ Radiometric and Exposure Age Dating of the Martian Surface

                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S0032063314000634" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Analytical techniques for retrieval of atmospheric composition with the quadrupole mass spectrometer of the Sample Analysis at Mars instrument suite on Mars Science Laboratory

                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2013JE004576" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Curiosity's rover environmental monitoring station: Overview of the first 100 sols

                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2013GL058909" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>The timing of alluvial activity in Gale crater, Mars

                                    </p>
                                </div>
                            </a>
                            <a href="https://www.science.org/doi/10.1126/science.1249944" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Habitability, Taphonomy, and the Search for Organic Carbon on Mars

                                    </p>
                                </div>
                            </a>
                            <a href="https://www.science.org/doi/10.1126/science.1242777" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>A Habitable Fluvio-Lacustrine Environment at Yellowknife Bay, Gale Crater, Mars

                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2013JE004488" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Preliminary interpretation of the REMS pressure data from the first 100 sols of the MSL mission

                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2013JE004520" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Observations and preliminary science results from the first 100 sols of MSL Rover Environmental Monitoring Station ground temperature sensor measurements at Gale Crater

                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2013JE004514" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Mars Science Laboratory relative humidity observations: Initial results

                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2013JE004423" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Pressure observations by the Curiosity rover: Initial results

                                    </p>
                                </div>
                            </a>
                            <a href="https://www.science.org/doi/10.1126/science.1244797" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Mars’ Surface Radiation Environment Measured with the Mars Science Laboratory’s Curiosity Rover

                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2013JE004549" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Comparison of Martian surface ionizing radiation measurements from MSL-RAD with Badhwar-O'Neill 2011/HZETRN model calculations

                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2013JE004539" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Measurements of the neutron spectrum on the Martian surface with MSL/RAD

                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2014GL060329" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>High manganese concentrations in rocks at Gale crater, Mars

                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2014JE004620" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Chemistry of fracture-filling raised ridges in Yellowknife Bay, Gale Crater: Window into past aqueous activity and habitability on Mars

                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2013JE004556" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Local variations of bulk hydrogen and chlorine-equivalent neutron absorption content measured at the contact between the Sheepbed and Gillespie Lake units in Yellowknife Bay, Gale Crater, using the DAN instrument onboard Curiosity

                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2014JE004618" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Surface energy budget and thermal inertia at Gale Crater: Calculations from ground-based measurements

                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2013JE004518" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Sulfur-bearing phases detected by evolved gas analysis of the Rocknest aeolian deposit, Gale Crater, Mars

                                    </p>
                                </div>
                            </a>
                            <a href="https://www.science.org/doi/10.1126/science.1244734" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Elemental Geochemistry of Sedimentary Rocks at Yellowknife Bay, Gale Crater, Mars

                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S0584854714000470" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Correcting for variable laser-target distances of laser-induced breakdown spectroscopy measurements with ChemCam using emission lines of Martian dust spectra☆

                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2013GL059097" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Wind-blown sandstones cemented by sulfate and clay minerals in Gale Crater, Mars

                                    </p>
                                </div>
                            </a>
                            <a href="https://www.science.org/doi/10.1126/science.1245267" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Volatile and Organic Compositions of Sedimentary Rocks in Yellowknife Bay, Gale Crater, Mars

                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2013JE004553" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Water and chlorine content in the Martian soil along the first 1900 m of the Curiosity rover traverse as estimated by the DAN instrument

                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2013JE004588" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Calcium sulfate veins characterized by ChemCam/Curiosity at Gale crater, Mars

                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2013JE004517" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Trace element geochemistry (Li, Ba, Sr, and Rb) using Curiosity's ChemCam: Early results for Gale crater from Bradbury Landing Site to Rocknest

                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2013JE004583" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>The origin and evolution of the Peace Vallis fan system that drains to the Curiosity landing area, Gale Crater, Mars

                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2014JE004615" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Alteration of the carbon and nitrogen isotopic composition in the Martian surface rocks due to cosmic ray exposure

                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2013JE004525" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Diurnal variations of energetic particle radiation at the surface of Mars as observed by the Mars Science Laboratory Radiation Assessment Detector

                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2013JE004472" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Igneous mineralogy at Bradbury Rise: The first ChemCam campaign at Gale crater

                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2013JE004481" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Geochemical diversity in first rocks examined by the Curiosity Rover in Gale Crater: Evidence for and significance of an alkali and volatile-rich igneous source

                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S0032063313002407?via%3Dihub" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>The Hohmann–Parker effect measured by the Mars Science Laboratory on the transfer from Earth to Mars: Consequences and opportunities

                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2014JE004623" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Subaqueous shrinkage cracks in the Sheepbed mudstone: Implications for early fluid diagenesis, Gale crater, Mars

                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2014JE004617" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Diagenetic origin of nodules in the Sheepbed member, Yellowknife Bay formation, Gale crater, Mars

                                    </p>
                                </div>
                            </a>
                            <a href="https://pubs.geoscienceworld.org/msa/ammin/article-abstract/99/11-12/2234/46024/Ferrian-saponite-from-the-Santa-Monica-Mountains?redirectedFrom=fulltext" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Ferrian saponite from the Santa Monica Mountains (California, U.S.A., Earth): Characterization as an analog for clay minerals on Mars with application to Yellowknife Bay in Gale Crater†
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.science.org/doi/10.1126/science.1243480" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Mineralogy of a Mudstone at Yellowknife Bay, Gale Crater, Mars
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2014JE004622" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Overview of the Mars Science Laboratory mission: Bradbury Landing to Yellowknife Bay and beyond
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

export default PapersFromFourteen;
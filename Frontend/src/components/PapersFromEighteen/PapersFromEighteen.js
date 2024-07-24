import React from 'react';
import { Link } from 'react-router-dom';

const PapersFromEighteen = () => {
    return (
        <div>
            <div className='w-full'>
                <div className='max-w-[1240px] mx-auto px-2'>
                    <div className='flex flex-row justify-between p-5 mb-2'>
                        <Link to='/research_on_mars/research_paper'>
                            <img className='xs:hidden md:block translate-x-5' src="/arrow_left.svg" alt="" />
                        </Link>
                        <h3 className='text-3xl text-center text-[#E5DBCC] md:translate-x-10'>2018</h3>
                        <Link to='/'>
                            <h3 className='xs:hidden md:block text-[#E5DBCC] text-xl font-light -translate-x-12'>Mars Marvel</h3>
                        </Link>
                    </div>
                    <img src="/divider.svg" className='xs:hidden md:block opacity-50 translate-x-10' alt="" />
                    <br />
                    <div className='container mx-auto grid grid-cols-1 place-items-center justify-items-center'>
                        <div className='grid xs:grid-cols-1 justify-items-center gap-10 m-12'>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S0019103517304827" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Complex bedding geometry in the upper portion of Aeolis Mons, Gale crater, Mars
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/B9780128099353000049" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Chapter 4 - Martian Habitability as Inferred From Landed Mission Observations
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2018GL079040" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>The Bagnold Dunes in Southern Summer: Active Sediment Transport on Mars Observed by the Curiosity Rover
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/10.1002/2017JE005513" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Coarse Sediment Transport in the Modern Martian Environment
                                    </p>
                                </div>
                            </a>
                            <a href="https://onlinelibrary.wiley.com/doi/full/10.1111/sed.12469" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Ancient Martian aeolian processes and palaeomorphology reconstructed from the Stimson formation on the lower slope of Aeolis Mons, Gale crater, Mars
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2018EA000380" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>THEMIS-VIS Investigations of Sand at Gale Crater
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2017JE005401" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>The Mars Science Laboratory (MSL) Bagnold Dunes Campaign, Phase I: Overview and introduction to the special issue
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.science.org/doi/10.1126/sciadv.aar3330" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Clay mineral diversity and abundance in sedimentary rocks of Gale crater, Mars
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S0168583X17309023" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Separation of detector non-linearity issues and multiple ionization satellites in alpha-particle PIXE
                                    </p>
                                </div>
                            </a>
                            <a href="https://onlinelibrary.wiley.com/doi/full/10.1111/sed.12370" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Shaler: in situ analysis of a fluvial sedimentary deposit on Mars
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2017JE005501" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>The Thermophysical Properties of the Bagnold Dunes, Mars: Ground-Truthing Orbital Data
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2018GL077801" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Energetic Particle Radiation Environment Observed by RAD on the Surface of Mars During the September 2017 Event
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.science.org/doi/10.1126/science.aas9185" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Organic matter preserved in 3-billion-year-old mudstones at Gale crater, Mars
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2018GL079045" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Water Abundance of Dunes in Gale Crater, Mars From Active Neutron Experiments and Implications for Amorphous Phases
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2018SW001973" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Modeling the Evolution and Propagation of 10 September 2017 CMEs and SEPs Arriving at Mars Constrained by Remote Sensing and In Situ Measurement
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.aanda.org/component/article?access=doi&doi=10.1051/0004-6361/201732087" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Measurements of Forbush decreases at Mars: both by MSL on ground and by MAVEN in orbit
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S0019103517304311" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Detection of Northern Hemisphere transient eddies at Gale Crater Mars
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2018SW001959" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Space Weather on the Surface of Mars: Impact of the September 2017 Events
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2018JE005691" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Chlorate/Fe-Bearing Phase Mixtures as a Possible Source of Oxygen and Chlorine Detected by the Sample Analysis at Mars Instrument in Gale Crater, Mars
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2018GL079025" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Bagnold Dunes Campaign Phase 2: Visible/Near-Infrared Reflectance Spectroscopy of Longitudinal Ripple Sands
                                    </p>
                                </div>
                            </a>
                            <a href="https://onlinelibrary.wiley.com/doi/abs/10.1111/ter.12359" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Syndepositional precipitation of calcium sulfate in Gale Crater, Mars
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/pii/S0098300417309688" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Context-dependent image quality assessment of JPEG compressed Mars Science Laboratory Mastcam images using convolutional neural networks☆</p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2017JE005314" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Interannual and Diurnal Variability in Water Ice Clouds Observed from MSL Over Two Martian Years
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2018GL079032" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Curiosity's Investigation of the Bagnold Dunes, Gale Crater: Overview of the Two-Phase Scientific Campaign and Introduction to the Special Collection
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2018GL079029" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Morphologic Diversity of Martian Ripples: Implications for Large-Ripple Formation
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2018GL079210" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Martian Eolian Dust Probed by ChemCam
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.liebertpub.com/doi/10.1089/ast.2017.1717" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>The Search for Hesperian Organic Matter on Mars: Pyrolysis Studies of Sediments Rich in Sulfur and Iron
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S0019103517307819" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Chemical variability in mineralized veins observed by ChemCam on the lower slopes of Mount Sharp in Gale crater, Mars
                                    </p>
                                </div>
                            </a>
                            <a href="https://link.springer.com/article/10.1134/S1063773718070034" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Data Processing Results for the Active Neutron Measurements by the DAN Instrument on the Curiosity Mars Rover
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S0019103516307084" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Retrieval of water vapor column abundance and aerosol properties from ChemCam passive sky spectroscopy
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2018GL080542" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>The Effect of Bagnold Dunes Slopes on the Short Timescale Air Temperature Fluctuations at Gale Crater on Mars
                                    </p>
                                </div>
                            </a>
                            <a href="http://www.minsocam.org/MSA/Ammin/AM_Preprints/6123MorrisonPreprintJun.pdf" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Revision 2: Relationships between unit-cell parameters and composition for rock-forming minerals on Earth, Mars, and other extraterrestrial bodies</p>
                                </div>
                            </a>
                            <a href="http://www.minsocam.org/MSA/Ammin/AM_Preprints/6124MorrisonmsPreprintJun.pdf" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Revision 2: Crystal chemistry of martian minerals from Bradbury Landing through Naukluft Plateau, Gale crater, Mars</p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2018GL079026" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Chemical Diversity of Sands Within the Linear and Barchan Dunes of the Bagnold Dunes, Gale Crater, as Revealed by APXS Onboard Curiosity
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S0019103517304700" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Measurement of Martian boundary layer winds by the displacement of jettisoned lander hardware
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2018JE005630" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Effect of Solution pH and Chloride Concentration on Akaganeite Precipitation: Implications for Akaganeite Formation on Mars
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2017GL075965" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Uniaxial Compressive Strengths of Rocks Drilled at Gale Crater, Mars
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2018GL079073" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Sand Mineralogy Within the Bagnold Dunes, Gale Crater, as Observed In Situ and From Orbit
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2017JE005483" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>In Situ Analysis of Opal in Gale Crater, Mars
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/pii/S0032063316301878?via%3Dihub" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>On the relationship between surface pressure, terrain elevation, and air temperature. Part I: The large diurnal surface pressure range at Gale Crater, Mars and its origin due to lateral hydrostatic adjustment
                                    </p>
                                </div>
                            </a>
                            <a href="https://onlinelibrary.wiley.com/doi/abs/10.1111/sed.12522" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>In a PICL: The sedimentary deposits and facies of perennially ice-covered lakes
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2018JE005553" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Dusty Rocks in Gale Crater: Assessing Areal Coverage and Separating Dust and Rock Contributions in APXS Analyses
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2018JE005612" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Deriving Amorphous Component Abundance and Composition of Rocks and Sediments on Earth and Mars
                                    </p>
                                </div>
                            </a>
                            <a href="https://pubs.geoscienceworld.org/gsa/geology/article/46/6/515/530329/Desiccation-cracks-provide-evidence-of-lake-drying" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Desiccation cracks provide evidence of lake drying on Mars, Sutton Island member, Murray formation, Gale Crater </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2018GL079059" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Major Volatiles Evolved From Eolian Materials in Gale Crater
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S0168900218302882" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Observed diurnal variations in Mars Science Laboratory Dynamic Albedo of Neutrons passive mode data
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2017JE005467" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Characterization of Hydrogen in Basaltic Materials With Laser-Induced Breakdown Spectroscopy (LIBS) for Application to MSL ChemCam Data
                                    </p>
                                </div>
                            </a>
                            <a href="http://www.minsocam.org/msa/ammin/toc/2018/open_access/AM103P1011.pdf" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Gypsum, bassanite, and anhydrite at Gale crater, Mars</p>
                                </div>
                            </a>
                            <a href="https://www.nature.com/articles/s41598-018-35946-8" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Seasonal Deposition and Lifting of Dust on Mars as Observed by the Curiosity Rover
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.science.org/doi/10.1126/science.aaq0131" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Background levels of methane in Mars’ atmosphere show strong seasonal variations
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2018GL078972" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Sand Grain Sizes and Shapes in Eolian Bedforms at Gale Crater, Mars
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/pii/S001910351730516X" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Assessment of Aeolis Palus stratigraphic relationships based on bench-forming strata in the Kylie and the Kimberley regions of Gale crater, Mars
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2018GL077760" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Analysis of the Radiation Hazard Observed by RAD on the Surface of Mars During the September 2017 Solar Particle Event
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

export default PapersFromEighteen;
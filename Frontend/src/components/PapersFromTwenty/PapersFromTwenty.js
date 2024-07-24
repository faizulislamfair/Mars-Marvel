import React from 'react';
import { Link } from 'react-router-dom';

const PapersFromTwenty = () => {
    return (
        <div>
            <div className='w-full grid grid-cols-1 place-items-center'>
                <div className='max-w-[1240px] mx-auto px-2'>
                    <div className='flex flex-row justify-between p-5 mb-2'>
                        <Link to='/research_on_mars/research_paper'>
                            <img className='xs:hidden md:block translate-x-5' src="/arrow_left.svg" alt="" />
                        </Link>
                        <h3 className='text-3xl text-center text-[#E5DBCC] md:translate-x-10'>2020</h3>
                        <Link to='/'>
                            <h3 className='xs:hidden md:block text-[#E5DBCC] text-xl font-light -translate-x-12'>Mars Marvel</h3>
                        </Link>
                    </div>
                    <img src="/divider.svg" className='xs:hidden md:block opacity-50 translate-x-10' alt="" />
                    <br />
                    <div className='container mx-auto grid grid-cols-1 place-items-center justify-items-center'>
                        <div className='grid xs:grid-cols-1 justify-items-center gap-10 m-12'>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S0019103520302657" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>A look back, part II: The drilling campaign of the Curiosity rover during the Mars Science Laboratory's second and third martian years
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2019JE006295" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Evidence for Multiple Diagenetic Episodes in Ancient Fluvial-Lacustrine Sedimentary Rocks in Gale Crater, Mars
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/pii/S0019103519307535" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Geochemical variation in the Stimson formation of Gale crater: Provenance, mineral sorting, and a comparison with modern Martian dunes
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2020JE006536" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Elemental Composition and Chemical Evolution of Geologic Materials in Gale Crater, Mars: APXS Results From Bradbury Landing to the Vera Rubin Ridge
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S0019103520300993" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Particle Induced X-ray Emission spectrometry (PIXE) of Hawaiian volcanics: An analogue study to evaluate the APXS field analysis of geologic materials on Mars
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S0032063319300686" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Estimating the altitudes of Martian water-ice clouds above the Mars Science Laboratory rover landing site
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S0032063319302600" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>3D digital outcrop model reconstruction of the Kimberley outcrop (Gale crater, Mars) and its integration into Virtual Reality for simulated geological analysis
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/pii/S0019103520303109" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>JSC-Rocknest: A large-scale Mojave Mars Simulant (MMS) based soil simulant for in-situ resource utilization water-extraction studies
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2019JE006173" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>High-Temperature HCl Evolutions From Mixtures of Perchlorates and Chlorides With Water-Bearing Phases: Implications for the SAM Instrument in Gale Crater, Mars
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2019JE006180" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Identification and Description of a Silicic Volcaniclastic Layer in Gale Crater, Mars, Using Active Neutron Interrogation
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2019JE006301" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Boron and Lithium in Calcium Sulfate Veins: Tracking Precipitation of Diagenetic Materials in Vera Rubin Ridge, Gale Crater
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2019JE006314" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Analyses of High-Iron Sedimentary Bedrock and Diagenetic Features Observed With ChemCam at Vera Rubin Ridge, Gale Crater, Mars: Calibration and Characterization
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2019JE006307" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>A Lacustrine Paleoenvironment Recorded at Vera RubinRidge, Gale Crater: Overview of the Sedimentology and Stratigraphy Observed by the Mars ScienceLaboratory Curiosity Rover
                                    </p>
                                </div>
                            </a>
                            <a href="https://pubs.geoscienceworld.org/gsa/geosphere/article/16/6/1508/591698/Extraformational-sediment-recycling-on-Mars" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Extraformational sediment recycling on Mars </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2020JE006527" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Evidence for a Diagenetic Origin of Vera Rubin Ridge, Gale Crater, Mars: Summary and Synthesis of Curiosity's Exploration Campaign
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2019JE006294" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Synergistic Ground and Orbital Observations of Iron Oxides on Mt. Sharp and Vera Rubin Ridge
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.nature.com/articles/s41550-019-0990-x" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Indigenous and exogenous organics and surface–atmosphere cycling inferred from carbon and oxygen isotopes at Gale crater
                                    </p>
                                </div>
                            </a>
                            <a href="https://iopscience.iop.org/article/10.3847/PSJ/aba690/meta" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Benzoic Acid as the Preferred Precursor for the Chlorobenzene Detected on Mars: Insights from the Unique Cumberland Analog Investigation
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2019JE006320" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>The Chemostratigraphy of the Murray Formation and Role of Diagenesis at Vera Rubin Ridge in Gale Crater, Mars, as Observed by the ChemCam Instrument
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2020JE006700" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Studies of the 2018/Mars Year 34 Planet-Encircling Dust Storm
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.nature.com/articles/s41598-020-75665-7" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Deposits from giant floods in Gale crater and their implications for the climate of early Mars
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2019JE006322" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Diagenesis of Vera Rubin Ridge, Gale Crater, Mars, From Mastcam Multispectral Images
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2019JE006290" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Spectral, Compositional, and Physical Properties of the Upper Murray Formation and Vera Rubin Ridge, Gale Crater, Mars
                                    </p>
                                </div>
                            </a>
                            <a href="https://iopscience.iop.org/article/10.3847/2515-5172/abc6ae" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Atmospheric Dust Causes Darkness to Fall Rapidly on Mars
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2019JE006264" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Analysis of Active Neutron Measurements From the Mars Science Laboratory Dynamic Albedo of Neutrons Instrument: Intrinsic Variability, Outliers, and Implications for Future Investigations
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2019EA000926" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Predicting the Mechanical and Fracture Properties of Mars Analog Sedimentary Lithologies
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2019JE006299" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Iron Mobility During Diagenesis at Vera Rubin Ridge, Gale Crater, Mars
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S0032063318304574" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Mars neutron radiation environment from HEND/Odyssey and DAN/MSL observations
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2019JE006156" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Reevaluation of Perchlorate in Gale Crater Rocks Suggests Geologically Recent Perchlorate Addition
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2019JE006309" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Constraints on the Mineralogy and Geochemistry of Vera Rubin Ridge, Gale Crater, Mars, From Mars Science Laboratory Sample Analysis at Mars Evolved Gas Analyses
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2019JE006359" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Influence of Calcium Perchlorate on Organics Under SAM-Like Pyrolysis Conditions: Constraints on the Nature of Martian Organics
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2019JE006324" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Hydrothermal Precipitation of Sanidine (Adularia) Having Full Al,Si Structural Disorder and Specular Hematite at Maunakea Volcano (Hawai'i) and at Gale Crater (Mars)
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S0019103520302001" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Assessment of water content in martian subsurface along the traverse of the Curiosity rover based on passive measurements of the DAN instrument
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2019JE006220?casa_token=108eXBrDlRkAAAAA%3AjjkbgnQJ-08d5xWRlfM24v7-uY0JHqSxnkMQmhVa7wskGI7tJX4lX3RHc48MDKT_rH6RSlPal2thXjM8" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Evidence for Adsorption of Chlorine Species on Iron (III) (Hydr)oxides in the Sheepbed Mudstone, Gale Crater, Mars
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S0009281920300064" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Mineralogy and geochemistry of sedimentary rocks and eolian sediments in Gale crater, Mars: A review after six Earth years of exploration with Curiosity
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2019JE006306" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Mineralogy of Vera Rubin Ridge From the Mars Science Laboratory CheMin Instrument
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2019JE006230" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Grain Size Variations in the Murray Formation: Stratigraphic Evidence for Changing Depositional Environments in Gale Crater, Mars
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S001910351930363X" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Curiosity observations and column model integrations for a martian global dust event
                                    </p>
                                </div>
                            </a>
                            <a href="https://onlinelibrary.wiley.com/doi/full/10.1002/dep2.110" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Engraved on the rocks—Aeolian abrasion of Martian mudstone exposures and their relationship to modern wind patterns in Gale Crater, Mars
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2020JE006465" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>The Line-of-Sight Extinction Record at Gale Crater as Observed by MSL's Mastcam and Navcam through ∼2,500 Sols
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2019JE006298" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Regional Structural Orientation of the Mount Sharp Group Revealed by In Situ Dip Measurements and Stratigraphic Correlations on the Vera Rubin Ridge
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2020JE006485" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>A Broad Continuum of Aeolian Impact Ripple Morphologies on Mars is Enabled by Low Wind Dynamic Pressures
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.liebertpub.com/doi/10.1089/ast.2018.1908" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>First Detections of Dichlorobenzene Isomers and Trichloromethylpropane from Organic Matter Indigenous to Mars Mudstone in Gale Crater, Mars: Results from the Sample Analysis at Mars Instrument Onboard the Curiosity Rover
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2019JE006289" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Hydrogen Variability in the Murray Formation, Gale Crater, Mars
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2019JE006319" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>APXS-Derived Compositional Characteristics of Vera Rubin Ridge and Murray Formation, Gale Crater, Mars: Geochemical Implications for the Origin of the Ridge
                                    </p>
                                </div>
                            </a>
                            <a href="https://iopscience.iop.org/article/10.3847/PSJ/abbc05/meta" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>How Good is "Good Enough?" Major Element Chemical Analyses of Planetary Basalts by Spacecraft Instruments
                                    </p>
                                </div>
                            </a>
                            <a href="https://link.springer.com/article/10.1007/s11214-020-00722-6" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>In Situ UV Measurements by MSL/REMS: Dust Deposition and Angular Response Corrections
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2019GL085694" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Advective Fluxes in the Martian Regolith as a Mechanism Driving Methane and Other Trace Gas Emissions to the Atmosphere
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2020JE006493" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Effects of a Large Dust Storm in the Near-Surface Atmosphere as Measured by InSight in Elysium Planitia, Mars. Comparison With Contemporaneous Measurements by Mars Science Laboratory
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.aanda.org/articles/aa/abs/2020/09/aa38815-20/aa38815-20.html" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Curiosity Mars methane measurements are not confused by ozone
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/pii/S0019103520302773" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Origin and composition of three heterolithic boulder- and cobble-bearing deposits overlying the Murray and Stimson formations, Gale Crater, Mars
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/B9780128188293000204" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Chapter 20 - Laser-induced breakdown spectroscopy in planetary science</p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S0019103519303501" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Scarp orientation in regions of active aeolian erosion on Mars
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2019JE006304" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Detection of Reduced Sulfur on Vera Rubin Ridge by Quadratic Discriminant Analysis of Volatiles Observed During Evolved Gas Analysis
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.liebertpub.com/doi/10.1089/ast.2019.2090" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Is a Linear or a Walkabout Protocol More Efficient When Using a Rover to Choose Biologically Relevant Samples in a Small Region of Interest?
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/pii/S0019103520302529" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Dust cover on Curiosity's Mars Hand Lens Imager (MAHLI) calibration target: Implications for deposition and removal mechanisms
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

export default PapersFromTwenty;
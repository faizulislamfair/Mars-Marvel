import React from 'react';
import { Link } from 'react-router-dom';

const PapersFromSeventeen = () => {
    return (
        <div>
            <div className='w-full grid grid-cols-1 place-items-center'>
                <div className='max-w-[1240px] mx-auto px-2'>
                    <div className='flex flex-row justify-between p-5 mb-2'>
                        <Link to='/research_on_mars/research_paper'>
                            <img className='xs:hidden md:block translate-x-5' src="/arrow_left.svg" alt="" />
                        </Link>
                        <h3 className='text-3xl text-center text-[#E5DBCC] md:translate-x-10'>2017</h3>
                        <Link to='/'>
                            <h3 className='xs:hidden md:block text-[#E5DBCC] text-xl font-light -translate-x-12'>Mars Marvel</h3>
                        </Link>
                    </div>
                    <img src="/divider.svg" className='xs:hidden md:block opacity-50 translate-x-10' alt="" />
                    <br />
                    <div className='container mx-auto grid grid-cols-1 place-items-center justify-items-center'>
                        <div className='grid xs:grid-cols-1 justify-items-center gap-10 m-12'>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2017JE005262" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Mineralogy of an active eolian sediment from the Namib dune, Gale crater, Mars</p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2016JE005164" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Characterization of LIBS emission lines for the identification of chlorides, carbonates, and sulfates in salt/basalt mixtures for the application to MSL ChemCam data
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S0584854716303925" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Improved accuracy in quantitative laser-induced breakdown spectroscopy using sub-models
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2016EA000240" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Detecting Upward Directed Charged Particle Fluxes in the Mars Science Laboratory Radiation Assessment Detector
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/pii/S0022489816300891" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Relating geologic units and mobility system kinematics contributing to Curiosity wheel damage at Gale Crater, Mars
                                    </p>
                                </div>
                            </a>
                            <a href="https://onlinelibrary.wiley.com/doi/abs/10.1002/rob.21647" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Mars Science Laboratory Curiosity Rover Megaripple Crossings up to Sol 710 in Gale Crater
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2016EA000219" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>The Mars Science Laboratory Curiosity rover Mastcam instruments: Preflight and in-flight calibration, validation, and data archiving
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2017JE005290" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Zinc and germanium in the sedimentary rocks of Gale Crater on Mars indicate hydrothermal enrichment followed by diagenetic fractionation
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S0584854716303123" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Laser-induced breakdown spectra of rock powders at variable ablation and collection angles under Mars-analog conditions
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2017JE005263" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Martian aeolian activity at the Bagnold Dunes, Gale Crater: The view from the surface and orbit
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.pnas.org/doi/full/10.1073/pnas.1616649114" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Low Hesperian P<sub>CO2</sub> constrained from in situ mineralogical analysis at Gale Crater, Mars
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2016JE005163" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Mineralogy and stratigraphy of the Gale crater rim, wall, and floor units
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S0584854716303913" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Recalibration of the Mars Science Laboratory ChemCam instrument with an expanded geochemical database
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2017JE005261" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Geochemistry of the Bagnold dune field as observed by ChemCam and comparison with other aeolian deposits at Gale Crater
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S0019103516304572" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Classification of igneous rocks analyzed by ChemCam at Gale crater, Mars
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.nature.com/articles/s41598-017-02087-3" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Non-Targeted Effects Models Predict Significantly Higher Mars Mission Cancer Risk than Targeted Effects Models
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2016JE005222" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Stability and fate of ferrihydrite during episodes of water/rock interactions on early Mars: An experimental approach
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S0584854716302026" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Analysis of carbon and nitrogen signatures with laser-induced breakdown spectroscopy; the quest for organics under Mars-like conditions
                                    </p>
                                </div>
                            </a>
                            <a href="https://onlinelibrary.wiley.com/doi/abs/10.1002/9781118971437.ch28" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Fluvial Gravels on Mars
                                    </p>
                                </div>
                            </a>
                            <a href="https://onlinelibrary.wiley.com/doi/full/10.1111/maps.12953" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Basalt–trachybasalt samples in Gale Crater, Mars
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2017JE005267" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Chemistry, mineralogy, and grain properties at Namib and High dunes, Bagnold dune field, Gale crater, Mars: A synthesis of Curiosity rover observations
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S2214552417300123" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>The charged particle radiation environment on Mars measured by MSL/RAD from November 15, 2015 to January 15, 2016
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2017JE005324" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Sedimentary processes of the Bagnold Dunes: Implications for the eolian rock record of Mars
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2016JE005229" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Mineral paragenesis on Mars: The roles of reactive surface area and diffusion
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.science.org/doi/10.1126/scirobotics.aan4582" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>AEGIS autonomous targeting for ChemCam on Mars Science Laboratory: Deployment and results of initial science team use
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S0032063316304500" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Initial SAM calibration gas experiments on Mars: Quadrupole mass spectrometer results and implications</p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2017GL073323" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Diagenetic silica enrichment and late-stage groundwater activity in Gale crater, Mars
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2017GL074480" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>In situ detection of boron by ChemCam on Mars
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2016JE005206" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Dependence of the Martian radiation environment on atmospheric depth: Modeling and measurement
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S2214552417300093" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Measurements of the neutral particle spectra on Mars by MSL/RAD from 2015-11-15 to 2016-01-15
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2017JE005420" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>The Vertical Dust Profile Over Gale Crater, Mars
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S2214552417300494" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Mars science laboratory radiation assessment detector (MSL/RAD) modeling workshop proceedings
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.science.org/doi/10.1126/science.aah6849" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Redox stratification of an ancient lake in Gale crater, Mars
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2016JE005187" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Visible/near-infrared spectral diversity from in situ observations of the Bagnold Dune Field sands in Gale Crater, Mars
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2016JE005133" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Compositional variations in sands of the Bagnold Dunes, Gale crater, Mars, from visible-shortwave infrared spectroscopy and comparison with ground truth from the Curiosity rover
                                    </p>
                                </div>
                            </a>
                            <a href="https://journals.sagepub.com/doi/full/10.1177/0003702816685095" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Matrix Effects in Quantitative Analysis of Laser-Induced Breakdown Spectroscopy (LIBS) of Rock Powders Doped with Cr, Mn, Ni, Zn, and Co
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2016EA000252" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>The Mars Science Laboratory (MSL) Mast cameras and Descent imager: Investigation and instrument descriptions
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S0019103516302949" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Classification scheme for sedimentary and igneous rocks in Gale crater, Mars
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2017JE005445" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>A Two-Step K-Ar Experiment on Mars: Dating the Diagenetic Formation of Jarosite from Amazonian Groundwaters
                                    </p>
                                </div>
                            </a>
                            <a href="https://link.springer.com/article/10.1007/s11214-017-0360-x" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>The Modern Near-Surface Martian Climate: A Review of In-situ Meteorological Data from Viking to Curiosity
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S2214552417300081" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>The radiation environment on the surface of Mars – Numerical calculations of the galactic component with GEANT4/PLANETOCOSMICS
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S2214552417300111" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>The radiation environment on the surface of Mars - Summary of model calculations and comparison to RAD data
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2017JE005280" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>A rover's geologic field campaign: Exploration of the Kimberley by Curiosity
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S0032063317303215" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>UV production of methane from surface and sedimenting IDPs on Mars in light of REMS data and with insights for TGO
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S0019103516305346" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Chemistry of diagenetic features analyzed by ChemCam at Pahrump Hills, Gale crater, Mars
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S0019103516304699" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Winds measured by the Rover Environmental Monitoring Station (REMS) during the Mars Science Laboratory (MSL) rover's Bagnold Dunes Campaign and comparison with numerical modeling using MarsWRF
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2017JE005268" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>APXS-derived chemistry of the Bagnold dune sands: Comparisons with Gale Crater soils and the global Martian average
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2016JE005201" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Alkali trace elements in Gale crater, Mars, with ChemCam: Calibration update and geological implications
                                    </p>
                                </div>
                            </a>
                            <a href="https://analyticalsciencejournals.onlinelibrary.wiley.com/doi/full/10.1002/xrs.2743" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Combined X-ray diffraction and alpha particle X-ray spectrometer analysis of geologic materials
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/pii/S0012821X17302005" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Mineralogy of an ancient lacustrine mudstone succession from the Murray formation, Gale crater, Mars
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S0584854717301854" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Roughness effects on the hydrogen signal in laser-induced breakdown spectroscopy
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S0584854717300769" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Quantification of water content by laser induced breakdown spectroscopy on Mars
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2016JE005200" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Geologic overview of the Mars Science Laboratory rover mission at the Kimberley, Gale crater, Mars
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2017JE005259" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Reply to comment by Fries on “Cometary origin of atmospheric methane variations on Mars unlikely”
                                    </p>
                                </div>
                            </a>
                            <a href="https://pubs.geoscienceworld.org/gsa/geology/article-abstract/45/1/7/191568/Fluidized-sediment-pipes-in-Gale-crater-Mars-and?redirectedFrom=fulltext" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Fluidized-sediment pipes in Gale crater, Mars, and possible Earth analogs </p>
                                </div>
                            </a>
                            <a href="https://onlinelibrary.wiley.com/doi/full/10.1111/sed.12318" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Encounters with an unearthly mudstone: Understanding the first mudstone found on Mars
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2016JE005195" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Sorting out compositional trends in sedimentary rocks of the Bradbury group (Aeolis Palus), Gale crater, Mars
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2016GL072199" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>The nitrate/(per)chlorate relationship on Mars
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2017JE005275" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Aeolian saltation on Mars at low wind speeds
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2016JE005225" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Evolved gas analyses of sedimentary rocks and eolian sediment in Gale Crater, Mars: Results of the Curiosity rover's sample analysis at Mars instrument from Yellowknife Bay to the Namib Dune
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.cambridge.org/core/journals/international-journal-of-astrobiology/article/abs/measurements-of-oxychlorine-species-on-mars/2C0080C9CBAA64ED6059E52DEDE1F811" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Measurements of Oxychlorine species on Mars</p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S0019103517302567" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Results from the dynamic albedo of neutrons (DAN) passive mode experiment: Yellowknife Bay to Amargosa Valley (Sols 201–753)
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S001910351730057X" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Analysis of wind-induced dynamic pressure fluctuations during one and a half Martian years at Gale Crater
                                    </p>
                                </div>
                            </a>
                            <a href="https://analyticalsciencejournals.onlinelibrary.wiley.com/doi/full/10.1002/xrs.2755" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Modeling and mitigation of sample relief effects applied to chemistry measurements by the Mars Science Laboratory Alpha Particle X-ray Spectrometer
                                    </p>
                                </div>
                            </a>
                            <a href="https://pubs.aip.org/physicstoday/article/70/3/34/415979/Our-changing-view-of-MarsThe-orbiters-landers-and" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Our changing view of Mars </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S001910351630344X" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Thermophysical properties along Curiosity's traverse in Gale crater, Mars, derived from the REMS ground temperature sensor
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2017GL072589" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Determination of dust aerosol particle size at Gale Crater using REMS UVS and Mastcam measurements
                                    </p>
                                </div>
                            </a>
                            <a href="https://pubs.geoscienceworld.org/msa/ammin/article/102/6/1202/353619/Visible-to-near-infrared-MSL-Mastcam-multispectral" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Visible to near-infrared MSL/Mastcam multispectral imaging: Initial results from select high-interest science targets within Gale Crater, Mars </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S0019103516303724" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Centimeter to decimeter hollow concretions and voids in Gale Crater sediments, Mars
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/pii/S0012821X17302182" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Multiple stages of aqueous alteration along fractures in mudstone and sandstone strata in Gale Crater, Mars
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

export default PapersFromSeventeen;
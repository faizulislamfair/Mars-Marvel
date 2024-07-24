import React from 'react';
import { Link } from 'react-router-dom';

const PapersFromNineteen = () => {
    return (
        <div>
            <div className='w-full grid grid-cols-1 place-items-center'>
                <div className='max-w-[1240px] mx-auto px-2'>
                    <div className='flex flex-row justify-between p-5 mb-2'>
                        <Link to='/research_on_mars/research_paper'>
                            <img className='xs:hidden md:block translate-x-5' src="/arrow_left.svg" alt="" />
                        </Link>
                        <h3 className='text-3xl text-center text-[#E5DBCC] md:translate-x-10'>2019</h3>
                        <Link to='/'>
                            <h3 className='xs:hidden md:block text-[#E5DBCC] text-xl font-light -translate-x-12'>Mars Marvel</h3>
                        </Link>
                    </div>
                    <img src="/divider.svg" className='xs:hidden md:block opacity-50 translate-x-10' alt="" />
                    <br />
                    <div className='container mx-auto grid grid-cols-1 place-items-center justify-items-center'>
                        <div className='grid xs:grid-cols-1 justify-items-center gap-10 m-12'>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S001910351830410X" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>A look back: The drilling campaign of the Curiosity rover during the Mars Science Laboratory's Prime Mission
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/pii/S0016703718306616" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Alteration trends and geochemical source region characteristics preserved in the fluviolacustrine sedimentary record of Gale crater, Mars
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2019JE005973" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Role of the Tenax® Adsorbent in the Interpretation of the EGA and GC-MS Analyses Performed With the Sample Analysis at Mars in Gale Crater
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S0168583X1930151X" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>A re-examination of the fundamental parameters approach to calibration of the Curiosity rover alpha particle X-ray spectrometer
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S0584854718305081" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Listening to laser sparks: a link between Laser-Induced Breakdown Spectroscopy, acoustic measurements and crater morphology
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.liebertpub.com/doi/10.1089/ast.2018.1871" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>In Situ Geochronology on Mars and the Development of Future Instrumentation
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S0032063318302010" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Constraints on Mars Aphelion Cloud Belt phase function and ice crystal geometries
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S0019103518304469" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Solid-solid hydration and dehydration of Mars-relevant chlorine salts: Implications for Gale Crater and RSL locations
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2019GL083444" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Evidence for Late Alluvial Activity in Gale Crater, Mars
                                    </p>
                                </div>
                            </a>
                            <a href="https://iopscience.iop.org/article/10.3847/2041-8213/ab3ec2" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>The Pivot Energy of Solar Energetic Particles Affecting the Martian Surface Radiation Environment
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2018GL080839" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Mars Science Laboratory Observations of the 2018/Mars Year 34 Global Dust Storm
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S0032063318304458" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>The CO<sub>2</sub> inventory on Mars
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2018EA000482" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Mineral-Filled Fractures as Indicators of Multigenerational Fluid Flow in the Pahrump Hills Member of the Murray Formation, Gale Crater, Mars
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2019JE006125" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Extensive Polygonal Fracture Network in Siccar Point group Strata: Fracture Mechanisms and Implications for Fluid Circulation in Gale Crater, Mars
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2019GL084407" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Large Dust Aerosol Sizes Seen During the 2018 Martian Global Dust Event by the Curiosity Rover
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.science.org/doi/10.1126/science.aat0738" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>A surface gravity traverse on Mars indicates low bedrock density at Gale crater
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S001910351830174X" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Chemical alteration of fine-grained sedimentary rocks at Gale crater
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.annualreviews.org/doi/abs/10.1146/annurev-earth-053018-060332" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>The Sedimentary Cycle on Early Mars
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S0021967319303486" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Performance of the SAM gas chromatographic columns under simulated flight operating conditions for the analysis of chlorohydrocarbons on Mars
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/pii/S0019103518306894" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Distribution of primary and secondary features in the Pahrump Hills outcrop (Gale crater, Mars) as seen in a Mars Descent Imager (MARDI) “sidewalk” mosaic
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S0019103517306000" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Vertical and horizontal heterogeneity of atmospheric dust loading in northern Gale Crater, Mars
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.nature.com/articles/s41561-019-0313-y" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Methane seasonal cycle at Gale Crater on Mars consistent with regolith adsorption and diffusion
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2019GL083800" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>The Methane Diurnal Variation and Microseepage Flux at Gale Crater, Mars as Constrained by the ExoMars Trace Gas Orbiter and Curiosity Observations
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2018JE005852" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Abiotic Input of Fixed Nitrogen by Bolide Impacts to Gale Crater During the Hesperian: Insights From the Mars Science Laboratory
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2019JE006082" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>MarsWRF Convective Vortex and Dust Devil Predictions for Gale Crater Over 3 Mars Years and Comparison With MSL-REMS Observations
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S0019103518304779" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Copper enrichments in the Kimberley formation in Gale crater, Mars: Evidence for a Cu deposit at the source
                                    </p>
                                </div>
                            </a>
                            <a href="https://pubs.acs.org/doi/10.1021/acsearthspacechem.8b00173" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Reaction of Akaganeite with Mars-Relevant Anions
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2018JE005824" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Comparing MSL Curiosity Rover TLS-SAM Methane Measurements With Mars Regional Atmospheric Modeling System Atmospheric Transport Experiments
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.nature.com/articles/s41561-019-0458-8" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>An interval of high salinity in ancient Gale crater lake on Mars
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S0019103517307753" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Using ChemCam LIBS data to constrain grain size in rocks on Mars: Proof of concept and application to rocks at Yellowknife Bay and Pahrump Hills, Gale crater
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S0019103518304081" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Investigating the role of anhydrous oxidative weathering on sedimentary rocks in the Transantarctic Mountains and implications for the modern weathering of sedimentary lithologies on Mars
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S001910351830321X" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Annual and diurnal water vapor cycles at Curiosity from observations and column modeling
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S0019103518307887" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Water vapor mixing ratios and air temperatures for three martian years from Curiosity
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S0019103518307760" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Contribution of a martian atmosphere to laser-induced breakdown spectroscopy (LIBS) data and testing its emission characteristics for normalization applications
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2019GL083788" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Visibility and Line-of-Sight Extinction Estimates in Gale Crater During the 2018/MY34 Global Dust Storm
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2019GL083788" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Visibility and Line-of-Sight Extinction Estimates in Gale Crater During the 2018/MY34 Global Dust Storm
                                    </p>
                                </div>
                            </a>
                            <a href="https://onlinelibrary.wiley.com/doi/10.1111/sed.12558" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Evidence for plunging river plume deposits in the Pahrump Hills member of the Murray formation, Gale crater, Mars
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S0019103518305979" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Late-stage diagenetic concretions in the Murray formation, Gale crater, Mars
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/B978012804191800012X" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Chapter 12 - Volatile Detections in Gale Crater Sediment and Sedimentary Rock: Results from the Mars Science Laboratory’s Sample Analysis at Mars Instrument</p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S001910351830678X" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Mars Science Laboratory Dynamic Albedo of Neutrons passive mode data and results from sols 753 to 1292: Pahrump Hills to Naukluft Plateau
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2019GL082764" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Mars Science Laboratory Observations of Chloride Salts in Gale Crater, Mars
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2019JE006175" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Seasonal Variations in Atmospheric Composition as Measured in Gale Crater, Mars
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S0094576519312445" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Mars Science Laboratory Alpha Particle X-ray spectrometer trace elements: Situational sensitivity to Co, Ni, Cu, Zn, Ga, Ge, and Br
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S0168583X18307626?via%3Dihub" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Empirical simulations for further characterization of the Mars Science Laboratory Alpha Particle X-ray Spectrometer: An introduction to the ACES program
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S001910351730790X" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Gale surface wind characterization based on the Mars Science Laboratory REMS dataset. Part I: Wind retrieval and Gale's wind speeds and directions
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S0019103517307911" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Gale surface wind characterization based on the Mars Science Laboratory REMS dataset. Part II: Wind probability distributions
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2019JE005985" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Effects of the MY34/2018 Global Dust Storm as Measured by MSL REMS in Gale Crater
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.liebertpub.com/doi/10.1089/ast.2018.1819" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Recovery of Fatty Acids from Mineralogic Mars Analogs by TMAH Thermochemolysis for the Sample Analysis at Mars Wet Chemistry Experiment on the Curiosity Rover
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S221455241930046X" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Measurements of radiation quality factor on Mars with the Mars Science Laboratory Radiation Assessment Detector
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

export default PapersFromNineteen;
import React from 'react';
import { Link } from 'react-router-dom';

const PapersFromTwentyOne = () => {
    return (
        <div>
            <div className='w-full grid grid-cols-1 place-items-center'>
                <div className='max-w-[1240px] mx-auto px-2'>
                    <div className='flex flex-row justify-between p-5 mb-2'>
                        <Link to='/research_on_mars/research_paper'>
                            <img className='xs:hidden md:block translate-x-5' src="/arrow_left.svg" alt="" />
                        </Link>
                        <h3 className='text-3xl text-center text-[#E5DBCC] md:translate-x-10'>2021</h3>
                        <Link to='/'>
                            <h3 className='xs:hidden md:block text-[#E5DBCC] text-xl font-light -translate-x-12'>Mars Marvel</h3>
                        </Link>
                    </div>
                    <img src="/divider.svg" className='xs:hidden md:block opacity-50 translate-x-10' alt="" />
                    <br />
                    <div className='container mx-auto grid grid-cols-1 place-items-center justify-items-center'>
                        <div className='grid xs:grid-cols-1 justify-items-center gap-10 m-12'>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2020JE006554" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>A Rock Record of Complex Aeolian Bedforms in a Hesperian Desert Landscape: The Stimson Formation as Exposed in the Murray Buttes, Gale Crater, Mars
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2019JE006311" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Diagenesis Revealed by Fine-Scale Features at Vera Rubin Ridge, Gale Crater, Mars
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.science.org/doi/10.1126/science.abg5449" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Brine-driven destruction of clay minerals in Gale crater, Mars
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.mdpi.com/2072-4292/13/20/4068" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Long-Distance 3D Reconstructions Using Photogrammetry with Curiosity’s ChemCam Remote Micro-Imager in Gale Crater (Mars)
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.mdpi.com/2075-1729/11/6/539" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Origin of Life on Mars: Suitability and Opportunities
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.mdpi.com/2075-163X/11/5/475" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>A Review of Sample Analysis at Mars-Evolved Gas Analysis Laboratory Analog Work Supporting the Presence of Perchlorates and Chlorates in Gale Crater, Mars
                                    </p>
                                </div>
                            </a>
                            <a href="https://link.springer.com/referenceworkentry/10.1007/978-3-642-27833-4_5552-1" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Mars Science Laboratory
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S0019103521001615" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Laser-Induced Breakdown Spectroscopy (LIBS) characterization of granular soils: Implications for ChemCam analyses at Gale crater, Mars
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S0012821X20306257?dgcid=author" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Deposition and erosion of a Light-Toned Yardang-forming unit of Mt Sharp, Gale crater, Mars
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.mdpi.com/2072-4292/13/21/4296" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Recognition of Sedimentary Rock Occurrences in Satellite and Aerial Images of Other Worlds—Insights from Mars
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2021JE006851" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Natural Radiation Shielding on Mars Measured With the MSL/RAD Instrument
                                    </p>
                                </div>
                            </a>
                            <a href="http://www.minsocam.org/msa/ammin/toc/2021/open_access/AM106P0964.pdf" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Synthesis and characterization of Fe(III)-Fe(II)-Mg-Al smectite solid solutions and
                                        implications for planetary science</p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/B978012820245600001X" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Chapter 1 - Resolving Martian enigmas, discovering new ones: the case of Curiosity and Gale crater</p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S0584854721001804" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Quantification of manganese for ChemCam Mars and laboratory spectra using a multivariate model
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2021JE006907" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Gravity Wave Observations by the Mars Science Laboratory REMS Pressure Sensor and Comparison With Mesoscale Atmospheric Modeling With MarsWRF
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S0019103520305406" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Modelling martian dust devils using in-situ wind, pressure, and UV radiation measurements by Mars Science Laboratory
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2020JE006803" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Pyrolysis of Oxalate, Acetate, and Perchlorate Mixtures and the Implications for Organic Salts on Mars
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S0012821X20306117" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Billion-year exposure ages in Gale crater (Mars) indicate Mount Sharp formed before the Amazonian period
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.science.org/doi/10.1126/science.abl4051" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Perseverance rover reveals an ancient delta-lake system and flood deposits at Jezero crater, Mars
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2020JE006804" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>The Surface Energy Budget at Gale Crater During the First 2500 Sols of the Mars Science Laboratory Mission
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.nature.com/articles/s41550-021-01507-9" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Organic molecules revealed in Mars’s Bagnold Dunes by Curiosity’s derivatization experiment
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2021EA001903" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Clustering Supported Classification of ChemCam Data From Gale Crater, Mars
                                    </p>
                                </div>
                            </a>
                            <a href="https://pubs.geoscienceworld.org/gsa/geology/article/49/7/842/596028/Alternating-wet-and-dry-depositional-environments" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Alternating wet and dry depositional environments recorded in the stratigraphy of Mount Sharp at Gale crater, Mars </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S001910352030590X" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Water vapor adsorption on Mars
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.science.org/doi/10.1126/science.abc7717" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Long-term drying of Mars by sequestration of ocean-scale volumes of water in the crust
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.mdpi.com/2075-163X/11/9/986" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Merging Perspectives on Secondary Minerals on Mars: A Review of Ancient Water-Rock Interactions in Gale Crater Inferred from Orbital and In-Situ Observations
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2020JE006372" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Updated Perspectives and Hypotheses on the Mineralogy of Lower Mt. Sharp, Mars, as Seen From Orbit
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2020JE006769" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Nanoscale Variations in Natural Amorphous and Nanocrystalline Weathering Products in Mafic to Intermediate Volcanic Terrains on Earth: Implications for Amorphous Detections on Mars
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2020JE006782" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>X-Ray Amorphous Components in Sedimentary Rocks of Gale Crater, Mars: Evidence for Ancient Formation and Long-Lived Aqueous Activity
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2020JE006530" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Source-to-Sink Terrestrial Analogs for the Paleoenvironment of Gale Crater, Mars
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.mdpi.com/2075-163X/11/8/847" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>A Review of the Phyllosilicates in Gale Crater as Detected by the CheMin Instrument on the Mars Science Laboratory, Curiosity Rover
                                    </p>
                                </div>
                            </a>
                            <a href="https://onlinelibrary.wiley.com/doi/10.1111/maps.13748" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Early diagenesis at and below Vera Rubin ridge, Gale crater, Mars
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/pii/S0019103521003171" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>The ultraviolet radiation environment and shielding in pit craters and cave skylights on Mars
                                    </p>
                                </div>
                            </a>
                            <a href="https://progearthplanetsci.springeropen.com/articles/10.1186/s40645-021-00445-4" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>A three-dimensional atmospheric dispersion model for Mars
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2021JE006958" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Constraints on Emission Source Locations of Methane Detected by Mars Science Laboratory
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.aanda.org/articles/aa/full_html/2021/06/aa40030-20/aa40030-20.html" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Day-night differences in Mars methane suggest nighttime containment at Gale crater★
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S0584854721002044" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Improving ChemCam LIBS long-distance elemental compositions using empirical abundance trends
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2020JE006569" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Formation of Tridymite and Evidence for a Hydrothermal History at Gale Crater, Mars
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

export default PapersFromTwentyOne;
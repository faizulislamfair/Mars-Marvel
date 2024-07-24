import React from 'react';
import { Link } from 'react-router-dom';

const PapersFromSixteen = () => {
    return (
        <div>
            <div className='w-full grid grid-cols-1 place-items-center'>
                <div className='max-w-[1240px] mx-auto px-2'>
                    <div className='flex flex-row justify-between p-5 mb-2'>
                        <Link to='/research_on_mars/research_paper'>
                            <img className='xs:hidden md:block translate-x-5' src="/arrow_left.svg" alt="" />
                        </Link>
                        <h3 className='text-3xl text-center text-[#E5DBCC] md:translate-x-10'>2016</h3>
                        <Link to='/'>
                            <h3 className='xs:hidden md:block text-[#E5DBCC] text-xl font-light -translate-x-12'>Mars Marvel</h3>
                        </Link>
                    </div>
                    <img src="/divider.svg" className='xs:hidden md:block opacity-50 translate-x-10' alt="" />
                    <br />
                    <div className='container mx-auto grid grid-cols-1 place-items-center justify-items-center'>
                        <div className='grid xs:grid-cols-1 justify-items-center gap-10 m-12'>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2016JE005079" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Aqueous history of Mars as inferred from landed mission measurements of rocks, soils, and water ice
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2015GL066675" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>A global Mars dust composition refined by the Alpha-Particle X-ray Spectrometer in Gale Crater
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S0168583X16302993" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Non-linearity issues and multiple ionization satellites in the PIXE portion of spectra from the Mars alpha particle X-ray spectrometer
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S0012821X16304514" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>In situ measurement of atmospheric krypton and xenon on Mars with Mars Science Laboratory
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S0019103515004650" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Observations of an aeolian landscape: From surface to orbit in Gale Crater
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S0584854716301197" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Comparison of univariate and multivariate models for prediction of major and minor elements from laser-induced breakdown spectra with and without masking
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S2214552416300050" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Charged particle spectra measured during the transit to Mars with the Mars Science Laboratory Radiation Assessment Detector (MSL/RAD)
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S0012821X15007761" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Light and variable <sup>37</sup>Cl/<sup>35</sup>Cl ratios in rocks from Gale Crater, Mars: Possible signature of perchlorate
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2016JE005095" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>The stratigraphy and evolution of lower Mount Sharp from spectral, morphological, and thermophysical orbital data sets
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2015JE004884" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Magnesium sulfate as a key mineral for the detection of organic molecules on Mars using pyrolysis
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S0019103515005850" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Atmospheric tides in Gale Crater, Mars
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S0019103516300902" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>ChemCam investigation of the John Klein and Cumberland drill holes and tailings, Gale crater, Mars
                                    </p>
                                </div>
                            </a>
                            <a href="https://pubs.geoscienceworld.org/msa/ammin/article-abstract/101/7/1501/283874/Constraints-on-iron-sulfate-and-iron-oxide?redirectedFrom=fulltext" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Constraints on iron sulfate and iron oxide mineralogy from ChemCam visible/near-infrared reflectance spectroscopy of Mt. Sharp basal units, Gale Crater, Mars </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2016JE005027" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Convective vortices and dust devils at the MSL landing site: Annual variability
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S027311771500914X" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>The first Martian year of cloud activity from Mars Science Laboratory (sol 0–800)
                                    </p>
                                </div>
                            </a>
                            <a href="https://angeo.copernicus.org/articles/34/133/2016/angeo-34-133-2016.pdf" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Electron/positron measurements obtained with the Mars Science
                                        Laboratory Radiation Assessment Detector on the surface of Mars</p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2016GL069109" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Oxidation of manganese in an ancient aquifer, Kimberley formation, Gale crater, Mars
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.science.org/doi/10.1126/science.aaf3206" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Large wind ripples on Mars: A record of atmospheric evolution
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2015JE004946" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Observation of {'>'} 5 wt % zinc at the Kimberley outcrop, Gale crater, Mars
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2015JE004987" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>The potassic sedimentary rocks in Gale Crater, Mars, as seen by ChemCam on board Curiosity
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2015JE004960" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Hydrogen and chlorine abundances in the Kimberley formation of Gale crater measured by the DAN instrument on board the Mars Science Laboratory Curiosity rover
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2015JE004977?campaign=wolacceptedarticle" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Composition of conglomerates analyzed by the Curiosity rover: Implications for Gale Crater crust and sediment sources
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/pii/S0019103515005540" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Likely frost events at Gale crater: Analysis from MSL/REMS measurements
                                    </p>
                                </div>
                            </a>
                            <a href="https://revistas.ucm.es/index.php/FITE/article/view/53902" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Análisis de las condiciones ambientales en el cráter Gale a partir de mediciones REMS/MSL
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.swsc-journal.org/articles/swsc/abs/2016/01/swsc150074/swsc150074.html" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>The Martian surface radiation environment – a comparison of models and MSL/RAD measurements
                                    </p>
                                </div>
                            </a>
                            <a href="https://pubs.rsc.org/en/content/articlelanding/2016/ja/c5ja00417a#!divAbstract" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>ChemCam activities and discoveries during the nominal mission of the Mars Science Laboratory in Gale crater, Mars	</p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S0584854716300209" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Application of distance correction to ChemCam laser-induced breakdown spectroscopy measurements
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S0032063316300253" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>In situ analysis of martian regolith with the SAM experiment during the first mars year of the MSL mission: Identification of organic molecules by gas chromatography from laboratory measurements
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2015JE004939" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Potential precursor compounds for chlorohydrocarbons detected in Gale Crater, Mars, by the SAM instrument suite on the Curiosity Rover
                                    </p>
                                </div>
                            </a>
                            <a href="https://link.springer.com/article/10.1134/S1063773716040058" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Active neutron sensing of the Martian surface with the DAN experiment onboard the NASA “Curiosity” Mars rover: Two types of soil with different water content in the gale crater
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S0019103515003978" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>A full martian year of line-of-sight extinction within Gale Crater, Mars as acquired by the MSL Navcam through sol 900
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S0273117716302745" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Transient atmospheric effects of the landing of the Mars Science Laboratory rover: The emission and dissipation of dust and carbazic acid
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.pnas.org/doi/full/10.1073/pnas.1607098113" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Silicic volcanism on Mars evidenced by tridymite in high-SiO<sub>2</sub> sedimentary rock at Gale crater
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S001910351630121X" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Origin and significance of decameter-scale polygons in the lower Peace Vallis fan of Gale crater, Mars
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2015JE004905" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Sequence and relative timing of large lakes in Gale crater (Mars) after the formation of Mount Sharp
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S0016703716303118" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Synthesis of akaganeite in the presence of sulfate: Implications for akaganeite formation in Yellowknife Bay, Gale Crater, Mars
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S0168583X15012641" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Refinement of the Compton–Rayleigh scatter ratio method for use on the Mars Science Laboratory alpha particle X-ray spectrometer: II – Extraction of invisible element content
                                    </p>
                                </div>
                            </a>
                            <a href="https://revistas.ucm.es/index.php/FITE/article/view/53901" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Meteorología mesoescalar en Marte
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S0019103516001548" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>The meteorology of Gale crater as determined from rover environmental monitoring station observations and numerical modeling. Part I: Comparison of model simulations with observations
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S0019103516000531" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>The meteorology of Gale Crater as determined from Rover Environmental Monitoring Station observations and numerical modeling. Part II: Interpretation
                                    </p>
                                </div>
                            </a>
                            <a href="https://pubs.geoscienceworld.org/msa/ammin/article/101/3/678/40543/" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Recognizing sulfate and phosphate complexes chemisorbed onto nanophase weathering products on Mars using in-situ and remote observationsk </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S0012821X16304010" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Hydration state of calcium sulfates in Gale crater, Mars: Identification of bassanite veins
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2016JE005076" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Cometary origin of atmospheric methane variations on Mars unlikely
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S0019103515004741" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>The diurnal water cycle at Curiosity: Role of exchange with the regolith
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S0024493716000955" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Magmatic complexity on early Mars as seen through a combination of orbital, in-situ and meteorite data
                                    </p>
                                </div>
                            </a>
                            <a href="https://onlinelibrary.wiley.com/doi/full/10.1111/maps.12668" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Fluids during diagenesis and sulfate vein formation in sediments at Gale crater, Mars
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S0019103516304158" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Aerosol optical depth as observed by the Mars Science Laboratory REMS UV photodiodes
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S0019103516000932" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Comparing orbiter and rover image-based mapping of an ancient sedimentary environment, Aeolis Palus, Gale crater, Mars
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2016JE005055" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Potassium-rich sandstones within the Gale impact crater, Mars: The APXS perspective
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2015JE004932" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Mineralogy, provenance, and diagenesis of a potassic basaltic sandstone on Mars: CheMin X-ray diffraction of the Windjana sample (Kimberley area, Gale Crater)
                                    </p>
                                </div>
                            </a>
                            <a href="https://analyticalsciencejournals.onlinelibrary.wiley.com/doi/abs/10.1002/xrs.2681" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Deconvolution of distinct lithology chemistry through oversampling with the Mars Science Laboratory Alpha Particle X-Ray Spectrometer
                                    </p>
                                </div>
                            </a>
                            <a href="https://eos.org/science-updates/where-curiosity-has-taken-us?utm_source=feedly&utm_medium=rss&utm_content=where-curiosity-has-taken-us" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Where Curiosity Has Taken Us
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2016JE005017" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Discordant K-Ar and young exposure dates for the Windjana sandstone, Kimberley, Gale Crater, Mars
                                    </p>
                                </div>
                            </a>
                            <a href="https://revistas.ucm.es/index.php/FITE/article/view/53900" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Seasonal and interannual variability of solar radiation at the landing coordinates of Spirit, Opportunity and Curiosity

                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2016JE005078" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Perchlorate formation on Mars through surface radiolysis-initiated atmospheric chemistry: A potential mechanism
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/pii/S0019103516001330" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Characteristics of pebble and cobble-sized clasts along the Curiosity rover traverse from sol 100 to 750: Terrain types, potential sources, and transport mechanisms
                                    </p>
                                </div>
                            </a>
                            <a href="https://gi.copernicus.org/articles/5/205/2016/" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>MAHLI on Mars: lessons learned operating a geoscience camera on a landed payload robotic arm
                                    </p>
                                </div>
                            </a>
                            <a href="https://link.springer.com/article/10.1007/s11214-016-0303-y" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Calibration and Characterization of the Radiation Assessment Detector (RAD) on Curiosity
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

export default PapersFromSixteen;
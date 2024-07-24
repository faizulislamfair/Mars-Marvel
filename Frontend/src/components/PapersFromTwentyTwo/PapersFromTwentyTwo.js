import React from 'react';
import { Link } from 'react-router-dom';

const PapersFromTwentyTwo = () => {
    return (
        <div>
            <div className='w-full'>
                <div className='max-w-[1240px] mx-auto px-2'>
                    <div className='flex flex-row justify-between p-5 mb-2'>
                        <Link to='/research_on_mars/research_paper'>
                            <img className='xs:hidden md:block translate-x-5' src="/arrow_left.svg" alt="" />
                        </Link>
                        <h3 className='text-3xl text-center text-[#E5DBCC] md:translate-x-10'>2022</h3>
                        <Link to='/'>
                            <h3 className='xs:hidden md:block text-[#E5DBCC] text-xl font-light -translate-x-12'>Mars Marvel</h3>
                        </Link>
                    </div>
                    <img src="/divider.svg" className='xs:hidden md:block opacity-50 translate-x-10' alt="" />
                    <br />
                    <div className='container mx-auto grid grid-cols-1 place-items-center justify-items-center'>
                        <div className='grid xs:grid-cols-1 justify-items-center gap-10 m-12'>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2020JE006734" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Diurnal Variability in Aeolian Sediment Transport at Gale Crater, Mars
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2021JE007023" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Evidence for Fluctuating Wind in Shaping an Ancient Martian Dune Field: The Stimson Formation at the Greenheugh Pediment, Gale Crater

                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2022GL100866" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Planetary Waves Traveling Between Mars Science Laboratory and Mars 2020

                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2021JE007100" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>An Insight Into Ancient Aeolian Processes and Post-Noachian Aqueous Alteration in Gale Crater, Mars, Using ChemCam Geochemical Data From the Greenheugh Capping Unit

                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2021JE007171" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Manganese Mobility in Gale Crater, Mars: Leached Bedrock and Localized Enrichments

                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2021JE007093" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>From Lake to River: Documenting an Environmental Transition Across the Jura/Knockfarril Hill Members Boundary in the Glen Torridon Region of Gale Crater (Mars)

                                    </p>
                                </div>
                            </a>
                            <a href="https://pubs.geoscienceworld.org/sepm/jsedres/article-abstract/92/12/1071/619230/Barform-deposits-of-the-Carolyn-Shoemaker?redirectedFrom=fulltext&casa_token=fhXLb5yqt-EAAAAA:6L8zxbMgBRBszMRWDx3DC9ZgNM4_dpek20GP4S0I-peGTfVZRErcLFTp2Royfx60OyzOWvk" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Barform deposits of the Carolyn Shoemaker formation, Gale crater, Mars
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.nature.com/articles/s41561-022-01058-2" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Martian landscapes of fluvial ridges carved from ancient sedimentary basin fill

                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2021JE007076" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>CRISM-Based High Spatial Resolution Thermal Inertia Mapping Along Curiosity's Traverses in Gale Crater

                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2022GL098755" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Evidence for Amorphous Sulfates as the Main Carrier of Soil Hydration in Gale Crater, Mars

                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2021JE007103" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Bedrock Geochemistry and Alteration History of the Clay-Bearing Glen Torridon Region of Gale Crater, Mars

                                    </p>
                                </div>
                            </a>
                            <a href="https://www.hindawi.com/journals/aa/2022/6672456/" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Testing Correspondence between Areas with Hydrated Minerals, as Observed by CRISM/MRO, and Spots of Enhanced Subsurface Water Content, as Found by DAN along the Traverse of Curiosity

                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S0019103521003705" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Water uptake by chlorate salts under Mars-relevant conditions

                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2022JE007408" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Geology and Stratigraphic Correlation of the Murray and Carolyn Shoemaker Formations Across the Glen Torridon Region, Gale Crater, Mars

                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2020JE006600" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>On an Extensive Late Hydrologic Event in Gale Crater as Indicated by Water-Rich Fracture Halos

                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2021JE007097" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Overview of the Morphology and Chemistry of Diagenetic Features in the Clay-Rich Glen Torridon Unit of Gale Crater, Mars

                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2022JE007280" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Sedimentological and Geochemical Perspectives on a Marginal Lake Environment Recorded in the Hartmann's Valley and Karasburg Members of the Murray Formation, Gale Crater, Mars

                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2022JE007357" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Mineralogy of a Possible Ancient Lakeshore in the Sutton Island Member of Mt. Sharp, Gale Crater, Mars, From Mastcam Multispectral Images
                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2021JE007126" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Active Ground Patterns Near Mars' Equator in the Glen Torridon Region of Gale Crater

                                    </p>
                                </div>
                            </a>
                            <a href="https://www.pnas.org/doi/10.1073/pnas.2115651119" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Depleted carbon isotope compositions observed at Gale crater, Mars

                                    </p>
                                </div>
                            </a>
                            <a href="https://www.pnas.org/doi/10.1073/pnas.2207901119" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Reply to Schoell: Implications of a temperature trend in methane evolved from Cumberland during Mars evolved gas analyses experiments

                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2021JE006848" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Canyon Wall and Floor Debris Deposits in Aeolis Mons, Mars

                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/pii/S0032063322001490" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Spectrophotometric properties of materials from the Mars Science Laboratory at Gale crater: 1. Bradbury Landing to Cooperstown

                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2021JE007095" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Characterization of Clasts in the Glen Torridon Region of Gale Crater Observed by the Mars Science Laboratory Curiosity Rover

                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/pii/S0019103522002421" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>The annual cycle of water vapor above gale crater as retrieved by CRISM and compared to ChemCam passive sky spectroscopy

                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2022JE007179" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Evolved Gas Analyses of Sedimentary Rocks From the Glen Torridon Clay-Bearing Unit, Gale Crater, Mars: Results From the Mars Science Laboratory Sample Analysis at Mars Instrument Suite

                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2021JE007107" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Sedimentary Organics in Glen Torridon, Gale Crater, Mars: Results From the SAM Instrument Suite and Supporting Laboratory Analyses

                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S0168900222000390" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Laboratory demonstration of space gamma-ray spectroscopy experiment with tags of Galactic cosmic rays for testing different types of Martian regolith

                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2022JE007327" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Water and Chlorine in the Martian Subsurface Along the Traverse of NASA's Curiosity Rover: 1. DAN Measurement Profiles Along the Traverse

                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2021JE007177" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Statistical Analysis of APXS-Derived Chemistry of the Clay-Bearing Glen Torridon Region and Mount Sharp Group, Gale Crater, Mars

                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S0016703722001612" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Effects of phosphorus on partial melting of the Martian Mantle and compositions of the Martian Crust

                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2022GL099639" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>An Evolved Early Crust Exposed on Mars Revealed Through Spectroscopy

                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/pii/S0012821X22003302" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Tridymite in a lacustrine mudstone in Gale Crater, Mars: Evidence for an explosive silicic eruption during the Hesperian

                                    </p>
                                </div>
                            </a>
                            <a href="https://www.liebertpub.com/doi/10.1089/ast.2021.0166" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Rapid Radiolytic Degradation of Amino Acids in the Martian Shallow Subsurface: Implications for the Search for Extinct Life
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/pii/S0012821X22001078" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>A mineralogical study of glacial flour from Three Sisters, Oregon: An analog for a cold and icy early Mars

                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2021JE007134" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Spectral Diversity of Rocks and Soils in Mastcam Observations Along the Curiosity Rover's Traverse in Gale Crater, Mars

                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2021JE007162" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Ancient Winds, Waves, and Atmosphere in Gale Crater, Mars, Inferred From Sedimentary Structures and Wave Modeling

                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2021JE007098" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>The Distribution of Clay Minerals and Their Impact on Diagenesis in Glen Torridon, Gale Crater, Mars

                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/pii/S0019103522000227" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Surface energy budget at Curiosity through observations and column modeling

                                    </p>
                                </div>
                            </a>
                            <a href="https://onlinelibrary.wiley.com/doi/10.1111/sed.13024" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Mars is a mirror – Understanding the Pahrump Hills mudstones from a perspective of Earth analogues

                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S0019103522001920" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Presence of clay minerals can obscure spectral evidence of Mg sulfates: implications for orbital observations of Mars

                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2021JE007128" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>X-Ray Amorphous Sulfur-Bearing Phases in Sedimentary Rocks of Gale Crater, Mars

                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2021JE007096" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Orbital and In-Situ Investigation of Periodic Bedrock Ridges in Glen Torridon, Gale Crater, Mars

                                    </p>
                                </div>
                            </a>
                            <a href="https://www.pnas.org/doi/abs/10.1073/pnas.2201139119" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Organic carbon concentrations in 3.5-billion-year-old lacustrine mudstones of Mars

                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2021JE007174" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>The Aeolian Environment in Glen Torridon, Gale Crater, Mars

                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2022JE007387" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Constraining Alteration Processes Along the Siccar Point Group Unconformity, Gale Crater, Mars: Results From the Sample Analysis at Mars Instrument

                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2021JE007178" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Alteration at the Base of the Siccar Point Unconformity and Further Evidence for an Alkaline Provenance at Gale Crater: Exploration of the Mount Sharp Group, Greenheugh Pediment Cap Rock Contact With APXS

                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2021JE007099" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Mars Science Laboratory CheMin Data From the Glen Torridon Region and the Significance of Lake-Groundwater Interactions in Interpreting Mineralogy and Sedimentary History

                                    </p>
                                </div>
                            </a>
                            <a href="https://books.google.com.bd/books?hl=en&lr=&id=fPmXEAAAQBAJ&oi=fnd&pg=PA298&ots=obJZQ3Dw8T&sig=kq-mbgGGsptR8L5SJmNDcbipYlo&redir_esc=y#v=onepage&q&f=false" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>In Situ X-ray Spectrometers in Space Exploration
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.sciencedirect.com/science/article/abs/pii/S0584854722000544" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Constraining the chemical depth profile of a manganese-rich surface layer in Gale crater, Mars

                                    </p>
                                </div>
                            </a>
                            <a href="https://link.springer.com/referenceworkentry/10.1007/978-3-642-27833-4_5552-1" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Mars Science Laboratory

                                    </p>
                                </div>
                            </a>
                            <a href="https://link.springer.com/article/10.1007/s11214-022-00882-7" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Mission Overview and Scientific Contributions from the Mars Science Laboratory Curiosity Rover After Eight Years of Surface Operations

                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2022JE007293" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Burial and Exhumation of Sedimentary Rocks Revealed by the Base Stimson Erosional Unconformity, Gale Crater, Mars

                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2022JE007345" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Thermophysical and Compositional Properties of Paleobedforms on Mars

                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2022JE007211" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Orbital Observations of a Marker Horizon at Gale Crater

                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2021JE007061" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>The Physical Properties and Geochemistry of Grains on Aeolian Bedforms at Gale Crater, Mars

                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2021JE007084" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Oxidized and Reduced Sulfur Observed by the Sample Analysis at Mars (SAM) Instrument Suite on the Curiosity Rover Within the Glen Torridon Region at Gale Crater, Mars

                                    </p>
                                </div>
                            </a>
                            <a href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2021JE007005" target='_blank' rel='noreferrer'>
                                <div className='bg-[#0E0E0E] text-[#E5DBCC] text-2xl p-5 font-bold rounded-xl hover:scale-105 ease-in duration-300'>
                                    <p>Mars Surface Pressure Oscillations as Precursors of Large Dust Storms Reaching Gale

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

export default PapersFromTwentyTwo;
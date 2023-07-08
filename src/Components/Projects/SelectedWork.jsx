import React from "react";
import { Link } from "react-router-dom";
import "./SelectedWork.scss";

export default class SelectedWork extends React.Component {
    render() {
        return (
            <div class="all-designs-section ux-preview wf-section" id="work">
                <div className="design-container w-container">
                    <div class="w-dyn-list">
                        <div role="list" class="w-dyn-items">
                        <div role="listitem" class="design-item w-dyn-item">
                                <Link to="/work/ptc" class="design-block-copy.ux-block.w-inline-block">
                                    <div class="project-copy">
                                        <div class="w-layout-grid grid-copy">
                                            <img src={process.env.PUBLIC_URL + '/img/ptc/PTC Thumbnail.png'} alt="Convergence Design System" class="design-image home-image"></img>
                                            <div id="project-descriptor">
                                                <h4 class="design-title project-title">
                                                    PTC Convergence
                                                </h4>
                                                <p class="paragraph-8">
                                                Overhauling the internal documentation site of an atomic design system. <br></br><br></br> Password-protected.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div role="listitem" class="design-item w-dyn-item">
                                <Link to="/work/covidsupport" class="design-block-copy.ux-block.w-inline-block">
                                    <div class="project-copy">
                                        <div class="w-layout-grid grid-copy">
                                            <img src={process.env.PUBLIC_URL + '/img/cs/CS thumbnail.png'} alt="COVIDSupport" class="design-image home-image"></img>
                                            <div id="project-descriptor">
                                                <h4 class="design-title project-title">
                                                    COVIDSupport
                                                </h4>
                                                <p class="paragraph-8">
                                                    Improving the quarantine experience for COVID-19 patients. <br></br>
                                                    <br></br> School project.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div role="listitem" class="design-item w-dyn-item">
                                <Link to="/work/climate-donor" class="design-block-copy.ux-block.w-inline-block">
                                    <div class="project-copy">
                                        <div class="w-layout-grid grid-copy">
                                            <img src={process.env.PUBLIC_URL + '/img/climate donor/Climate Donor Thumbnail.png'} alt="Climate Donor" class="design-image home-image"></img>
                                            <div id="project-descriptor">
                                                <h4 class="design-title project-title">
                                                    Climate Donor
                                                </h4>
                                                <p class="paragraph-8">
                                                    Designing a web portal for a nonprofit charity seeking to mitigate climate change through crowdfunding.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                           {/* <div role="listitem" class="design-item w-dyn-item">
                                <div class="project-nolink">
                                    <div class="w-layout-grid grid-copy">
                                        <img src={process.env.PUBLIC_URL + '/img/vandyhacks/VH thumbnail.png'} alt="VandyHacks VI Site" class="design-image home-image"></img>
                                        <div id="project-descriptor">
                                            <h4 class="design-title project-title">
                                                VandyHacks
                                            </h4>
                                            <p class="paragraph-8">
                                                I led visual design for a collegiate hackathon.<br></br>
                                                <br></br> Case study coming soon.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
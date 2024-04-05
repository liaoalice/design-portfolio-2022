import React from "react";
import { Link } from "react-router-dom";
import "./SelectedWork.scss";

export default class SelectedWork extends React.Component {
  render() {
    return (
      <section class="all-designs-section" id="work">
        <div className="w-container">
          <div class="w-dyn-list">
            <div role="list" class="w-dyn-items">
            <div role="listitem" class="design-item w-dyn-item">
                <Link to="/work/ptc-convergence" class="design-block-copy.ux-block.w-inline-block">
                  <div class="project-copy">
                    <div class="w-layout-grid grid-copy">
                      <img src={process.env.PUBLIC_URL + '/img/ptc/CDS Thumbnail.png'} alt="Collage of Convergence Design System Components" class="design-image home-image"></img>
                      <div id="project-descriptor">
                        <h3 class="design-title project-title">
                          Convergence Design System
                        </h3>
                        <p class="paragraph-8">
                          A set of practices and tools to help PTC teams create accessible and cohesive products.
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div role="listitem" class="design-item w-dyn-item">
                <Link to="/work/ptc-themer" class="design-block-copy.ux-block.w-inline-block">
                  <div class="project-copy">
                    <div class="w-layout-grid grid-copy">
                      <img src={process.env.PUBLIC_URL + '/img/ptc/PTC Themer Thumbnail.png'} alt="PTC Themer Thumbnail" class="design-image home-image slate-gray"></img>
                      <div id="project-descriptor">
                        <h3 class="design-title project-title">
                          PTC Themer
                        </h3>
                        <p class="paragraph-8">
                          A custom design tool to assist teams in migrating prototype files to a new theme.
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
                        <h3 class="design-title project-title">
                          Climate Donor
                        </h3>
                        <p class="paragraph-8">
                          A portal to track crowdfunding projects for a nonprofit charity tackling climate change.
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
                        <h3 class="design-title project-title">
                          COVIDSupport
                        </h3>
                        <p class="paragraph-8">
                          A mobile app concept for improving the quarantine experience for COVID-19 patients.
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              {/* <div role="listitem" class="design-item w-dyn-item">
                <Link to="/work/ptc-tile" class="design-block-copy.ux-block.w-inline-block">
                  <div class="project-copy">
                    <div class="w-layout-grid grid-copy">
                      <img src={process.env.PUBLIC_URL + '/img/ptc/Tile Thumbnail.png'} alt="Tile Component Preview" class="design-image home-image slate-gray"></img>
                      <div id="project-descriptor">
                        <h4 class="design-title project-title">
                          PTC Tile
                        </h4>
                        <p class="paragraph-8">
                          A flexible component for grouping and displaying a related content.
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    )
  }

}

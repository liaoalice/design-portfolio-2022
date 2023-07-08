import React from "react"
import "./Case Study.scss"

export default class PTC extends React.Component {
  render() {
    return (
      <div class="project">
        <div class="project-hero">
          <figure class="project-hero-image orange">
            <img src="/img/ptc/PTC Tile Hero.png" alt="A tile component previewing information on factory operations" />
          </figure>
        </div>
        <div class="grid">
          <div className="project-intro">
            <h1 class="project title">PTC Tile</h1>
            <div className="project-description">
              <p class="paragraph--large project-lede">
                <p>Over the past five years, nearly every PTC product segment has requested a card or tile component from the design system. Common use cases include dashboards and thumbnails for guiding users to navigate or take action.</p>
                <p>I took the lead on designing Tile, a flexible container for grouping related content.</p>
              </p>
            </div>
            <div className="detail first-detail">
              <h2>Role</h2>
              <p>UX research, visual design, interaction design, specification documentation</p>
            </div>
            <div className="detail second-detail">
              <h2>Time</h2>
              <p>2022–2023</p>
            </div>
            <div className="detail third-detail">
              <h2>Category</h2>
              <p>Design systems, UI components</p>
            </div>
          </div>
        </div>
        <div class="grid">
          <section class="project-main">
            <figure class="project-image project-image--full blue">
              <img alt="A collection of clickable tiles on a dashboard" src="/img/ptc/Tile Dashboard.png" />
            </figure>
          </section>
        </div>
      </div>
    )
  }

}

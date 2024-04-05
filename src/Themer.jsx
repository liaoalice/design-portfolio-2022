import React from "react"
import "./Case Study.scss"

export default class Themer extends React.Component {
  render() {
    return (
      <div class="project">
        <div class="project-hero">
          <figure class="project-hero-image slate-gray">
            <img src="/img/ptc/PTC Themer Hero.png" alt="A preview of the PTC Themer Figma plugin's design tokens tab" />
          </figure>
        </div>
        <div class="grid">
          <div className="project-intro">
            <h1 class="project title">PTC Themer</h1>
            <div className="project-description">
              <p class="paragraph--large project-lede">
                <p>To re-center software around accessibility, PTC's design system team created new visual guidelines for product teams to adopt.</p>
                <p>We also began rolling out semantic design tokens to improve scalability and consistency across products.</p>
                <p>However, while preparing teams for migration to the new theme, we ran into obstacles with updating files in Figma, the design software PTC designers use.</p>
                <p>I built a tool to circumvent these difficulties and facilitate the migration process.</p>
              </p>
            </div>
            <div className="detail first-detail">
              <h2>Role</h2>
              <p>Interaction design, wireframing,
                visual design, development</p>
            </div>
            <div className="detail second-detail">
              <h2>Time</h2>
              <p>March 2022 – May 2022</p>
            </div>
            <div className="detail third-detail">
              <h2>Category</h2>
              <p>Design tooling</p>
            </div>
          </div>
        </div>
        <div class="grid">
          <section class="project-main">
            <figure class="project-image project-image--full off-white">
              <img alt="A preview of PTC Themer's Migrate and Tokens tabs" src="/img/ptc/PTC Themer Preview.png" />
            </figure>
            <div class="body">
              <h2>Discovery and Definition</h2>
              <p>
                The biggest hurdle in migrating old design files to our new design system theme was preserving content overrides in Figma components.
              </p>
              <p>
                As our old Figma components and our new Figma components had different constructions, Figma’s native Library Swap feature could not preserve changes like text content or toggled icon visibility.
              </p>
            </div>
            <figure class="project-image project-image--full green">
              <img alt="Example of Button Figma Components with different structures" src="/img/ptc/Mismatch.png" />
            </figure>
            <figure class="project-image project-image--full">
              <img alt="PTC Themer preserves content overrides" src="/img/ptc/Failed Conversion.gif" />
              <div class="caption-body"><p class="caption">The buttons on the left are a reference for what the buttons on the right should look like upon migration. Figma's native library swap instead applies default styling to the latter and does not perfectly preserve icon and text layer overrides.</p>
              </div>
            </figure>
            <div class="body">
              <p>
                Following conversations with teams frustrated with the transition process, I knew our users' foremost need was a solution that could
              </p>
              <ol type="1">
                <li>migrate our Figma components to our design system's<b> new styling</b> and</li>
                <li>preserve <b>all text, layer, and nested component overrides </b>of these components</li>
              </ol>
              <p>
                At the same time, I was in the midst of researching design token strategy for our product teams. After encountering confusion on how design tokens were relevant to designers, I realized that <b>integrating design token education</b> into the tool our designers use the most——that is, Figma——would further facilitate adoption of our new theme while building parity between design and development.
              </p>
              <p>
                With my research in mind, I began designing and developing a solution. Figma's Plugin API allows users to create tools for customizing workflows in Figma's software. For that reason, I chose to address our users' needs through creating a Figma plugin.
              </p>
              <p class="p-link">
                I cloned a component-swapping function from Daniel Destefanis' <a href="https://github.com/destefanis/auto-theme">Auto Theme plugin</a>, then modified it for our needs by writing custom recursive functions in TypeScript and React. I wireframed the user flow and user interface in Figma, leveraging components from Thomas Lowry's  <a href="https://github.com/thomas-lowry/figma-plugin-ds">Figma Plugin Design System</a>.
              </p>
            </div>
            <div class="body">
              <h2>Initial Release</h2>
              <h3>Content Preservation</h3>
              <p>
                PTC Themer saves all text, layer, and nested component overrides implemented on PTC design system components in Figma like buttons and links. With just one click, designers can migrate their selected UI elements to the new design system library without worrying over incorrect labels and missing icons.
              </p>
            </div>
            <figure class="project-image project-image--full">
              <img alt="PTC Themer preserves content overrides" src="/img/ptc/Successful Conversion.gif" />
              <div class="caption-body"><p class="caption">The buttons on the left are a reference for what the buttons on the right should look like upon migration. PTC Themer applies the correct styling to the latter and preserves its content overrides.</p></div>
            </figure>
            <div class="body">
              <h3>Token Metadata</h3>
              <p>
                Through filtering through design tokens and clicking their respective Info icon buttons, PTC designers can better understand the role of each token and read them in the same language that their developers use.
              </p>
            </div>
            <figure class="project-image project-image--full">
              <img alt="Designers can filter through a list of design tokens in PTC Themer" src="/img/ptc/Token Metadata.gif" />
            </figure>
            {/* <figure class="project-image project-image--full white">
              <img alt="A modal that gives users metadata on a selected token" src="/img/ptc/Token Metadata.png" />
            </figure> */}
            {/* <div class="body">
              <h3>Token Application</h3>
            </div> */}
            {/* <div class="body">
              <h2>Future Iterations</h2>
              <p>
                Current users of the plugin transform items through manual selection. I'd like to add an automation option that trawls through the entire document and converts its UI elements without manual selection.
              </p>
              <p>
                I’d also like to grant users the ability to directly apply design token to their Figma prototypes, so as to build parity between code and design.
              </p>
              <p>
                Should the PTC design system create new themes——such as a dark mode or a high-contrast theme——I plan to add a “Themes” tab that helps users to seamlessly swap between different themes in their design files.
              </p>
            </div>
            <figure class="project-image project-image--full white">
              <img alt="A list that allows the user to swap between themes upon selection" src="/img/ptc/Backlog.png" />
            </figure> */}
            <div class="body">
              <h2>Validation</h2>
              <p>
                Teams at PTC are already adopting the beta release and responding with praise for how the plugin has quickened their design file migration process.
              </p>
              <p>While there is still work to be done and additional feedback to be obtained, I am encouraged by our pilot users' responses.</p>
              <figure class="project-image--full">
                <img alt="A message from a coworker reading: 'Hi Alice, I spent some time testing out your Figma migration plugin at the end of last week and it works AWESOME! Thank you so much for putting this together! Your tool cut the amount of time I had to spend on migration in half. Great work!'" src="/img/ptc/PTC Themer Feedback.png" />
              </figure>
            </div>
          </section>
        </div>
      </div>
    )
  }

}

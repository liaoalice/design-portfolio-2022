import "./Case Study.scss"

export default function ClimateDonor() {
  return (
    <div className="project">
      <div class="project-hero">
        <figure class="project-hero-image blue">
          <img src="/img/climate donor/Climate Donor Hero.png" alt="Climate Donor web portal preview" />
        </figure>
      </div>
      <div class="grid">
        <div className="project-intro">
          <h2 class="project title">Climate Donor</h2>
          <div className="project-description">
            <p class="paragraph--large project-lede">
              <p>Climate Donor is a non-profit that seeks to mitigate climate change through crowdfunding. <br></br><br></br>
                I volunteered my skills to Climate Donor through Develop for Good, which matches non-profit organizations and government agencies with project managers, developers, and designers early in their careers.</p>
            </p>
          </div>
          <div className="detail first-detail">
            <h2>Role</h2>
            <p>User interviews, visual design, interactive prototyping</p>
          </div>
          <div className="detail second-detail">
            <h2>Timeline</h2>
            <p>14 weeks, 2021–2022</p>
          </div>
          <div className="detail third-detail">
            <h2>For</h2>
            <p>Climate Donor, <br></br>via <a href="https://developforgood.org/">Develop for Good</a></p>
          </div>
        </div>
      </div>
      <div class="grid">
        <section class="project-main">
          <figure class="project-image project-image--full green">
            <img alt="Climate Donor Project Portal Solution Preview" src="/img/climate donor/Solution Preview.png" />
          </figure>
          <div class="body">
            <p>
              Climate Donor needed a web portal that could better their grassroots funding efforts by providing project owners with a convenient way to post projects and donors with a way of following projects that matched their interests.
            </p>
            <p>
              When I entered the project, there were user flows, a design system, and prototypes already in place from the previous DfG cycle. As the sole designer of the Winter ‘21 Cycle, my responsibilities were to finish designing features the client had requested and shore up any existing designs.
            </p>
            <p>
              One of those designs was the Donor Dashboard, where donors can find and track any projects to which they have contributed or would be interested in contributing funds.
            </p>
          </div>
          <figure class="project-image project-image--full off-white">
            <img alt="Climate Donor Project Portal Solution Preview" src="/img/climate donor/Original Portal.png" />
          </figure>
          <div class="body">
            <h2>Discovery and Definition</h2>
            <p>
              Upon reviewing the Donor Dashboard prototype, the developer with whom I collaborated noted the following pain points:
            </p>
            <ul>
              <li>“There is <b>no clear way to display the new projects that have been searched for</b>, since the tabs only show the user projects, saved projects, and recommended projects.”</li>
              <li>“[The dashboard] doesn’t allow for <b>location based searches </b> very easily, or <b>aggregate searches (searching by location, name, and category)</b>.”</li>
            </ul>
            <p>
              The developer needed help with prototyping a design that could contain a filter <b>checkboxes for categories, a location input box, and a keyword search box</b>. With this solution, he proposed that "we update the sidebar to have a Search Projects tab as well." He also asked me whether this new Search Projects tab of his should be positioned above or below the Recommended tab on the dashboard side bar.
            </p>
            <p>
              Below is his proposed design that he asked me to update.
            </p>
          </div>
          <figure class="project-image project-image--full off-white">
            <img alt="Developer Akaash's Proposed Design" src="/img/climate donor/Design from Akaash.png" />
          </figure>
          <div className="body">
            <h2>Ideating Through Sketches</h2>
            <p>
              To address the developer's questions and ideas, I first sketched several potential solutions.
            </p>
            <p>
              In my first wireframe, I decided to put the search box front and center for visibility purposes, and add a sidebar for filter checkboxes. While the developer proposed putting the checkboxes underneath the search bar, I thought that choice would clutter the space underneath and frustrate users if they accidentally clicked on a checkbox rather than the search bar itself.
            </p>
            <p>
              The filter sidebar I proposed has collapsible sections for more efficient use of white space.
            </p>
          </div>
          <figure class="project-image project-image--full off-white">
            <img alt="Initial Wireframe Design" src="/img/climate donor/Wireframe 1.png" />
          </figure>
          <div className="body">
            <p>
              Finally, in response to the developer's question about whether "Search Projects" should go before "Recommended Projects," I wondered if we could instead <b>consolidate a few of the project sections</b>. Not only would it look cleaner, it could be more efficient for users to locate their projects, saved projects, and recommended projects in one place. So, I ideated another wireframe for an aggregated Projects page.
            </p>
            <p>
              In this wireframe, the user would be able to sort projects by the ones they are currently working on, their saved projects, and projects recommended to them. There would also be a filter bar on the side for the user to filter by active and completed projects.
            </p>
          </div>
          <figure class="project-image project-image--full off-white">
            <img alt="Alternate Wireframe Design" src="/img/climate donor/Wireframe 3.png" />
          </figure>
          <div className="body">
            <h2>Designing the Filter Component</h2>
            <p>
              With the developer and the the client's approval of the first wireframe and the new consolidated Projects tab, I began prototyping the filter bar in Figma first. Since I realized both the Projects tab and the Search tab would make use of a filter bar, I decided to design it as a reusable component.
            </p>
            <p>
              I also made use of Figma's Variants feature to simplify the component library and swap smaller Figma components in and out.
            </p>
          </div>
          <figure class="project-image project-image--full off-white">
            <img alt="Filter Components and Variants" src="/img/climate donor/Filter Components.png" />
          </figure>
          <div className="body">
            <h2>Overhaul Overview</h2>
            <p>In the end, the main changes from the Spring Cycle's Donor Dashboard design were as follows:</p>
            <ol>
              <li>The creation of<b> a dedicated Search page</b> to provide a clearer display for queried results</li>
              <li>The <b>consolidation of My Projects, Saved Projects, and Recommended Projects into one dashboard </b>for easier user access, reducing cognitive load</li>
              <li>The addition of <b> a collapsible filter bar </b>to filter both the Projects page and the Search page by categories</li>
            </ol>
          </div>
          <figure class="project-image project-image--full green">
            <img alt="New Donor Dashboard Search Page" src="/img/climate donor/Updates.png" />
          </figure>
          <figure class="project-image project-image--full green">
            <img alt="Updates to Mine Page of Donor Dashboard" src="/img/climate donor/Updates2.png" />
          </figure>
          <div className="body">
            <h2>Lessons Learned</h2>
            <h3>Collaborating with non-designers</h3>
            <p>Working on the Climate Donor project gave me concrete experiences in working with developers and project managers. As the sole designer on the team, I had to ensure my thought process was comprehensive for everyone on the team.</p>
            <br />
            <h3>Working with an existing design system</h3>
            <p>In previous projects, I built the visual language. However, as the Climate Donor project portal already had an existing design system, I learned to design new features and improve UI layouts with the guidelines I was given. Working with the existing design system allowed me to focus on end-to-end user flow and interaction design.</p>
          </div>
        </section>
      </div>
    </div>
  )
}

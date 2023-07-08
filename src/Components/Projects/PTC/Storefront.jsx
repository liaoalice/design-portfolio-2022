import React from "react"
import "./Storefront.scss"

export default class Storefront extends React.Component {
    render() {
        return (
            <div class="project">
                <div class="project-hero">
                    <figure class="project-hero-image blue">
                        <img src="/img/cs/CS Hero.png" alt="Prototype mockups of the mobile COVIDSupport app" />
                    </figure>
                </div>
                <div class="grid">
                    <div className="project-intro">
                        <h1 class="project title">PTC Convergence Design System</h1>
                        <div className="project-description">
                            <p class="paragraph--large project-lede">
                                <p>In the first half of 2020, two of my friends tested positive for the then-novel coronavirus. Though they made full recoveries, the confusion and fear they had expressed while quarantining at home made a lingering impression on me.</p>
                                <p>My classmates and I sought to ease the uncertainties my friends and thousands of other COVID-19 patients were facing through design.</p>
                            </p>
                        </div>
                        <div className="detail first-detail">
                            <h2>Role</h2>
                            <p>UI/UX design</p>
                        </div>
                        <div className="detail second-detail">
                            <h2>Time</h2>
                            <p>2022–present</p>
                        </div>
                        <div className="detail third-detail">
                            <h2>Category</h2>
                            <p>Design Systems</p>
                        </div>
                    </div>
                </div>
                <div class="grid">
                    <section class="project-main">
                        <figure class="project-image project-image--full blue">
                            <img alt="COVIDSupport design on iOS" src="/img/cs/CS Solution Preview.png" />
                        </figure>
                        <div className="body">
                            <h2>Discovery and Definition</h2>
                            <p>
                                With the pandemic being so new that year, we didn’t know much about where our target users were suffering the most in the quarantine process. To identify these pain points, we sought real anecdotes from interviewees who had tested positive for COVID-19 and underwent the full quarantine experience.
                            </p>
                            <p>
                                The common pain points among our four interviewees were:
                            </p>
                            <ul class="case-list">
                                <li><b>physical difficulties</b>, such as fatigue </li>
                                <br />
                                <li><b>mental health struggles</b>, such as anxiety </li>
                                <br />
                                <li><b>lack of interpersonal and institutional support</b>, especially with regard to communication and access to COVID-related resources</li>
                            </ul>
                            <p>
                                At the time, brain fog wasn’t a symptom regularly covered by the media I read and watched, so it surprised me the interviewees I talked to reported having difficulties with <b>memory loss and information recall</b>.
                            </p>
                            <p>
                                That eye-opening finding later informed our feature ideas during our brainstorming session.
                            </p>
                        </div>
                        <figure class="project-image project-image--full off-white">
                            <img alt="COVIDSupport Working Activity Notes" src="/img/cs/Working Activity Notes.png" />
                        </figure>
                        <div className="body">
                            <h2>Initial Explorations</h2>
                            <p>
                                When we organized our research takeaways through affinity mapping, we also conducted a brainstorming session to address the issues our interviewees mentioned.</p>
                            <p>
                                Cards like “I wish I had access to dog walkers and groceries” and "I had short-term memory issues" informed our idea to create <b>a directory of resources</b>. We then linked these cards to the greater goal of our app: facilitating the quarantine process so that patients could have better support for recovery. From these condensed insights, we were able to begin wireframing.
                            </p>
                        </div>
                        <figure class="project-image project-image--full off-white">
                            <img alt="Example insight into our design thinking with the Resources wireframe" src="/img/cs/Example Insight.png" />
                        </figure>
                        <div className="body">
                            <p>I had the opportunity to contribute to branding while my classmates Janet Liu and Kathy Zhang worked on interactive design for the mid-fidelity prototype. As multiple interviewees had spoken about wanting tranquility and assurance during their quarantine, I chose blue and pink——colors that emulate calm and compassion——for our palette.</p>
                        </div>
                        <figure class="project-image project-image--full blue">
                            <img alt="Initial prototype of Resources Tab" src="/img/cs/Old Resources.png" />
                        </figure>
                        <div className="body">
                            <h2>Reiterating Around User Feedback</h2>
                            <p>
                                However, simply picking a color palette and calling it a day was not enough for our visual design. As it turned out, visual clarity, or lack thereof, was the biggest hurdle in our usability tests.
                            </p>
                            <p>
                                One source of confusion was the navigation bar. Through task completion and System Usability Score (SUS) questionnaires, user testing taught us not every icon on the navigation bar was a clear representation of its page, and that the number of tabs on the navigation bar could require more cognitive load.
                            </p>
                            <p>
                                To address these obstacles, I reduced our navigation bar from six tabs to three: the Dashboard feed, the Check-In tool, and the Resources page.
                            </p>
                        </div>
                        <figure class="project-image project-image--full off-white">
                            <img alt="User test update: Navigation Bar" src="/img/cs/Navbar Update.png" />
                        </figure>
                        <div className="body">
                            <p>
                                Not only does the reorganization shift the focus of our app to the content that best addresses our users' pain points, it also reduces interaction costs and the navigation bar’s room for error. The Nielsen Norman Group notes that <a href="https://www.nngroup.com/articles/mobile-navigation-patterns/">more than five navigation tabs makes it difficult for a navigation bar to retain an optimum touch-target size</a>.
                            </p>
                            <p>
                                I also removed the Messaging and Communities pages, replacing them with Discord integration instead. We originally created built-in social features to address how interviewees wanted communities that understood how they felt in quarantine, but test users responded that they would rather make use of existing social media platforms.
                            </p>
                        </div>
                        <figure class="project-image project-image--full off-white">
                            <img alt="User test update: Communities" src="/img/cs/Communities.png" />
                        </figure>
                        <div className="body">
                            <p>
                                To further improve visual clarity and consistency, I created a design system with reusable components and standardized font sizes in Figma.
                            </p>
                        </div>
                        <figure class="project-image project-image--full off-white">
                            <img alt="Updated design system" src="/img/cs/Design System.png" />
                        </figure>
                        <div className="body">
                            <p>As part of the updated design system, I added a versatile 6-column mobile grid. Restructuring our visual design around the grid created a recognizable spatial pattern that enhances polish. Polish, in turn, can enhance a sense of trustworthiness——important for a medical app meant to relieve uncertainty.</p>
                        </div>
                        <figure class="project-image project-image--full blue">
                            <img alt="Grid system" src="/img/cs/Grid System.png" />
                        </figure>
                        <div className="body">
                            <h2>Final Solution</h2>
                            <h3>Dashboard</h3>
                            <p>
                                By aggregating COVID-related news and health data, among other widgets like personal reminders, the Dashboard page relieves pressure from users to parse through thousands of sources in the midst of their recovery. In doing so, the Dashboard aids users in finding commuication from <b>institutional support</b>.
                            </p>
                            <br />
                            <figure class="project-image project-image--full prototype">
                                <img alt="COVIDSupport Dashboard Solution" src="/img/cs/dashboard.gif" />
                            </figure>
                            <p>
                                The Edit button at the top of the page also gives users the option to rearrange (or add/remove) widgets from their Dashboard, accounting for what they may find encouraging or draining.
                            </p>
                            <p>
                                Users struggling with <b>fatigue or short-term memory loss</b> may especially benefit from the Dashboard's features.
                            </p>
                            <br />
                            <h3>Check-In</h3>
                            <p>
                                For patients in quarantine, the Centers for Disease Control and Prevention (CDC) recommends that they monitor their symptoms throughout their quarantine and for five days after. The Check-In app reminds users to complete a simple and daily catalog of their symptoms and further provides support by directing users to specific resources once they have completed the daily survey.  
                            </p>
                            <figure class="project-image project-image--full prototype">
                                <img alt="COVIDSupport Check-In Solution" src="/img/cs/check.gif" />
                            </figure>
                            <br />
                            <h3>Resources</h3>
                            <p>
                                The Resources page provides users with quick access to a call or text hotline and compiles a directory for users to find COVID-related aid, mental health resources, personal care help, and communities for <b>interpersonal support</b>. 
                            </p>
                            <figure class="project-image project-image--full prototype">
                                <img alt="COVIDSupport Resources Solution" src="/img/cs/resources.gif" />
                            </figure>
                        </div>
                        <div className="body">
                            <h2>Lessons Learned</h2>
                            <h3>Looking Good Isn't Optional</h3>
                            <p>Usability is important, but that doesn't mean usability and visual clarity are mutually exclusive; in fact, user testing taught me that lack of visual clarity could impede usability.</p>
                            <p>On a similar note, consistency is key. Creating a design system before beginning the mid-fidelity prototype would've been immensely helpful from the start.</p>
                            <br />
                            <h3>Working with a Remote Team</h3>
                            <p>Half of our team was in China, while the other half was in the United States. Working remotely across timezones was a challenge for coordinating user interviews, usability tests, and meetings, but my classmates and I learned to work efficiently through good communication.</p>
                        </div>
                    </section>
                </div>
            </div>
        )
    }

}
import React from "react"
import "./Case Study.scss"

export default class Convergence extends React.Component {
    render() {
        return (
            <div class="project">
                <div class="project-hero">
                    <figure class="project-hero-image">
                        <img src="/img/ptc/CDS Hero.png" alt="Collage of Convergence Design System components in Figma" />
                    </figure>
                </div>
                <div class="grid">
                    <div className="project-intro">
                        <h1 class="project title">Convergence Design System</h1>
                        <div className="project-description">
                            <p class="paragraph--large project-lede">
                                <p>The Convergence Design System gives PTC's six product teams a shared language of resources and principles to provide users with a cohesive and accessible experience across all PTC products.</p>
                                <p>My responsibilities included contributing to our Figma component library, collaborating with developers to write documentation for web components, leading workshops to gather requirements and align segments on design patterns, holding office hours to support product owners, and building tools to enhance design workflows and quality at scale.</p>
                                <p>This case study is a high-level overview of my contributions. For more details, contact me at <a href="mailto:alice.g.liao@gmail.com">alice.g.liao@gmail.com</a>.</p>
                            </p>
                        </div>
                        <div className="detail first-detail">
                            <h2>Role</h2>
                            <p>Associate UX/UI Designer</p>
                        </div>
                        <div className="detail second-detail">
                            <h2>Time</h2>
                            <p>2022–2023</p>
                        </div>
                        <div className="detail third-detail">
                            <h2>Category</h2>
                            <p>Design systems, accessibility</p>
                        </div>
                    </div>
                </div>
                <div class="grid">
                    <section class="project-main">
                        <figure class="project-image project-image--full orange">
                            <img alt="A collection of clickable tiles on a dashboard" src="/img/ptc/Tile Dashboard.png" />
                        </figure>
                        <div class="body">
                            <h2>Enhancing the technical</h2>
                            <p>
                                At PTC, I introduced more efficient tooling to our design system through overhauling our design tokens implementation and creating <a href="https://aliceliao.me/work/ptc-themer">a custom Figma plugin that simplifies a crucial workflow</a>. By fortifying the technical layer of our design system now, I sought to build infrastructure that scales with ease in the future.
                            </p>
                        </div>
                        <figure class="project-image project-image--full">
                            <img alt="PTC Themer plugin preserves content overrides in design file transitions to new theming" src="/img/ptc/Successful Conversion.gif" />
                        </figure>
                        <div class="body">
                            <p>
                                When I joined the team, component theming was handled through a legacy tool that involved inconsistent token taxonomy, frequent build failures, and hours upon hours of manual work. Such inefficiencies ran the risk of cascading technical debt and impeding us from developing new features like a compact mode or a dark theme.
                            </p>
                            <p>
                                I abstracted our design token taxonomy to be more semantic and reusable, guiding it away from past reliance on primitives and component-specific aliases. With a developer, I strategized a pipeline that would allow the design system team to automate design token updates to the codebase, saving hours of labor.
                            </p>
                        </div>
                        <figure class="project-image project-image--full blue">
                            <img alt="A collection of semantic tokens applied to invalid form input" src="/img/ptc/Token Naming.png" />
                        </figure>
                        <div class="body">
                            <h2>Contributing to a system of flexibility, reusability, and built-in accessibility </h2>
                            {/* <p>The Convergence Design System revolves around three pillars: consistency and flexibility built-in accessibility, and commonality and reusability. </p> */}
                            <p>
                                In the four years before I joined, the Convergence Design System was tied to one single legacy product. However, after the design system was given its own team shortly before my onboarding and more PTC products began to adopt the system, we moved toward designing common and adaptive components to better accomodate a wide variety of use cases.
                            </p>
                            <p>
                                I designed one such component——Card——for teams to use across multiple business areas.
                            </p>
                        </div>
                        <figure class="project-image project-image--full">
                            <img alt="A collage of Card components with different configurations" src="/img/ptc/PTC Cards.png" />
                        </figure>
                        <div class="body">
                            <p>
                                Sometimes, UI components are not enough to address common problems our product teams face. In other cases, they may be too prescriptive. As such, we also began formalizing design patterns: reusable global solutions that allow for both consistency and flexibility.
                            </p>
                            <p>
                                I wrote a Button Group pattern to address how best to group similar or related actions. Common use cases in PTC products include forms and wizards.
                            </p>
                        </div>
                        <figure class="project-image project-image--full green">
                            <img alt="Screenshot of Button Group pattern research" src="/img/ptc/Button Group.png" />
                        </figure>
                        <div class="body">
                            <p>
                                Inherent to designing for people is designing for accessibility. While the Convergence Design System's UI components all satisfied WCAG standards, many PTC products fell short.
                            </p>
                            <p>
                                From writing keyboard interactions to leading a round table discussion on accessibility, I strove to raise awareness and practice of digital accessibility at PTC on a technical and personal level.
                            </p>
                        </div>
                        <figure class="project-image project-image--full pink">
                            <img alt="Specification documentation on screen reader and hit area considerations for Card component development" src="/img/ptc/Accessibility.png" />
                        </figure>
                        <div class="body">
                            <h2>Impact</h2>
                            <p>
                                I saved designers and developers at PTC dozens of hours of work through creating more efficient tooling and workflows. The design system team as a whole, my contributions included, reduced business costs through creating reusable components and patterns. In guiding PTC products toward digital accessibility, our design system encouraged stronger customer engagement.
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        )
    }

}

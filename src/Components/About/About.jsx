import "./About.scss"

export default function About() {
    return (
        <div class="container">
            <div class="content about">
                <div class="about-image">
                    <img src="/img/me.png" alt="A portrait of Alice" />
                </div>
                <div class="about-text">
                    <h2>Hi, I'm Alice!</h2>
                    <p>I'm a user interface designer on the design system team at <a href="https://www.ptc.com/">PTC</a>, where I delight in creating accessible solutions.</p>
                    {/*<p>While a student at Vanderbilt University, I majored in English, minored in Computer Science, and <a href="https://www.youtube.com/watch?v=rqiLGqHtkOg&ab_channel=VanderbiltAASA">performed at a Lunar New Year festival</a>.</p>
                    <p>I fell in love with design thanks to <a href="https://vandyhacks.org/">student</a><a href="https://www.vanderbiltaasa.com/"> orgs</a>, who recruited me for my ability to open Photoshop, and Professor Shiloh Anders, who taught me Foundations of Human-Computer Interaction.</p>*/}
                    <hr />
                    <p class="currently">Currently reading <i>The Traitor Baru Cormorant</i> by Seth Dickinson, playing <i>Disco Elysium</i> by ZA/UM, and listening to <i>The Loneliest Time</i> by Carly Rae Jepsen.</p>
                </div>
            </div>
        </div>
    )
}
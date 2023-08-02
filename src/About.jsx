import "./About.scss"

export default function About() {
  return (
    <main>
      <div class="content about">
        {/* <div class="about-image">
          <img src="/img/new me.png" alt="A portrait of Alice smiling in a lime green vest with orange flowers." />
        </div> */}
        <div class="about-text">
          <h2>Hi, I'm Alice!</h2>
          <p>I work on the design system team at an enterprise software company.</p>
          <p>Prior to my current role, I graduated from Vanderbilt University. There, I majored in English, minored in Computer Science, created digital posters for the law school, led design for <a href="https://vandyhacks.org/">a collegiate hackathon</a> with 650 attendees, and performed <a href="https://en.wikipedia.org/wiki/S%C5%8Dran_Bushi">sōran bushi</a> at a Lunar New Year festival.</p>
          <p>Outside of design, I enjoy reading, writing, drawing, lifting, making music, and <a href="https://www.newyorker.com/magazine/2020/05/25/where-do-eels-come-from">wondering about European eels.</a></p>
          <hr />
          {/* <p>I was born in the Year of the Rabbit and named in English for a certain girl who encounters a white rabbit, which is why I've styled this site after <a href="https://en.wikipedia.org/wiki/White_Rabbit_(candy)">White Rabbit candy</a>. The red characters at the top left of the navigation bar form my Chinese given name.</p> */}
          {/* <p className="currently">Currently: Reading <i>Anna Karenina</i> by Leo Tolstoy, learning electric bass, writing a short story, making Hong Kong-style borscht, and playing <i>The Legend of Zelda: Tears of the Kingdom</i>.</p> */}
          {/* <h3>Experience</h3>
          <table class="about-experience">
            <tbody>
              <tr>
                <td>PTC</td>
                <td>Associate UI/UX Designer</td>
                <td>2022–Present</td>
              </tr>
              <tr>
                <td>Codeword</td>
                <td>Junior Designer</td>
                <td>2021–2022</td>
              </tr>
            </tbody>
          </table> */}
        </div>
      </div>
    </main>
  )
}

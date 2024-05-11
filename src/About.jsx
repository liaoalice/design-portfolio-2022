import "./About.scss"

export default function About() {
  return (
    <main>
      <div class="content about">
        <div class="about-text">
          <h2>About</h2>
          <p>Alice is a product designer at 1Password. She enjoys empowering fellow designers and developers through her work on the design systems team.
          </p>
          <p>In a prior life, Alice studied English and Computer Science at Vanderbilt University. She dipped her toes into design after student extracurriculars begged her to use her cracked copy of Photoshop to make flyers and websites. Her multidisciplinary background bolsters her work in the form of accessibility, building custom tooling, and writing documentation.</p>
          <p>When she's not designing, Alice is drawing, bouldering, playing guitar, exploring New York City, reading ecology articles in <i><a href="https://www.quantamagazine.org/">Quanta Magazine</a></i>, and writing speculative fiction.</p>
          <p>You can contact her at <a href="mailto:alice.g.liao@gmail.com">alice.g.liao@gmail.com</a>.</p>
          <br />
          <hr />
          <br />
          {/* 
          <p>I love:</p>
          <ul>
            <li></li>
            <li>17th century Renaissance poet John Donne</li>
            <li>Carly Rae Jepsen's 2015 album E•MO•TION</li>
            <li>Botanical gardens</li>
          </ul> */}
          <p className="currently">Favorite literature: <i>The Traitor Baru Cormorant</i> by Seth Dickinson, <i>Persuasion</i> by Jane Austen, <i>Tehanu</i> by Ursula K. Le Guin, <i>The Bluest Eye</i> by Toni Morrison, <i>Anna Karenina</i> by Leo Tolstoy, <i>The Fifth Head of Cerberus</i> by Gene Wolfe,  <i>Wuthering Heights</i> by Emily Brontë, <i>Braiding Sweetgrass</i> by Robin Wall Kimmerer, <i>Earthlings</i> by Sayaka Murata, <i>Pale Fire</i> by Vladimir Nabokov, <i>The Left Hand of Darkness</i> by Ursula K. Le Guin, "The Overcoat" by Nikolai Gogol,  "Homecoming Is Just Another Word for the Sublimation of the Self" by Isabel J. Kim, "Sea Oak" by George Saunders, "Looking Back" by Ursula K. Le Guin, "The Canonization" by John Donne, "Think of Others," by Mahmoud Darwish, "A Valediction: Forbidding Mourning" by John Donne, and "Friendship's Mystery, to My Dearest Lucasia" by Katherine Philips.</p>
        </div>
      </div>
    </main>
  )
}

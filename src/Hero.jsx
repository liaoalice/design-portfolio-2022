import React from "react";
import "./Hero.scss"
import 'animate.css';

export default class Hero extends React.Component {
  componentDidMount() {
    var rabbit = document.getElementsByClassName('cover-image-item')[0];
    window.onscroll = function() {
      rabbit.style.transform = "rotate(" + window.pageYOffset / -2 + "deg)";
    };
  }

  componentWillUnmount = () => {
    if (this.scroller) {
      this.scroller.removeEventListener('scroll', this.handleScroll.bind(this), false)
    }
  }

  render() {
    return (
      <div className="home-header">
        <div class="home-cover grid">
          <div class="home-cover-content">
            <h1 class="home-cover-title">ALICE<br></br>LIAO</h1>
            <h2 class="home-cover-subtitle">UX Designer.</h2>
            {/* <p class="home-cover-description">Designer with a passion for building parity between code and design.</p> */}
          </div>
          <aside class="cover-poem" div id="poem">
            <div class="cover-poem-content">
              <p class="cover-poem-body">
                雄兔脚扑朔，雌兔眼迷离。双兔傍地走，安能辩我是雄雌？
              </p>
            </div>
          </aside>
        </div>
        <div class="home-header-background">
          <div class="cover-image" div id="cover-image">
            <div class="cover-image-item">
              <img src="/img/icons/rabbits.svg" class="hero-svg" alt="Two rabbits run in a circle"></img>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

import React from "react"
import "./Footer.scss"

export default class Footer extends React.Component {
    render() {
        return (
            <footer id="main-footer">
                <div class="footer-container">
                    <div class="sm">
                        <div class="sm-content">
                            <a href="https://www.linkedin.com/in/aliceliao99/" className="sm-description">
                                LinkedIn
                            </a>
                        </div>
                        <div class="sm-content">
                            <a href="https://twitter.com/aliceinpixels" className="sm-description">
                                Twitter
                            </a>
                        </div>
                        <div class="sm-content">
                            <a href="https://www.goodreads.com/user/show/81276844-alice" className="sm-description">
                                Goodreads
                            </a>
                        </div>
                    </div>
                    <p class="copyright">Designed and developed by Alice!</p>
                </div >

            </footer >
        )
    }

}
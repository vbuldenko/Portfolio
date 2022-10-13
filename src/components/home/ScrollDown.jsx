import React from "react";

export default function ScrollDown () {
    return (
        <div className="home__scroll">
            <a href="#about" className="home__scroll-button">
                <i class="uil uil-mouse-alt"></i>
                <span className="home__scroll-name">Scroll Down</span>
                <i class="uil uil-arrow-down home__scroll-arrow"></i>
            </a>
        </div>
    )
}
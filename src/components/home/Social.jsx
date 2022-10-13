import React from "react";

export default function Social () {
    return (
        <div className="home__social">
            <a href="https://www.instagram.com/" className="home__social-icon" target="_blank">
                <i class="uil uil-instagram"></i>
                {/* <i class="uil uil-instagram-alt"></i> */}
            </a>
            <a href="https://www.facebook.com/" className="home__social-icon" target="_blank">
                {/* <i class="uil uil-facebook-messenger"></i> */}
                <i class="uil uil-facebook-messenger-alt"></i>
            </a>
            <a href="https://www.github.com/" className="home__social-icon" target="_blank">
                {/* <i class="uil uil-github"></i> */}
                <i class="uil uil-github-alt"></i>
            </a>
            <a href="https://www.twitter.com/" className="home__social-icon" target="_blank">
                {/* <i class="uil uil-twitter"></i> */}
                <i class="uil uil-twitter-alt"></i>
            </a>
            <a href="https://web.telegram.org/" className="home__social-icon" target="_blank">
                {/* <i class="uil uil-telegram"></i> */}
                <i class="uil uil-telegram-alt"></i>
            </a>
        </div>
    )
}
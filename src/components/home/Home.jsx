import React from "react";
import "./home.css"
import Social from "./Social.jsx"
import Data from "./Data.jsx"
import ScrollDown from "./ScrollDown";

// import vb from ".../assets/vb.png"


export default function Home(){
    return(
        <>
            <section className="home section" id="home">
                <div className="home__container container grid">
                    <div className="home__content grid">
                        <Social />
                        <div className="home__img"></div>
                        <Data />
                    </div>
                    <ScrollDown />
                </div>
            </section>
        </>
    )
}
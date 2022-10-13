import React from "react";
import "./qualification.css"

export default function Qualification () {
    const [toggleState, setToggleState] = React.useState(1)

    function toggleTab(index) {
        setToggleState(index)
    }

    return (
        <section className="qualificatin section">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personal journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div onClick={() => toggleTab(1)} className={toggleState === 1 ? "qualification__button qualification__active button--flex": "qualification__button button--flex"}>
                        <i className="uil uil-graduation-cap qualification__icon"></i>
                        Education
                    </div>

                    <div onClick={() => toggleTab(2)} className={toggleState === 2 ? "qualification__button qualification__active button--flex": "qualification__button button--flex"}>
                        <i className="uil uil-briefcase-alt qualification__icon"></i>
                        Experience
                    </div>

                </div>

                <div className="qualification__sections">
                    <div className={toggleState === 1 ? "qualification__content qualification__content-active": "qualification__content"}>

                        <div className="qualification__data">

                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Fullstck Web Development</h3>
                                <span className="qualification__subtitle">
                                    Zero To Mastery Academy. Fullstck Web Developer Career Path
                                </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i>
                                    01.2022 - 05.2022
                                </div>
                            </div>

                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Frontend Development</h3>
                                <span className="qualification__subtitle">
                                    Scrimba - The Frontend Developer Career Path
                                </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i>
                                    06.2022 - 08.2022
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">

                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">CS50</h3>
                                <span className="qualification__subtitle">
                                    CS50's Introduction to Computer Science
                                </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i>
                                    01.2022 - 05.2022
                                </div>
                            </div>

                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">PHD in Bioorganic Chemistry</h3>
                                <span className="qualification__subtitle">
                                    Ukraine - Institute of Bioorganic Chemistry and Petrochemistry of National Academy of Sciences of Ukraine
                                </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i>
                                    2015 - 2019
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">

                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Biologist. Chemist</h3>
                                <span className="qualification__subtitle">
                                    Ukraine - Nizhyn State Gogol University
                                </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i>
                                    2009 - 2015
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className={toggleState === 2 ? "qualification__content qualification__content-active": "qualification__content"}>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Freelancer</h3>
                                <span className="qualification__subtitle">
                                    - Ukraine - 
                                </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i>
                                    2022 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">

                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Researcher</h3>
                                <span className="qualification__subtitle">
                                Ukraine - Institute of Bioorganic Chemistry and Petrochemistry of National Academy of Sciences of Ukraine
                                </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i>
                                    2019 - 2022
                                </div>
                            </div>

                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">PHD Student</h3>
                                <span className="qualification__subtitle">
                                    Ukraine - Institute of Bioorganic Chemistry and Petrochemistry of National Academy of Sciences of Ukraine
                                </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i>
                                    2015 - 2019
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
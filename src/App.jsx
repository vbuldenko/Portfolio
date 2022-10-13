import React from 'react'
import "./App.css"

import Header from "./components/header/Header"
import Home from './components/home/Home.jsx'
import About from './components/about/About.jsx'
import Skills from './components/skills/Skills.jsx'
import Services from './components/services/Services.jsx'
import Qualifiction from './components/qualification/Qualification.jsx'
import Portfolio from './components/portfolio/Portfolio.jsx'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import ScrollUp from './components/scrollup/ScrollUp'


// Contact component learn the part about mail sending via API
// Learn how to make a carusel in React without a Library(Swiper)
export default function App() {

    return (
        <div>
            <Header/>
            <main className='main'>
                <Home />
                <About />
                <Skills />
                <Services />
                <Qualifiction />
                <Portfolio />
                <Testimonials />
                <Contact />
            </main>
            <Footer />
            <ScrollUp />

            {/* <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>} />
                    <Route path="Portfolio" element={<Portfolio />}/>
                    <Route path="*" element={<NotFound />}/>
                </Route>
            </Routes> */}
        </div>
    )
}
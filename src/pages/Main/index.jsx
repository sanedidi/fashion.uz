import React from 'react'
import Hero from '../../components/Hero'
import About from '../../components/About'
import Mission from '../../components/Mission'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer'

const Main = () => {
    return (
        <div>
            <Header />
            <Hero />
            <About />
            <Mission />
            <Footer />
        </div>
    )
}

export default Main
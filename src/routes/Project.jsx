import React from 'react'
import Navbar from '../components/Navbar'
import Heroimg2 from '../components/Heroimg2'
import Footer from '../components/Footer'
import Workcard from '../components/Workcard'

const Project = () => {
    return (
        <>
            <Navbar />
            <Heroimg2 heading="Projects" text="Some of my recent project" />
            <Workcard />
            <Footer />
        </>
    )
}

export default Project

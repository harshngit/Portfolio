import React from 'react'
import './card.css'
import P1 from '../assets/1.jpg'
import { NavLink } from 'react-router-dom'
const Workcard = () => {
    return (
        <>
            <div className="container">
                <h1 className="project-heading">Projects</h1>
                <div className="project-container">
                    <div className="project-card">
                        <img src={P1} alt="p1" />
                        <h2 className="project-title">Project title</h2>
                        <div className='pro-details'>
                            <p>This is text</p>
                            <div className="pro-btns">
                                <NavLink to="url.com" className="btn">View</NavLink>
                                <NavLink to="url.com" className="btn">Source</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Workcard

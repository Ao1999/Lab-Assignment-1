/**
 * File Name: MainRouter.jsx
 * Student's Name: AOZENG
 * StudentID: 301173375
 * Date: 2024/05/26
 */
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './src/about'
import Contact from './src/contact'
import Project from './src/project'
import Layout from './components/Layout'
import Services from './src/service'

const MainRouter = () => {
        return (<div>
                <Layout/>
                <Routes>
                        
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/about" element={<About />} />
                        <Route exact path="/services" element={<Services />} />
                        <Route exact path="/project" element={<Project />} />
                        <Route exact path="/contact" element={<Contact />} />
                        
                </Routes>
        </div>
        )
}
export default MainRouter




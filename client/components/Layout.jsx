/**
 * File Name: Layout.jsx
 * Student's Name: AOZENG
 * StudentID: 301173375
 * Date: 2024/05/26
 */
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../public/Logo.png';
import './Navbar.css';
export default function Layout() {
  return (
    <>
      <h1>Ao's Portfolio</h1>
      <nav className='navbar'>
        <img id='logo' src={logo} alt="Ao's Logo" width={200} height={200}/>
        <Link to="/">Home</Link> | <Link to="/about">About Me</Link> | <Link to="/services">Services</Link>| <Link to="/project">Project</Link>| <Link to="/contact">Contact</Link>
      </nav>
      
      
    
      
    </>
  );
}

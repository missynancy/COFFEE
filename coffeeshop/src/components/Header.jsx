import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Components.css'




const Header = () => {
  

  return (
    <header>
        <div className='logo'>
            <span>M</span>
            <logo>
              <h5>ILLA</h5>
              <h4>COFFEE</h4>
            </logo>
        </div>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">Coffee</NavLink>
          <NavLink to="/services">Deserts</NavLink>
          <NavLink to="/blog">About</NavLink>
          <NavLink to="/gallery">Blog</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
    </header>
  );
};

export default Header;

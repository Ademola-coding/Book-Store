import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <div className='naving'>
      <h1 className='logo'>Bookstore</h1>
    <div className='links'>
      <Link to="/Books" className='link' >Books</Link>
      <Link to="/Categories" className='link'>Categories</Link>
    </div>
  </div>
);

export default NavBar;

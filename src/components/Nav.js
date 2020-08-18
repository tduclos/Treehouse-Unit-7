import React from 'react';
import { NavLink } from 'react-router-dom';

//NavLinks for my three favorite searches

const Nav = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li><NavLink to='/kittens'>Kittens</NavLink></li>
        <li><NavLink to='/puppies'>Puppies</NavLink></li>
        <li><NavLink to='/lizards'>Lizards</NavLink></li>
      </ul>
    </nav>
  );
};

export default Nav;
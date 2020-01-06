import React, { useState } from 'react';
import './NavBar.scss';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <nav className="nav-bar">
      <h1 className="logo">intrep<span>ed</span></h1>
      <form className="search-options">
        <label htmlFor="category-select">Course Topics</label>
        <select id="category-select">
          <option value="engagement">Engagement Strategies</option>
          <option value="classroom">Classroom Management</option>
          <option value="planning">Lesson Planning</option>
          <option value="culture">Culturally Responsive Teaching</option>
          <option value="data">Data-Driven Instruction</option>
        </select>
        <input type="text" placeholder="Search courses"/>
      </form>
    </nav>
  )
}

export default NavBar;
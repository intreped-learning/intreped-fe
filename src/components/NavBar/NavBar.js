import React from 'react';
import './NavBar.scss';

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <form className="search-options">
        <label htmlFor="category-select" id="categories">Course Categories</label>
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
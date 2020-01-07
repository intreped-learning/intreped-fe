import React, { useState } from 'react';
import './NavBar.scss';
import { useDispatch, useSelector } from 'react-redux';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const { currentCategory } = useSelector(state => state);
  const toggle = () => setIsOpen(!isOpen);

  const handleChange = (e) => {
    dispatch({
      type: 'CHANGE_CATEGORY',
      payload: e.target.value
    })
    
  }

  return (
    <nav className="nav-bar">
      <form className="search-options">
        <label htmlFor="category-select" id="categories">Course Categories</label>
        <select id="category-select" value={currentCategory} onChange = {handleChange}>
          <option value="All Categories">All Categories</option>
          <option value="Engagement Strategies">Engagement Strategies</option>
          <option value="Classroom Management">Classroom Management</option>
          <option value="Lesson Planning">Lesson Planning</option>
          <option value="Culturally Responsive Teaching">Culturally Responsive Teaching</option>
          <option value="Data-Driven Instruction">Data-Driven Instruction</option>
        </select>
        <input type="text" placeholder="Search courses"/>
      </form>
    </nav>
  )
}

export default NavBar;
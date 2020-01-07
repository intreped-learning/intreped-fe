import React, { useState } from 'react';
import './NavBar.scss';
import { useDispatch, useSelector } from 'react-redux';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const { currentCategory } = useSelector(state => state);
  const toggle = () => setIsOpen(!isOpen);

  const handleChangeDropDown = (e) => {
    dispatch({
      type: 'CHANGE_CATEGORY',
      payload: e.target.value
    })
  }

  const handleChangeInput = (e) => {
    dispatch({
      type: 'SEARCH_COURSES',
      payload: e.target.value
    })
  }

  return (
    <nav className="nav-bar">
      <form className="search-options">
        <select id="category-select" value={currentCategory} onChange = {handleChangeDropDown}>
          <option value="All Categories">All Categories</option>
          <option value="Engagement Strategies">Engagement Strategies</option>
          <option value="Classroom Management">Classroom Management</option>
          <option value="Effective Lesson Planning">Lesson Planning</option>
          <option value="Culturally Responsive Teaching">Culturally Responsive Teaching</option>
          <option value="Data-Driven Instruction">Data-Driven Instruction</option>
        </select>
        <input type="text" placeholder="Search courses" onChange={handleChangeInput}/>
      </form>
    </nav>
  )
}

export default NavBar;
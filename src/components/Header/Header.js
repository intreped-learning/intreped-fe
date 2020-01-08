import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

export const Header = () => {
  const dispatch = useDispatch();
  const { teacher } = useSelector(state => state)

  const handleLogOut = (e) => {
    e.preventDefault();
    dispatch({
      type: 'LOGOUT'
    })
  }
  return (
    <header>
      <Link className="logo" id="logo" to='/'>
        <h1>
          INTREP<span className="ed">ED</span>
        </h1>
      </Link>
      {!teacher.id &&
        <div>
          <button className="sign-in-btn" onClick={() => dispatch({ type: 'TOGGLE_MODAL' })}> Sign In </button>
          <button className="sign-up-btn"> Sign Up </button>
        </div>}
      {teacher.id &&
        <div className='signed-in-info'>
        <p className='teacher-name'>Welcome {teacher.name}!</p>
        <Link to='/dashboard' className='link-to-dashboard'>Dashboard</Link>
        <button className='sign-out-btn' onClick={handleLogOut}>Sign Out</button>
        </div>}
    </header>
  )
}

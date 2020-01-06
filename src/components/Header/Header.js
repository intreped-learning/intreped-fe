import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

export const Header = () => {
  
  return (
    <header>
      <Link className="logo" id="logo" to='/'>
        <h1> 
          INTREP<span className="ed">ED</span>
        </h1>
      </Link>
      <div>
        <button className="sign-in-btn"> Sign In </button>
        <button className="sign-up-btn"> Sign Up </button>
      </div>
    </header>
  )
}

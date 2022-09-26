import React from "react";
import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = ({ updateStories }) => {
  return (
    <nav>
      <Link to={'/'} style={{textDecoration: 'none'}}>
        <h1>NY Times News Reader</h1>
      </Link>
      <section className='topics-container'>
        <p className='home' onClick={() => {updateStories('home')}}>Home</p>
        <p className='topic' onClick={() => {updateStories('business')}}>Business</p>
        <p className='topic' onClick={() => {updateStories('health')}}>Health</p>
      </section>
    </nav>
  );
}

export default NavBar;
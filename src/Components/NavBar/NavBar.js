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
        <Link to={'/'} style={{textDecoration: 'none'}}>
          <p className='topic' onClick={() => {updateStories('home')}}>Home</p>
        </Link>
        <Link to={'/'} style={{textDecoration: 'none'}}>
          <p className='topic' onClick={() => {updateStories('arts')}}>Arts</p>
        </Link>
        <Link to={'/'} style={{textDecoration: 'none'}}>
          <p className='topic' onClick={() => {updateStories('business')}}>Business</p>
        </Link>
        <Link to={'/'} style={{textDecoration: 'none'}}>
          <p className='topic' onClick={() => {updateStories('health')}}>Health</p>
        </Link>
        <Link to={'/'} style={{textDecoration: 'none'}}>
          <p className='topic' onClick={() => {updateStories('politics')}}>Politics</p>
        </Link>
        <Link to={'/'} style={{textDecoration: 'none'}}>
          <p className='topic' onClick={() => {updateStories('sports')}}>Sports</p>
        </Link>
        <Link to={'/'} style={{textDecoration: 'none'}}>
          <p className='topic' onClick={() => {updateStories('technology')}}>Technology</p>
        </Link>
        <Link to={'/'} style={{textDecoration: 'none'}}>
          <p className='topic' onClick={() => {updateStories('world')}}>World</p>
        </Link>
      </section>
    </nav>
  );
}

export default NavBar;
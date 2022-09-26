import React from "react";
import './NavBar.css';
import { Link } from 'react-router-dom';


const NavBar = () => {
  return (
    <nav>
      <Link to={'/'} style={{textDecoration: 'none'}}>
        <h1>NY Times News Reader</h1>
      </Link>
    </nav>
  );
}

export default NavBar;
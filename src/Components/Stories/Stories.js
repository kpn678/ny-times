import React from "react";
import './Stories.css';
import { Link } from "react-router-dom";

const Stories = ({ title, byline, date, loadDetails }) => {
  return (
    <section className='story-card'>
      <Link to={'/details'} style={{textDecoration: 'none'}}>
        <h3 onClick={() => {loadDetails(title)}}>{title}</h3>
      </Link>
      <p>{byline}</p>
      <p>Published: {date}</p>
    </section>
  );
}

export default Stories;
import React from "react";
import './Stories.css';
import { Link } from "react-router-dom";

const Stories = ({ title, byline, date, icon, width, height, loadDetails }) => {
  return (
    <section className='story-card'>
      <img src={icon} height={height} width={width} alt='icon depiction of article topic'/>
      <Link to={'/details'} style={{textDecoration: 'none'}}>
        <h3 onClick={() => {loadDetails(title)}}>{title}</h3>
      </Link>
      <p>{byline}</p>
      <p>Published: {date}</p>
    </section>
  );
}

export default Stories;
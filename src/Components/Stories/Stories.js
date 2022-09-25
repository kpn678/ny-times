import React from "react";
import './Stories.css';

const Stories = ({ title, byline, date }) => {
  return (
    <section className='story-card'>
      <h3>{title}</h3>
      <p>{byline}</p>
      <p>{date}</p>
    </section>
  );
}

export default Stories;
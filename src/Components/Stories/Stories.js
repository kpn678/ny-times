import React from "react";
import './Stories.css';
import { Link } from "react-router-dom";

const Stories = ({ story, loadDetails }) => {
  return (
    <section className='story-card'>
      {story.multimedia === null ? 
        <p>No Image Available</p> :
        <img src={story.multimedia[2].url} height={story.multimedia[2].height} width={story.multimedia[2].width}/>
      }
      <Link to={'/details'} style={{textDecoration: 'none'}}>
        <h3 className='story-title' onClick={() => {loadDetails(story.title)}}>{story.title}</h3>
      </Link>
      <p>{story.byline}</p>
      <p>Published: {story.created_date.substr(0, 10)}</p>
    </section>
  );
}

export default Stories;
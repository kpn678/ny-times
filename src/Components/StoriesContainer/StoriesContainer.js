import React from "react";
import './StoriesContainer.css';
import Stories from "../Stories/Stories";

const StoriesContainer = ({ stories }) => {
  const allStories = stories.map((story, index) => {
    return <Stories 
      key={index}
      title={story.title}
      byline={story.byline}
      date={story.created_date.substr(0, 10)}
    />
  });
  
  return (
    <section className='stories-view'>
      <h2>Top Stories for Today</h2>
      <section className='stories-holder'>
        {allStories}
      </section>
    </section>
  );
}

export default StoriesContainer;

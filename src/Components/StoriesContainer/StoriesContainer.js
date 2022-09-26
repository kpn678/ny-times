import React from "react";
import './StoriesContainer.css';
import Stories from "../Stories/Stories";

const StoriesContainer = ({ stories, loadDetails }) => {
  const allStories = stories.map((story, index) => {
    return <Stories 
      key={index}
      title={story.title}
      byline={story.byline}
      date={story.created_date.substr(0, 10)}
      icon={story.multimedia[2].url} 
      height={story.multimedia[2].height} 
      width={story.multimedia[2].width} 
      loadDetails={loadDetails}
    />
  });

  let today = new Date().toLocaleDateString();
  
  return (
    <section className='stories-view'>
      <h2>Top Stories for Today, {today}</h2>
      <section className='stories-holder'>
        {allStories}
      </section>
    </section>
  );
}

export default StoriesContainer;

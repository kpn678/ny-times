import React from "react";
import './StoriesContainer.css';
import Stories from "../Stories/Stories";

const StoriesContainer = ({ stories, loadDetails, topic }) => {
  const allStories = stories.map((story, index) => {
    return <Stories 
      key={index}
      story={story}
      loadDetails={loadDetails}
    />
  });

  let today = new Date().toLocaleDateString();

  const capitalizedTopic = topic.charAt(0).toUpperCase() + topic.slice(1);
  
  return (
    <section className='stories-view'>
      {capitalizedTopic !== 'Home' || '' ? 
        <h2>Top {capitalizedTopic} Stories for Today, {today}</h2> :
        <h2> Top Stories for Today, {today}</h2>
      }
      <section className='stories-holder'>
        {allStories}
      </section>
    </section>
  );
}

export default StoriesContainer;

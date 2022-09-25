import React from "react";
import './StoriesContainer.css';
import Stories from "../Stories/Stories";

const StoriesContainer = () => {
  return (
    <section className='stories-view'>
      <h2>Top Stories for Today</h2>
      <Stories />
    </section>
  );
}

export default StoriesContainer;

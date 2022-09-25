import React, { useState, useEffect } from 'react';
import './App.css';
import StoriesContainer from './Components/StoriesContainer/StoriesContainer';
import { Link, Route } from 'react-router-dom';
import { getStories } from './apiCalls';

const App = () => {

  const [stories, setStories] = useState([]);
  const [error, setError] = useState('');

  const updateStories = async () => {
    try {
      const listOfStories = await getStories();
      setStories(listOfStories.results);
    } catch (e) {
      console.log(e);
      setError('Oops, something went wrong, please try again!');
    };
  }

  useEffect(() => {
    updateStories();
  }, []);

  console.log(stories)
  return (
    <nav>
      <Link to={'/'} style={{textDecoration: 'none'}}>
        <h1>NY Times News Reader</h1>
      </Link>
      <Route 
        exact path='/' render={() => {
          return (
            <StoriesContainer stories={stories} />
          )
        }}
      />
    </nav>
  );
}

export default App;

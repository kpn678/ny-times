import React, { useState, useEffect } from 'react';
import './App.css';
import StoriesContainer from './Components/StoriesContainer/StoriesContainer';
import { Route } from 'react-router-dom';
import { getStories } from './apiCalls';
import DetailedPage from './Components/DetailedPage/DetailedPage';
import NavBar from './Components/NavBar/NavBar';

const App = () => {
  const [stories, setStories] = useState([]);
  const [error, setError] = useState('');
  const [match, setMatch] = useState({});

  const loadStories = async () => {
    try {
      const listOfStories = await getStories('home');
      setStories(listOfStories.results);
    } catch (e) {
      console.log(e);
      setError('Oops, something went wrong, please try again!');
    };
  }

  useEffect(() => {
    loadStories();
  }, []);

  const loadDetails = (articleTitle) => {
    setMatch(stories.find(story => story.title === articleTitle));
  }

  return (
    <>
      <NavBar />
      <main>
        <Route 
          exact path='/' render={() => {
            return (<StoriesContainer stories={stories} loadDetails={loadDetails} />);
          }}
        />
        <Route
          path='/details' render={() => {
            return (<DetailedPage match={match} />);
          }}
        />
      </main>
    </>   
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import './App.css';
import StoriesContainer from './Components/StoriesContainer/StoriesContainer';
import { Link, Route } from 'react-router-dom';
import { getStories } from './apiCalls';
import DetailedPage from './Components/DetailedPage/DetailedPage';

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
      <nav>
        <Link to={'/'} style={{textDecoration: 'none'}}>
          <h1>NY Times News Reader</h1>
        </Link>
      </nav>
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

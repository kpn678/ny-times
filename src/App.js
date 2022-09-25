import React from 'react';
import './App.css';
import StoriesContainer from './Components/StoriesContainer/StoriesContainer';
import { Link, Route } from 'react-router-dom';

function App() {
  return (
    <nav>
      <Link to={'/'} style={{textDecoration: 'none'}}>
        <h1>NY Times News Reader</h1>
      </Link>
      <Route 
        exact path='/' render={() => {
          return (
            <StoriesContainer />
          )
        }}
      />
    </nav>
  );
}

export default App;

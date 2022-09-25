import React from 'react';
import './App.css';
import StoriesContainer from './Components/StoriesContainer/StoriesContainer';

function App() {
  return (
    <nav>
      <h1>NY Times News Reader</h1>
      <StoriesContainer />
    </nav>
  );
}

export default App;

import React from 'react';
import axios from 'axios';
import './App.css';

// Components (User "views")
import FeelingRating from '../FeelingRating/FeelingRating';


function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <FeelingRating />
    </div>
  );
}

export default App;

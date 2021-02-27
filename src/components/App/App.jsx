import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';

// Components (User "views")
import FeelingRating from '../FeelingRating/FeelingRating';
import UnderstandingRating from '../UnderstandingRating/UnderstandingRating';


function App() {

  return (
    <div className='App'>

      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>

      <Router>

        {/* 1st view, Input Feeling Rating */}
        {/* How are you feeling today? */}
        <Route path="/" exact>
          <FeelingRating />
        </Route>

        {/* 2nd view, Input Understand Rating */}
        {/* How well are you understanding the content? */}
        <Route path="/2">
          <UnderstandingRating />
        </Route>

        {/* 3rd view, Input Support Rating */}
        {/* How well are you being supported? */}

        {/* 4th view, Input Additional Comments */}
        {/* Any comments you want to leave? */}
      </Router>

    </div>
  );
}

export default App;

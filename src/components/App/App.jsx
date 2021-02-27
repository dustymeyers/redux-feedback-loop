import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';

// Components (User "views")
import AdditionalComments from '../AdditionalComments/AdditionalComments';
import FeelingRating from '../FeelingRating/FeelingRating';
import Home from '../Home/Home';
import SupportRating from '../SupportRating/SupportRating';
import UnderstandingRating from '../UnderstandingRating/UnderstandingRating';


function App() {

  return (
    <div className='App'>

      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>

      <Router>

        {/* Home, Welcome Greeting */}
        {/* Invites the user to engage with survey */}
        <Route path="/" exact>
          <Home />
        </Route>

        {/* 1st view, Input Feeling Rating */}
        {/* How are you feeling today? */}
        <Route path="/question1">
          <FeelingRating />
        </Route>

        {/* 2nd view, Input Understand Rating */}
        {/* How well are you understanding the content? */}
        <Route path="/question2">
          <UnderstandingRating />
        </Route>

        {/* 3rd view, Input Support Rating */}
        {/* How well are you being supported? */}
        <Route path="/question3">
            <SupportRating />
        </Route>

        {/* 4th view, Input Additional Comments */}
        {/* Any comments you want to leave? */}
        <Route path="/question4">
          <AdditionalComments />
        </Route>

        {/* 5th view, Review Feedback Before Submission to DB */}

      </Router>

    </div>
  );
}

export default App;

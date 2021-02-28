import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';
import axios from 'axios';

// App.jsx Stylesheet
import './App.css';

// Components (User "views")
import Admin from '../Admin/Admin';
import AdditionalComments from '../AdditionalComments/AdditionalComments';
import FeelingRating from '../FeelingRating/FeelingRating';
import Home from '../Home/Home';
import ReviewFeedback from '../ReviewFeedback/ReviewFeedback'
import SupportRating from '../SupportRating/SupportRating';
import UnderstandingRating from '../UnderstandingRating/UnderstandingRating';

function App() {
  // Local state used for conditional rendering on Home page
  // On submission from ReviewFeedback, boolean is set to true
  // When the "give feedback" button is clicked on home, boolean is set to false
  const [isFeedbackSubmitted, setIsFeedbackSubmitted] = useState(false);
  
  return (
    <div className='App'>
      
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>

      <main className='App-main'>
        <Router>

          {/* Home, Welcome Greeting */}
          {/* Invites the user to engage with survey */}
          <Route path="/" exact>
            <Home 
              isFeedbackSubmitted={isFeedbackSubmitted} 
              setIsFeedbackSubmitted={setIsFeedbackSubmitted} 
            />
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
          {/* Review your feedback before submission. */}
          <Route path="/reviewFeedback">
            <ReviewFeedback setIsFeedbackSubmitted={setIsFeedbackSubmitted} />
          </Route>

          <Route path="/admin">
            <Admin />
          </Route>

        </Router>
      </main>
    </div>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// Used to log Redux state
import logger from 'redux-logger';

// Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

// feedback reducer stores submitted values from each input view
// This data will be packed into a complete body for DB submission on completion
const feedback = (state = {}, action) => {
  // Action from the first form - Feeling Submission
  if(action.type === 'SET_FEELING_RATING') {
    return {
      ...state, 
      [action.payload.property]: action.payload.value
    }; 
  }

  /**
   * State is now:
   * 
   * { feeling: (score 1 out of 5) }
   */

  // Action from the second form - Understanding Submission
  if(action.type === 'SET_UNDERSTANDING_RATING') {
    return {
      ...state, 
      [action.payload.property]: action.payload.value
    }; 
  
  /**
   * State is now:
   * 
   * { feeling: (score 1 out of 5), understanding: (score 1 out of 5) }
   */
}

  // Action from the third form - Support Submission
  if(action.type === 'SET_SUPPORT_RATING') {
    return {
      ...state, 
      [action.payload.property]: action.payload.value
    }; 
    
    /**
     * State is now:
     * 
     * { 
     *  feeling: (score 1 out of 5), 
     *  understanding: (score 1 out of 5), 
     *  support: (score 1 out of 5) 
     * }
     */
  }
  
  // Action from the third form - Comments Submission
  if(action.type === 'SET_COMMENTS') {
    return {
      ...state, 
      [action.payload.property]: action.payload.value
    }; // { feeling: (score 1 out of 5), understanding: (score 1 out of 5), support: (score 1 out of 5), comments: 'A string of text from user, could be blank (optional)' }
    
    /**
     * State is now:
     * 
     * { 
     *  feeling: (score 1 out of 5), 
     *  understanding: (score 1 out of 5), 
     *  support: (score 1 out of 5), 
     *  comments: 'A string of text from user, could be blank (optional).' 
     * }
     */
  }

  // Action when sent back to home page - resets feedback state
  if(action.type === 'CLEAR_FEEDBACK') {
    return {};
  }
  
  return state;
}

const storeInstance = createStore(
  combineReducers({
    feedback
  }),
  applyMiddleware(logger)
)

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>
  , document.getElementById('root')
);
registerServiceWorker();

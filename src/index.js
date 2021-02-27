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

const feedback = (state = {}, action) => {
  if(action.type === 'SET_FEELING_RATING') {
    return action.payload;
  }
  if(action.type === 'SET_UNDERSTANDING_RATING') {
    return {
      ...state, 
      [action.payload.property]: action.payload.value
    };
  }
  if(action.type === 'SET_SUPPORT_RATING') {
    return {
      ...state, 
      [action.payload.property]: action.payload.value
    };
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

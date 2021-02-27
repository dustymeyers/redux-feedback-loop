import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

/**
 * FeelingRating Renders the First Form View for Feedback
 * "/question1"
 * 
 * Form validates that the proper data is sent to DB.
 * Form dispatches input to the global state.
 */

function FeelingRating(){
  const dispatch = useDispatch();
  const history = useHistory(); 
  const feedback = useSelector(store => store.feedback);

  let feelingReduxState;

  // conditional to set local react state and avoid undefined.
  // if editing a previous entry, will show current reducer state in input
  if (feedback.feeling) {
    console.log('feeling is', feedback.feeling);
    feelingReduxState = feedback.feeling;
  } else {
    console.log('feeling is undefined');
    feelingReduxState = '';
  }

  // local state for input
  const [feeling, setFeeling] = useState(feelingReduxState);

  // go back to previous page
  const handleBack = (event) => {
    event.preventDefault();

    history.push('/');
  } // end handleBack
  
  // on FeelingRating form submission validate and dispatch appropriate data
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('in handleSubmit, feeling is: ', feeling);

    // validate data on form submission
    if (feeling === '') {
      return alert('Please enter a number between 1 and 5 before submission.')
    }
    
    // if there is data, send local state to be stored in reducer
    dispatch({
      type: 'SET_FEELING_RATING',
      payload: { property: 'feeling', value: feeling }
    })

    // reset local state on submission
    setFeeling('');

    // move user to the next page 
    history.push('/question2');
  } // end handleSubmit

  return(
    <>
      <h2>How are you feeling today?</h2>
      <form onSubmit={handleSubmit}>
      <button onClick={handleBack}>Back</button>
        <input 
          // forces the input value from string to number from submission
          onChange={event => setFeeling(Number(event.target.value))} 
          type="number" 
          placeholder="1-5" 
          min = "1" 
          max="5" 
          value={feeling}
        />
        {/* TODO - Make accessible-friendly button */}
        <button>Next</button>
      </form>
    </>
  );
} // end FeelingRating

export default FeelingRating;
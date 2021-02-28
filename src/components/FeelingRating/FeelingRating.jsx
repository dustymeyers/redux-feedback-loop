import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// MATERIAL-UI
import { Button, ButtonGroup, TextField } from '@material-ui/core';

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
      return alert('Please enter a number between 1 and 5 before submission.');
    } else if (feeling > 5 || feeling < 1)     {
      return alert('Please enter a number between 1 and 5 before submission.');
    } else {
      // if there is data, send local state to be stored in reducer
      dispatch({
        type: 'SET_FEELING_RATING',
        payload: { property: 'feeling', value: feeling }
      })

      // reset local state on submission
      setFeeling('');

      // move user to the next page 
      history.push('/question2');
    } // end else
  } // end handleSubmit
    


  return(
    <>
      <h2>How are you feeling today?</h2>
      <form onSubmit={handleSubmit}>
        <TextField 
          type="number" 
          id="filled-basic" 
          label="Rate How You're Feeling" 
          variant="filled" 
          placeholder="1 - 5" 
          min="1"
          max="5"
          value={feeling}
          // forces the input value from string to number from submission
          onChange={event => setFeeling(Number(event.target.value))} 
          fullWidth
        />
        <br />
        <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
          <Button onClick={handleBack}>Back</Button>
          <Button onClick={handleSubmit}>Next</Button>
        </ButtonGroup>
      </form>
    </>
  );
} // end FeelingRating

export default FeelingRating;
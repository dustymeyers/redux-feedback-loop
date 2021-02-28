import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// MATERIAL-UI
import { Button, ButtonGroup, TextField } from '@material-ui/core';

/**
 * UnderstandingRating Renders the Second Form View for Feedback
 * "/question2"
 * 
 * Form validates that the proper data is sent to DB.
 * Form dispatches input to the global state.
 */

function UnderstandingRating() {
  const dispatch = useDispatch();
  const history = useHistory();
  const feedback = useSelector(store => store.feedback);

  let understandingReduxState;

  // conditional to set local react state and avoid undefined.
  // if editing a previous entry, will show current reducer state in input
  if (feedback.understanding) {
    console.log('understanding is', feedback.understanding);
    understandingReduxState = feedback.understanding;
  } else {
    console.log('understanding is undefined');
    understandingReduxState = '';
  }

  // local state for input
  const [understanding, setUnderstanding] = useState(understandingReduxState);

  // go back to previous page
  const handleBack = (event) => {
    event.preventDefault();

    history.push('/question1');
  } // end handleBack
  
  // on form submission validate and dispatch appropriate data
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('in handleSubmit, understanding is: ', understanding);

    // validate data on form submission
    if (understanding === '') {
      return alert('Please enter a number between 1 and 5 before submission.');
    } else if (understanding > 5 || understanding < 1)     {
      return alert('Please enter a number between 1 and 5 before submission.');
    } else {
      // if there is data, send local state to be stored in reducer
      dispatch({
        type: 'SET_UNDERSTANDING_RATING',
        payload: { property: 'understanding', value: understanding }
      })

      // reset local state on submission
      setUnderstanding('');

      // move user to the next page 
      history.push('/question3');
    } // end else
  } // end handleSubmit

  return(
    <>
      <h2>How well are you understanding the content?</h2>
      <form onSubmit={handleSubmit}>
        <TextField 
          type="number" 
          id="filled-basic" 
          label="Rate Your Comprehension" 
          variant="filled" 
          placeholder="1 - 5" 
          min="1"
          max="5"
          value={understanding}
          // forces the input value from string to number from submission
          onChange={event => setUnderstanding(Number(event.target.value))} 
          fullWidth
        />
        <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
          <Button onClick={handleBack}>Back</Button>
          <Button onClick={handleSubmit}>Next</Button>
        </ButtonGroup>
      </form>
    </>
  );

} // end UnderstandingRating

export default UnderstandingRating;
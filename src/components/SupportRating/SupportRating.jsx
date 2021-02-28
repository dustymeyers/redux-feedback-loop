import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// MATERIAL-UI
import { Button, ButtonGroup, TextField } from '@material-ui/core';

/**
 * SupportRating Renders the Third Form View for Feedback
 * "/question3"
 * 
 * Form validates that the proper data is sent to DB.
 * Form dispatches input to the global state.
 */

function SupportRating() {
  const dispatch = useDispatch();
  const history = useHistory();
  const feedback = useSelector(store => store.feedback);

  let supportReduxState;

  // conditional to set local react state and avoid undefined.
  // if editing a previous entry, will show current reducer state in input
  if (feedback.support) {
    console.log('support is', feedback.support);
    supportReduxState = feedback.support;
  } else {
    console.log('support is undefined');
    supportReduxState = '';
  }

  // local state for input
  const [support, setSupport] = useState(supportReduxState);

  // go back to previous page
  const handleBack = (event) => {
    event.preventDefault();

    history.push('/question2');
  } // end handleBack
  
  // on form submission validate and dispatch appropriate data
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('in handleSubmit, understanding is: ', support);

    // validate data on form submission
    if (support === '') {
      return alert('Please enter a number between 1 and 5 before submission.');
    } else if (support > 5 || support < 1)     {
      return alert('Please enter a number between 1 and 5 before submission.');
    } else {
      // if there is data, send local state to be stored in reducer
      dispatch({
        type: 'SET_SUPPORT_RATING',
        payload: { property: 'support', value: support }
      })

      // reset local state on submission
      setSupport('');

      // move user to the next page 
      history.push('/question4');
    } // end else
  } // end handleSubmit

  return(
    <>
      <h2>How well are you being supported?</h2>
      <form onSubmit={handleSubmit}>
        <TextField 
          type="number" 
          id="filled-basic" 
          label="Rate How Supported You Feel" 
          variant="filled" 
          placeholder="1 - 5" 
          min="1"
          max="5"
          value={support}
          // forces the input value from string to number from submission
          onChange={event => setSupport(Number(event.target.value))} 
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
} // end SupportRating

export default SupportRating;
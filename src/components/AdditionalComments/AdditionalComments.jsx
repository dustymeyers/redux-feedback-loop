import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// MATERIAL-UI
import { Button, ButtonGroup, TextField } from '@material-ui/core';

/**
 * AdditionalComments Renders the Fourth Form View for Feedback
 * "/question4"
 * 
 * Form validates that the proper data is sent to DB.
 * Form dispatches input to the global state.
 */

function AdditionalComments(){
  const dispatch = useDispatch();
  const history = useHistory();
  const feedback = useSelector(store => store.feedback);

  let commentsReduxState;

  // conditional to set local react state and avoid undefined.
  // if editing a previous entry, will show current reducer state in input
  if (feedback.comments) {
    console.log('comments is', feedback.comments);
    commentsReduxState = feedback.comments;
  } else {
    console.log('support is undefined');
    commentsReduxState = '';
  }

  // local state for input
  const [comments, setComments] = useState(commentsReduxState);

  // go back to previous page
  const handleBack = (event) => {
    event.preventDefault();

    history.push('/question3');
  } // end handleBack
  
  // on form submission validate and dispatch appropriate data
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('in handleSubmit, understanding is: ', comments);
    
    // if there is data, send local state to be stored in reducer
    dispatch({
      type: 'SET_COMMENTS',
      payload: { property: 'comments', value: comments }
    })

    // reset local state on submission
    setComments('');

    // move user to the next page 
    history.push('/reviewFeedback');
  } // end handleSubmit

  return(
    <>
      <h2>Do you have any additional comments?</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          id="filled-multiline-flexible"
          label="Additional Comments (optional)"
          placeholder="Please, feel free to share any additional comments you might have."
          multiline
          fullWidth
          rows={4}
          value={comments}
          onChange={event => setComments(event.target.value)}
          variant="filled"
        />
        <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
          <Button onClick={handleBack}>Back</Button>
          <Button onClick={handleSubmit}>Next</Button>
        </ButtonGroup>
      </form>
    </>
  );
} // end AdditionalComments

export default AdditionalComments;
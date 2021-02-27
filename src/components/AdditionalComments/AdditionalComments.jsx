import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

/**
 * AdditionalComments Renders the Fourth Form View for Feedback
 * 
 * Form validates that the proper data is sent to DB.
 * Form dispatches input to the global state.
 */

function AdditionalComments(){
  const dispatch = useDispatch();
  const history = useHistory();

  // local state for input
  const [comments, setComments] = useState('');
  
  // on form submission validate and dispatch appropriate data
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('in handleSubmit, understanding is: ', comments);

    // validate data on form submission
    if (comments === ''){
      return alert('Please enter a number between 1 and 5 before submission.')
    }
    
    // if there is data, send local state to be stored in reducer
    dispatch({
      type: 'SET_COMMENTS',
      payload: { property: 'comments', value: comments }
    })

    // reset local state on submission
    setComments('');

    // move user to the next page 
    history.push('/reviewFeedback');
  }

  return(
    <>
      <h2>How well are you understanding the content?</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          onChange={event => setComments(event.target.value)} 
          placeholder="Please, feel free to share any additional comments you might have."
          value={comments}
          rows="4" 
          cols="50"
        ></textarea>
        {/* TODO - Make accessible-friendly button */}
        <button>Next</button>
      </form>
    </>
  );
} // end AdditionalComments

export default AdditionalComments;
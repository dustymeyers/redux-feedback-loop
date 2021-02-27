import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

/**
 * SupportRating Renders the Third Form View for Feedback
 * 
 * Form validates that the proper data is sent to DB.
 * Form dispatches input to the global state.
 */

function SupportRating() {
  const dispatch = useDispatch();
  const history = useHistory();

  // local state for input
  const [support, setSupport] = useState('');
  
  // on form submission validate and dispatch appropriate data
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('in handleSubmit, understanding is: ', support);

    // validate data on form submission
    if (support === ''){
      return alert('Please enter a number between 1 and 5 before submission.')
    }
    
    // if there is data, send local state to be stored in reducer
    dispatch({
      type: 'SET_UNDERSTANDING_RATING',
      payload: { property: 'support', value: support }
    })

    // reset local state on submission
    setSupport('');

    // move user to the next page 
    history.push('/question4');
  }

  return(
    <>
      <h2>How well are you being supported?</h2>
      <form onSubmit={handleSubmit}>
        <input 
          // forces the input value from string to number from submission
          onChange={event => setSupport(Number(event.target.value))} 
          type="number" 
          placeholder="1 - 5" 
          min = "1" 
          max="5" 
          value={support}
        />
        {/* TODO - Make accessible-friendly button */}
        <button>Next</button>
      </form>
    </>
  );
}

export default SupportRating;
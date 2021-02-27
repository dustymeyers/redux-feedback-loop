import { useState } from 'react';
import { useDispatch } from 'react-redux';

/**
 * UnderstandingRating Renders the Second Form View for Feedback
 * 
 * Form validates that the proper data is sent to DB.
 * Form dispatches input to the global state.
 */

function UnderstandingRating() {
  const dispatch = useDispatch();

  // local state for input
  const [understanding, setUnderstanding] = useState('');
  
  // on FeelingRating form submission validate and dispatch appropriate data
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('in handleSubmit, feeling is: ', understanding);
    // validate data on form submission
    if (understanding === ''){
      return alert('Please enter a number between 1 and 5 before submission.')
    }
    
    // if there is data, send local state to be stored in reducer
    dispatch({
      type: 'ADD_UNDERSTANDING_RATING',
      payload: { feeling: understanding }
    })

    // reset local state on submission
    setUnderstanding('');
  }

  return(
    <>
      <h2>How well are you understanding the content? </h2>
      <form onSubmit={handleSubmit}>
        <input 
          // forces the input value from string to number from submission
          onChange={event => setUnderstanding(Number(event.target.value))} 
          type="number" 
          placeholder="1 - 5" 
          min = "1" 
          max="5" 
          value={understanding}
        />
        {/* TODO - history.push to UnderstandingRating */}
        <button>Next</button>
      </form>
    </>
  );

} // end UnderstandingRating

export default UnderstandingRating;
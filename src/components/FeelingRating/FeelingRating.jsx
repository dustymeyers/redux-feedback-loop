import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

/**
 * FeelingRating Renders the First Form View for Feedback
 * 
 * Form validates that the proper data is sent to DB.
 * Form dispatches input to the global state.
 */

function FeelingRating(){
  const dispatch = useDispatch();
  const history = useHistory();

  // local state for input
  const [feeling, setFeeling] = useState('');
  
  // on FeelingRating form submission validate and dispatch appropriate data
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('in handleSubmit, feeling is: ', feeling);

    // validate data on form submission
    if (feeling === ''){
      return alert('Please enter a number between 1 and 5 before submission.')
    }
    
    // if there is data, send local state to be stored in reducer
    dispatch({
      type: 'SET_FEELING_RATING',
      payload: { feeling }
    })

    // reset local state on submission
    setFeeling('');

    // move user to the next page 
    history.push('/question2');
  }

  return(
    <>
      <h2>How are you feeling today?</h2>
      <form onSubmit={handleSubmit}>
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
}

export default FeelingRating;
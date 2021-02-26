import { useState } from 'react';
import { useDispatch } from 'react-redux';

function FeelingRating(){
  const dispatch = useDispatch();

  // local state for input
  const [feeling, setFeeling] = useState(0);
  

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('in handleSubmit, feeling is: ', feeling);
    // validate data on form submission
    if (feeling === ''){
      return alert('Please enter a number between 1 and 5 before submission.')
    }
    
    // if there is data,
    dispatch({
      type: 'ADD_FEELING_RATING',
      payload: { feeling }
    })

  }

  return(
    <>
      <h2>How are you feeling today?</h2>
      <form onSubmit={handleSubmit}>
        <input 
          onChange={event => setFeeling(Number(event.target.value))} 
          type="number" 
          placeholder="1-5" 
          min = "1" 
          max="5" 
          value={feeling}
        />
        {/* TODO - history.push to UnderstandingRating */}
        <button>Next</button>
      </form>
    </>
  );
}

export default FeelingRating;
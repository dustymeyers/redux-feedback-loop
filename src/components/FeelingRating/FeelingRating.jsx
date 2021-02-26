import { useState } from 'react';

function FeelingRating(){
  // local state for input
  const [feelingRating, setFeelingRating] = useState(0);
  

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('in handleSubmit, feelingRating is: ', feelingRating);


  }

  return(
    <>
      <h2>How are you feeling today?</h2>
      <form onSubmit={handleSubmit}>
        <input 
          onChange={event => setFeelingRating(event.target.value)} 
          type="number" 
          placeholder="1-5" 
          min = "1" 
          max="5" 
          value={feelingRating}
        />
        {/* TODO - history.push to UnderstandingRating */}
        <button>Next</button>
      </form>
    </>
  );
}

export default FeelingRating;
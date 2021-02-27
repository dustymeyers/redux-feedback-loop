import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function ReviewFeedback() {
  const history = useHistory();
  const dispatch = useDispatch();

  const feedback = useSelector(store => store.feedback);

  const submitFeedback = () => {
    console.log('in submitFeedback');
    // validate that the submission fields are not 
    // axios POST to DB

    

    // set a boolean value to render conditional thanks on home screen

    // dispatch to clear state
    routeToHome();
  }

  // resets the feedback reducer to original state (pre-form input)
  const routeToHome = () => {
    dispatch({ type: 'CLEAR_FEEDBACK' });
    history.push('/');
  };

  return(
    <>
      {/* Ratings for feeling, understanding, and support must not be empty (undefined) 
          if blank send back to home to begin form input again */}
      {feedback.feeling && feedback.understanding && feedback.support 
      ? (
          <>
            <h2>Review Your Feedback</h2>
            <h4>Feeling: {feedback.feeling} </h4>
            <h4>Understanding: {feedback.understanding}</h4>
            <h4>Support: {feedback.support}</h4>
            <h4>Comments: {feedback.comments}</h4>
            <button onClick={submitFeedback}>Submit</button>
          </>
        ) : routeToHome} 
    </>
  );  
} // end ReviewFeedback

export default ReviewFeedback;
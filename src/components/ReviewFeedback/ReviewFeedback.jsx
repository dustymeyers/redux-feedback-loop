import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function ReviewFeedback({isFeedbackSubmitted, setIsFeedbackSubmitted}) {
  const history = useHistory();
  const dispatch = useDispatch();
  const feedback = useSelector(store => store.feedback);

  // resets the feedback reducer to original state (pre-form input)
  const routeToHome = () => {
    // clear our feedback reducer
    dispatch({ type: 'CLEAR_FEEDBACK' });
    // send user back to the Home page
    history.push('/');
  };

  // Submits feedback scores/comments stored in feedback reducer
  // Axios post sends data to DB
  const submitFeedback = () => {
    console.log('in submitFeedback', feedback.feeling);

    // axios POST to DB
    axios.post('/api/feedback', feedback)
      .then(res => {
        console.log(`Server response after submission:`, res);

        // set a boolean value to render conditional thanks on home screen
        setIsFeedbackSubmitted(true);
      })
      .catch(err => {
        console.log('There was an error adding feedback', err);

        alert('There was an error adding your feedback. Please, try again.');
      })

      // dispatch to clear state and start over
      routeToHome();
    } // end submitFeedback

  return(
    <>
      {/* Ratings for feeling, understanding, and support must not be empty (undefined) 
          if blank send back to home to begin form input again */}
      {feedback.feeling && feedback.understanding && feedback.support 
      ? (
          <>
            <h2>Review Your Feedback</h2>
            <h4 onClick={() => history.push('/question1')}>Feeling: {feedback.feeling} </h4>
            <h4 onClick={() => history.push('/question2')}>Understanding: {feedback.understanding}</h4>
            <h4 onClick={() => history.push('/question3')}>Support: {feedback.support}</h4>
            <h4 onClick={() => history.push('/question4')}>Comments: {feedback.comments}</h4>
            <button onClick={submitFeedback}>Submit</button>
            <p>Feel free to click on a feedback score to edit it.</p>
          </>
        ) : routeToHome()} 
    </>
  );  
} // end ReviewFeedback

export default ReviewFeedback;
import { useSelector} from 'react-redux';

function ReviewFeedback() {
  const feedback = useSelector(store => store.feedback);

  const submitFeedback = () => {
    console.log('in submitFeedback');
  }

  return(
    <>
      <h2>Review Your Feedback</h2>
      <h4>Feeling: {feedback.feeling} </h4>
      <h4>Understanding: {feedback.understanding}</h4>
      <h4>Support: {feedback.support}</h4>
      <h4>Comments: {feedback.comments}</h4>

      <button onClick={submitFeedback}>Submit</button>

    </>
  );  
} // end ReviewFeedback

export default ReviewFeedback;
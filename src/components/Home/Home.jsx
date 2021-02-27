import { Link } from 'react-router-dom';
import './Home.css';

function Home ({isFeedbackSubmitted, setIsFeedbackSubmitted}) {
  console.log('isFeedbackSubmitted', isFeedbackSubmitted);

  return(
    <>
      <h2>Let us know how you're feeling this week!</h2>

      {/* Home page set to render thank you message if isFeedbackSubmitted is true.
          On successful feedback submission in ReviewFeedback.jsx, isFeedbackSubmitted will be set to true.
          Default state set to render without thank you (false).*/}

      {isFeedbackSubmitted 
        ? <h3>Thanks for your submission! Would you like to submit your feedback again?</h3>
        : <h4>Submit your feedback</h4>
      }

      <div className="button">
        {/* On form start, set isFeedbackSubmitted back to false to reset the state */}
        <Link to="/question1" onClick={setIsFeedbackSubmitted(false)}>Give Feedback</Link>
      </div>
      
    </>
  );
} // end Home

export default Home;
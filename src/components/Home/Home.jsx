import { Link } from 'react-router-dom';
import './Home.css';

function Home ({isFeedbackSubmitted, setIsFeedbackSubmitted}) {
  console.log('isFeedbackSubmitted', isFeedbackSubmitted);

  let homeMessage, buttonDisplay;
  
  
  if (isFeedbackSubmitted === true) {
    homeMessage = (<h3 className="successMessage">Thanks for your submission! Would you like to submit your feedback again?</h3>);
    buttonDisplay = 'Give New Feedback';
  } else {
    homeMessage = (<h4>Submit your feedback</h4>);
    buttonDisplay = 'Give Feedback';
  }
  
  return(
    <>
      <h2>Let us know how you're feeling this week!</h2>

      
      {homeMessage}

      <div className="button">
        {/* On form start, set isFeedbackSubmitted back to false to reset the state */}
        <Link to="/question1">{buttonDisplay}</Link>
  
      </div>
      
    </>
  );
} // end Home

export default Home;

// {/* Home page set to render thank you message if isFeedbackSubmitted is true.
//           On successful feedback submission in ReviewFeedback.jsx, isFeedbackSubmitted will be set to true.
//           Default state set to render without thank you (false).*/}

//           {isFeedbackSubmitted 
//             ? <h3>Thanks for your submission! Would you like to submit your feedback again?</h3>
//             : <h4>Submit your feedback</h4>
//           }
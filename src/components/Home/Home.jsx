import { Link, useHistory } from 'react-router-dom';
import './Home.css';

// MATERIAL-UI
import {Button} from '@material-ui/core';


/**
 * Renders Home Screen '/'
 * 
 * Uses conditional rendering to check if a submission was previously submitted.
 * Uses props to store boolean data before/after form submission.
 */
function Home ({isFeedbackSubmitted, setIsFeedbackSubmitted}) {
  console.log('isFeedbackSubmitted', isFeedbackSubmitted);
  const history = useHistory();

  // Used for rendering sections of Home page.
  let homeMessage, buttonDisplay;
  
  /**
   * Home page set to render thank you message if isFeedbackSubmitted is true.
   * On successful feedback submission from ReviewFeedback.jsx ('/reviewFeedback'), 
   * isFeedbackSubmitted will be set to true.
   * 
   * True - Renders "Thanks for submit." message and "Give New Feedback" button.
   * False - Default state  set to render without thank you and button renders "Give Feedback".
   */

  if (isFeedbackSubmitted === true) {
    homeMessage = (
      <h3 className="successMessage">
        Thanks for your submission! Would you like to submit new feedback?
      </h3>
    );

    buttonDisplay = 'Give New Feedback';
  } else {
    homeMessage = (<h4>Submit your feedback</h4>);
    
    buttonDisplay = 'Give Feedback';
  }
  
  return(
    <>
      <h2>Let us know how you're feeling this week!</h2>
      {homeMessage}
      <Button
        variant="contained"
        color="primary"
        onClick={() => history.push('/question1')}
      >
        {buttonDisplay}
      </Button>
    </>
  );
} // end Home

export default Home;

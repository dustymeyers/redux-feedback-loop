import { Link } from 'react-router-dom';
import './Home.css';

function Home ({isFeedbackSubmitted, setIsFeedbackSubmitted}) {

  return(
    <>
      <h2>Let us know how you're feeling this week!</h2>
      <h4>Submit your feedback</h4>
      <div className="button">
        <Link to="/question1">Give Feedback</Link>
      </div>
      
    </>
  );
} // end Home

export default Home;
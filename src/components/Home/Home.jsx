import { Link } from 'react-router-dom';

function Home () {

  return(
    <>
      <h2>Let us know you're feeling this week!</h2>
      <h4>Submit your feedback</h4>
      <div class="button">
        <Link to="/question1">Give Feedback</Link>
      </div>
      
    </>
  );
} // end Home

export default Home;
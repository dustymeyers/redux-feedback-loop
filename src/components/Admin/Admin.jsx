import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Admin() {
  const dispatch = useDispatch();
  const feedbackList = useSelector(store => store.feedbackList);

  // on load of admin page, call server
  useEffect(() => {
    getFeedback();
  }, []);

  const deleteFeedback = (feedbackId) => {
    console.log('delete clicked on', feedbackId);
    
    // make axios delete request at id endpoint
    axios.delete(`/api/feedback/${feedbackId}`)
      .then(res => {
        console.log(`DELETE /api/feedback/${feedbackId}`, res);
        
        // reset redux state to update displayed table
        getFeedback();
      })
      .catch(err => console.log('There was an error deleting:', err))
  }

  // Takes all saved feedback data from DB stores in feedbackList reducer
  // Axios get sends data to DB
  const getFeedback = () => {
    console.log('in getFeedback');
    
    // axios GET from DB
    axios.get('/api/feedback')
      .then(res => {
        console.log('GET /api/feedback sent back rows:', res.data);

        // set that data to a reducer state
        dispatch({
          type: 'SET_FEEDBACK_LIST',
          payload: res.data
        })
      })
      .catch(err => console.log('There was an error getting data:', err))
  }

  return(
    <>
      <h2>Feedback Results!</h2>
      <table>
        <thead>
          <tr>
            <th>Feeling</th>
            <th>Comprehension</th>
            <th>Support</th>
            <th>Comments</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {/* Loops through feedbackList rendering a <tr> for each feedback item in DB, ordered by date */}
          {feedbackList.map((feedback, index) => {
            return(
              <tr key={index}>
                <td>{feedback.feeling}</td>
                <td>{feedback.understanding}</td>
                <td>{feedback.support}</td>
                <td>{feedback.comments}</td>
                <td><button onClick={() => deleteFeedback(feedback.id)}>Delete</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
} // end Admin

export default Admin;
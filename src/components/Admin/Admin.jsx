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

  // Sends feedback.id assigned to button as well as the opposite of current boolean value
  // Axios PUT sends data to DB
  const changeFlag = (boolean, feedbackId) => {
    console.log('Flag button clicked, currently set to:', boolean);
    console.log('opposite:', !boolean);
    console.log('id is:', feedbackId);

    // make axios put request at id endpoint
    axios.put(`/api/feedback/${feedbackId}`, { flagged: !boolean })
      .then( res => {
        console.log(`Server response after submission: `, res);

        // render new page with updated values.
        getFeedback();
      })
      .catch(err => {
        console.log('There was an error updating flag: ', err);

        alert('There was an error updating the flagged feedback. Please, try again.');
      })
    
  }

  // Sends feedback.id assigned to button for deletion
  // Axios Delete sends unique Id to DB
  const deleteFeedback = (feedbackId) => {
    console.log('delete clicked on', feedbackId);
    
    // make axios delete request at id endpoint
    axios.delete(`/api/feedback/${feedbackId}`)
      .then(res => {
        console.log(`DELETE /api/feedback/${feedbackId}`, res);
        
        // reset redux state to update displayed table
        getFeedback();
      })
      .catch(err => { 
        console.log('There was an error deleting:', err);

        alert('There was an error deleting feedback. Please, try again.');
      })
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
            <th>Flag</th>
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
            console.log(feedback.flagged);
            return(
              <tr key={index}>
                <td>
                  {feedback.flagged 
                    ? <button onClick={() => changeFlag(feedback.flagged, feedback.id)}>Flagged</button> 
                    : <button onClick={() => changeFlag(feedback.flagged, feedback.id)}>Not Flagged</button> 
                  }
                </td>
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
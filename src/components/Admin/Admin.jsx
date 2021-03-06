import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Admin.css';

// MATERIAL-UI
import { Button, DataGrid } from '@material-ui/core';

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
      });
  } // end changeFlag

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
  } // end deleteFeedback

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
  } // end getFeedback

  // used to format dateString from DB into a legible one
  // Found this code for use from Sarah Drasner, Updated May 26, 2020
  // https://css-tricks.com/how-to-convert-a-date-string-into-a-human-readable-format/
  const formatDate = (dateString) => {
    // represents how the date data should be formatted
    const options = { year: "numeric", month: "long", day: "numeric" };

    // returns a new date instance, platform-independent
    // undefined used to set time locally
    return new Date(dateString).toLocaleDateString(undefined, options);
  } // end formatDate

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
            <th>Date Added</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>

          {/* Loops through feedbackList rendering a <tr> for each feedback item in DB, ordered by date */}
          {feedbackList.map((feedback, index) => {
            // console.log(typeof feedback.date);
            return(
              // changes the class of <tr> depending on the boolean value of feedback.flagged, appears red on false
              <tr className={feedback.flagged ? 'flaggedFeedback' : 'notFlaggedFeedback'} key={index}>
                
                <td>
                  {/* changes the button depends on the boolean value of feedback.flagged, allows the user to change that value */}
                  {feedback.flagged 
                    ? <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => changeFlag(feedback.flagged, feedback.id)}
                      >
                        Remove Flag
                      </Button>
                    : <Button
                        variant="contained"
                        color="primary"
                        onClick={() => changeFlag(feedback.flagged, feedback.id)}
                      >
                        Flag
                      </Button> 
                  }
                </td>
                
                {/* Scores representing "feeling", "understanding", and "support". */}
                <td>{feedback.feeling}</td>
                <td>{feedback.understanding}</td>
                <td>{feedback.support}</td>

                {/* If comments were left blank, gives a note to let the user know, otherwise renders comments */}
                <td>{feedback.comments === '' ? 'No comments were given.' : feedback.comments}</td>

                {/* Formats the date for readability */}
                <td>{formatDate(feedback.date)}</td>

                {/* Creates a button to delete the specific row item */}
                <td>
                  <Button 
                    variant="contained"
                    color="secondary"
                    onClick={() => deleteFeedback(feedback.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
} // end Admin

export default Admin;
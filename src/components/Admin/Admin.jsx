import axios from 'axios';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

function Admin() {
  const feedbackList = useSelector(store => store.feedbackList);

  const deleteFeedback = (feedbackId) => {
    console.log('delete clicked on', feedbackId);
    
    // make axios delete request
    
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
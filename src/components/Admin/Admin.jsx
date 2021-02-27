import axios from 'axios';

function Admin() {
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
          <tr>
            <td>4</td>
            <td>4</td>
            <td>5</td>
            <td>"Loved the Demos!"</td>
            <td><button>delete</button></td>
          </tr>
          <tr>
            <td>2</td>
            <td>2</td>
            <td>4</td>
            <td>"I don't get it!"</td>
            <td><button>delete</button></td>
          </tr>
        </tbody>
      </table>
    </>
  );
} // end Admin

export default Admin;
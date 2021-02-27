const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// GET Route - /api/feedback
router.get('/', (req, res) => {
  console.log('GET /api/feedback');

  /**
   * Query to DB should look like:
   * 
   * SELECT * FROM "feedback" 
   * ORDER BY "date" ASC;
   */

  // SQL query to send to DB
  let queryText = 'SELECT * FROM "feedback" ORDER BY "date" ASC;';

  pool.query(queryText)
    .then(dbRes => res.send(dbRes.rows))
    .catch(err => console.log('There was an error:', err))
}) // end router.get /api/feedback

// POST Route - /api/feedback
// send user feedback to server
router.post('/', (req, res) => {
  console.log('POST /api/feedback', req.body);

  // user feedback data from client side
  let feedback = req.body;

  /**
   * Query to DB should look like:
   * 
   * INSERT INTO "feedback" 
   *    ("feeling", "understanding", "support", "comments")
   * VALUES
   *    (4, 4, 5, 'Doing Great!');
   */

  // SQL query to send to DB
  let queryText = `
    INSERT INTO "feedback"
      ("feeling", "understanding", "support", "comments")
    VALUES
      ($1, $2, $3, $4);
  `;

   // packaging up user feedback data for 2nd query argument
  let queryArg= [
    feedback.feeling,       // $1
    feedback.understanding, // $2
    feedback.support,       // $3
    feedback.comments       // $4
  ];

  // pg query the DB w/ our queryText and queryArg
  pool.query(queryText, queryArg)
    // On success, send back 201 - Created
    .then(dbRes => res.sendStatus(201))
    // On failure, send back error
    .catch(err => {
      console.log('There was an error:', err);
      res.sendStatus(500);
    });
}) // End router.post /api/feedback

module.exports = router;
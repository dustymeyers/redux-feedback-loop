const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// DELETE Route - /api/feedback/:id
router.delete('/:id', (req, res) => {
  console.log('DELETE /api/feedback with id:', req.params.id);

  // feedback id from admin
  let feedbackId = req.params.id;

  /**
   * Query to DB should look like:
   * 
   * DELETE FROM "feedback"
   * WHERE "id" = 4;
   */

  // SQL query to send to DB
  let queryText = 'DELETE FROM "feedback" WHERE "id" = $1;';

  // pg query the DB w/ our queryText 
  pool.query(queryText, [feedbackId])
    // On success, send back 200 - Okay
    .then(dbRes => res.sendStatus(200))
    // On failure, send back 500 - Internal Error 
    .catch(err => {
      console.log('There was an error:', err)
      res.sendStatus(500);
    });
}) // end router.delete /api/feedback/:id

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
  const queryText = 'SELECT * FROM "feedback" ORDER BY "date" ASC;';

  // pg query the DB w/ our queryText 
  pool.query(queryText)
    // On success, send back 200 - Okay
    .then(dbRes => res.send(dbRes.rows))
    // On failure, send back 500 - Internal Error 
    .catch(err => {
      console.log('There was an error:', err)
      res.sendStatus(500);
    });
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
  const queryText = `
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
    // On failure, send back 500 - Internal Error 
    .catch(err => {
      console.log('There was an error:', err);
      res.sendStatus(500);
    });
}) // End router.post /api/feedback

// PUT Route - /api/feedback/:id
router.put('/:id', (req, res) => {
  
  // feedback id from admin
  let feedbackId = req.params.id;

  // new boolean value for flagged to be stored in DB
  let flagBoolean = req.body.flagged;

  /**
   * Query to DB should look like:
   * 
   * UPDATE "feedback"
   * SET "flagged" = TRUE
   * WHERE "id" = 4;
   */

  // SQL query to send to DB
  const queryText = 'UPDATE "feedback" SET "flagged" = $1 WHERE "id" = $2;';

  // packages up the id and the new boolean value to change in DB
  let queryArg = [
    flagBoolean,  // $1
    feedbackId   // $2
  ];

  console.log('id', feedbackId);
  console.log('boolean to set', flagBoolean);
  // pg query the DB w/ our queryText
  pool.query(queryText, queryArg)
  // On success, send back 200 - Okay
  .then(dbRes => res.sendStatus(200))
  // On failure, send back 500 - Internal Error 
  .catch(err => {
    console.log('There was an error:', err)
    res.sendStatus(500);
  });
}) // End router.put / api/feedback/:id

module.exports = router;
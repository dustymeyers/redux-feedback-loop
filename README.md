# Dusty's Feedback App

## Description
_Duration: Weekend Solo Project_

For this app, the client wanted to be able to record and view how students were doing by providing the students a way to fill out a form with feeling, comprehension, and support ratings as well as the option for additional comments. On form submission. this data would need to be stored within a database. Once stored in the database, the client wants to be able to view all the data in there from an admin page. 

To tackle this problem, I implemented several form views so that the user submitting feedback is asked one question per page, where they are asked to provide a score 1-5. On the first page, they are asked how they are feeling; on the second, how they feel they are understanding the material; on the third, how well they feel supported; finally, on the fourth, they are asked to add any additional comments in a text box. 

Each page is provided with a "Back" button to edit previous submissions. After the final comments page, the user is directed to a feedback review page where they can review the scores. On screen instructions let the user know that they can click on different scores to jump to that page and edit them. If any inputs were somehow left blank or undefined, the user will be forced back to home page to resubmit all values.

Once the form is completed and the "Submit" button has been pressed, the user is routed back to the home page. Conditional rendering is used to check if the form was recently completed to thank the user for their feedback.

## Screenshot

### Prerequisites 

- [Node.js](Node.js)
- [Postico](https://eggerapps.at/postico/)
- [PostgreSQL](https://www.postgresql.org/download/)

## Installation

1. Create a database named `prime_feedback`.
2. The queries in the `data.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. This project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries.
3. Open up your editor of choice and run `npm install` in your terminal. 
4. Run `npm run server` in your terminal.
5. Run `npm run client` in your terminal, which will open a new browser tab for you.

## Usage

_The case of a student user._

1. The user (from here on: student) opens the Feedback App to give their weekly feedback scores and comments.
2. At the home page the student is greeted and asked to click a "Give Feedback" button to begin filling out feedback.
3. The first feedback form page the student sees asks how they are feeling, 1 out of 5. 
4. The student is feeling a little off this week, they put in a 2 and hit the "Next" button. 
5. The second feedback form page asks how the student is understanding this weeks material, 1 out of 5.
6. The student, despite having a bad week, feels good in understanding, but accidentally clicks the "Next" button before they've filled out the input. 
7. An alert pops up asking them to "Please enter a number between 1 and 5 before submission." After hitting okay, the student is still on the same form page.
8. They put in a 5 and hit the "Next" button.
9. The third feedback form page asks how the student feels they have been supported this week, 1 out of 5.
10. The student types in a 2 by mistake and clicks the "Next" button. 
11. The student realizes afterwards but notices the back button on the next form view, and clicks it.
12. The student is routed back to the third form view, with their previous mistaken rating shown in the input field.
13. The student corrects the number on the input field and continues back to the next page.
14. On this form view, the student is asked to leave any additional comments, but they have nothing profound to say today, so they leave it blank.
15. The student is now asked to review all of their feedback noticing that in the "Comments" section it says "No comments were given." They also decide that their first score, "feeling", was a little off and maybe a 3 would better fit.
16. Following on screen directions, the student clicks on the "feeling" score, which immediately routes them back to the first form page, which has their previous score, a 2, in the input field. 
17. The student adjusts the score clicking next through every form, noticing each page shows their respective, previously placed scores, until they reach the review page.
18. happy with their feedback they submit and are routed back to the home page, which now has a "thank you" message and is offering the student to "give new feedback".

_The case of an instructor(teacher) user._

1. The user (from here on: instructor) wants to review feedback that has been submitted to this app over the past couple of weeks.
2. On routing directly to the `/admin` page, a table is generated with all of the feedback data so the instructor can review all the feedback submitted from their students.
3. Each row of feedback data shows each score input, any additional comments that may have been provided, and the date. 
4. The instructor notices there is some feedback from months ago, certainly not relative now. The instructor deletes them using the button provided in the relative row.
5. The instructor also notices that there has been some negative feedback regarding comprehension. There was even some additional comments asking for help.
6. The instructor clicks the "Flag" button on the row of the negative feedback. The button is now changed to flagged and the row appears read.
7. The instructor finishes up their tasks by reviewing other flagged feedback. They notice some feedback from last week that was flagged and know that the issues have been resolved, and the student is now up to speed. They click the "Remove Flag" button on the left side of the row.
8. The feedback row now appears like it did before without the red.

## Built With

This application is built with HTML, CSS, Javascript, Axios, React, Redux, Express, and PostgreSQL.

## Acknowledgement

Thanks to Prime Digital Academy who equipped and helped me to make this application a reality. Thanks to the members of my cohort to bounce ideas off of and assist.



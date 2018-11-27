const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//GET feedback from db for child
router.get('/:id', (req, res) => {
    console.log('in GET feedback router', req.params.id)
    const personId = req.params.id;
    const sqlText = `SELECT * FROM user_task
                     WHERE user_task.rating_completed = TRUE
                     AND user_task.feedback_read = FALSE
                     AND user_task.user_id = $1
                     ORDER BY user_task.id;`;
    pool.query(sqlText, [personId])
        .then((result) => {
            console.log('got list of feedback from GET router', result);
            res.send(result.rows);
        })
        .catch((error) => {
            console.log('error in completing GET query', error);
            res.sendStatus(500);
        })
})

//PUT user_task to change feedback_read to TRUE
router.put('/feedback', (req, res) => {
    console.log('in PUT feedback delete router', req.body.feedbackId);
    const feedbackRead = req.body.feedbackId;
    console.log('queryValues', feedbackRead);
    const sqlText = `UPDATE user_task
                     SET "feedback_read" = TRUE
                     WHERE user_task.id = $1;`;
    pool.query(sqlText, [feedbackRead])
    .then(() => {
        console.log('PUT request successful');
        res.sendStatus(200);
    })
    .catch((error) => {
        console.log('error in PUT request', error);
        res.sendStatus(500);
    })
})

//PUT user_task to add rating, feedback, and mark rating_feedback = TRUE
router.put('/', (req, res) => {
    console.log('in PUT feedback router', req.body);
    const feedback = req.body;
    const queryValues = [
        feedback.rating,
        feedback.feedback,
        feedback.user_taskId
    ]
    const sqlText = `UPDATE user_task
                     SET "rating" = $1, "feedback" = $2, "rating_completed" = TRUE
                     WHERE user_task.id = $3;`;
    pool.query(sqlText, queryValues)
        .then(() => {
            console.log('PUT request successful');
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('error in PUT request', error);
            res.sendStatus(500);
        })
})

module.exports = router;
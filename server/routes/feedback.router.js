const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

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
            console.log('error in PUT request');
            res.sendStatus(500);
        })
})

module.exports = router;
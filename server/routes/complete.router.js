const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//PUT completed task as true into db
router.put('/', (req, res) => {
    console.log('in PUT task complete', req.body);
    const completedTask = req.body;
    const queryValues = [
        completedTask.completeTaskId,
        completedTask.completeUserId
    ]
    const sqlText = `UPDATE user_task 
                     SET "completed" = TRUE
                     WHERE user_task.task_id = $1 
                     AND user_task.user_id =$2;`;
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
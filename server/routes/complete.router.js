const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//GET all completed tasks pending feedback from db
router.get('/', (req, res) => {
    const sqlText = `SELECT user_task.id, user_task.user_id, person.username, user_task.task_id, task.task_name, user_task.completed 
                     FROM user_task
                     JOIN task ON task.id = user_task.task_id
                     JOIN person ON person.id = user_task.user_id
                     WHERE user_task.completed = true;`;
    pool.query(sqlText)
        .then((result) => {
            console.log('got completed task back from db', result);
            res.send(result.rows);
        })
        .catch((error) => {
            console.log('error in GET all completed tasks query', error);
            res.sendStatus(500);
        });
});

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
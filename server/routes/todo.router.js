const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//GET all todo task router
router.get('/:id', (req, res) => {
    const personId = req.params.id;
    const sqlText = `SELECT task.id, person.id, user_task.task_id, person.username, task.task_name, user_task.completed FROM person
                     JOIN admin_user ON admin_user.user_id = person.id
                     JOIN user_task ON user_task.user_id = admin_user.user_id
                     JOIN task ON task.id = user_task.task_id
                     WHERE person.id = $1 AND user_task.completed = FALSE
                     ORDER BY task.task_name ASC;`;
    pool.query(sqlText, [personId])
        .then((result) => {
            console.log('got todo back from GET router', result);
            res.send(result.rows);
        }) 
        .catch((error) => {
            console.log('error completing GET query', error);
            res.sendStatus(500);
        });
});

//POST new tasks to todo list
router.post('/', (req, res) => {
    console.log('in POST add task to user route, taskId:', req.body);
    const newTaskToUser = req.body;
    const queryValues = [
        newTaskToUser.taskId,
        newTaskToUser.userId,
    ]
    const sqlText = `INSERT INTO user_task ("task_id", "user_id", "completed") VALUES ($1, $2, 'FALSE');`;
    pool.query(sqlText, queryValues)
    .then(() => {
        res.sendStatus(201);
    })
    .catch((error) => {
        console.log('error in POST todo route', error);     
        res.sendStatus(500);   
    })
});

module.exports = router;
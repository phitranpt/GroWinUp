const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//GET all suggested task router
router.get('/', (req, res) => {
    const sqlText = `SELECT task.id, task.task_name FROM task
                     FULL JOIN user_task ON user_task.task_id = task.id
                     LEFT JOIN person ON person.id = user_id
                     WHERE user_task.completed IS NULL AND person.id IS NULL
                     ORDER BY task.task_name ASC;`;
    pool.query(sqlText)
        .then((result) => {
            console.log('got tasks back from GET router', result);
            res.send(result.rows);
        }) 
        .catch((error) => {
            console.log('error completing GET query', error);
            res.sendStatus(500);
        });
});

//POST new tasks to db
router.post('/', (req, res) => {
    console.log('in POST task route', req.body);
    const newTask = req.body;
    const sqlText = `INSERT INTO task ("task_name") VALUES ($1);`;
    pool.query(sqlText, [newTask.task_name])
    .then((response) => {
        console.log('added new task to db', newTask);
        res.sendStatus(201);
    })
    .catch((error) => {
        console.log('error in POST task route', error);     
        res.sendStatus(500);   
    })
});

module.exports = router;
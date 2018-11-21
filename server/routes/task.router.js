const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//GET all suggested task router
router.get('/', (req, res) => {
    const sqlText = `SELECT task.id, task.task_name FROM task
                     FULL JOIN user_task ON user_task.task_id = task.id
                     LEFT JOIN person ON person.id = user_id
                     WHERE user_task.completed IS NULL AND person.id IS NULL;`;
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

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;
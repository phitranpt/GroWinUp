const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//GET all todo task router
router.get('/:id', (req, res) => {
    const personId = req.params.id;
    const sqlText = `SELECT task.id, person.username, task.task_name, user_task.completed FROM person
                     JOIN admin_user ON admin_user.user_id = person.id
                     JOIN user_task ON user_task.user_id = admin_user.user_id
                     JOIN task ON task.id = user_task.task_id
                     WHERE person.id = $1;`;
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

module.exports = router;
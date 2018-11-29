const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//GET ratings from db for child
router.get('/:id', (req, res) => {
    console.log('rating id', req.params.id);
    const personId = req.params.id;
    const sqlText = `SELECT ROUND(AVG(user_task.rating), 2), user_task.user_id FROM person
                     JOIN admin_user ON admin_user.user_id = person.id
                     JOIN user_task ON user_task.user_id = admin_user.user_id
                     WHERE user_task.user_id = $1
                     GROUP BY user_task.user_id;`;
    pool.query(sqlText, [personId])
        .then((result) => {
            console.log('got star ratings back from GET router', result);
            res.send(result.rows);
        })
        .catch((error) => {
            console.log('error completing GET query', error);
            res.sendStatus(500)
        });
});

module.exports = router;
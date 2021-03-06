const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//GET all suggested task router
router.get('/', (req, res) => {
    const sqlText = `SELECT person.id, user_task.user_id, person.username, person.admin, person.profile_image, ROUND(AVG(user_task.rating), 2) FROM person
                     FULL JOIN user_task ON user_task.user_id = person.id
                     WHERE person.admin = FALSE
                     GROUP BY person.id, user_task.user_id, person.username, person.profile_image
                     ORDER BY person.id ASC;`;
    pool.query(sqlText)
        .then((result) => {
            console.log('got person list back from GET router', result);
            res.send(result.rows);
        }) 
        .catch((error) => {
            console.log('error completing GET query', error);
            res.sendStatus(500);
        });
});

//DELETE selected user from person list
router.delete('/:id', (req, res) => {
    console.log('in DELETE person router', req.params);
    const sqlText = 'DELETE FROM person WHERE id=$1;';
    pool.query(sqlText, [req.params.id])
        .then(() => {
            console.log('deleted person from db');
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('error in deleting person from db', error);
            res.sendStatus(500);
        });
});

module.exports = router;
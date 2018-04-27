const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * Get all of the items on the shelf
 */
router.get('/', (req, res) => {
console.log('/ item GET viewShelf');
console.log('is authenticated?', req.isAuthenticated());
console.log('user', req.user);
// if(req.isAuthenticated()){
    let queryText = 'SELECT * FROM "item";';
    pool.query(queryText).then((result) => {
        res.send(result.rows);
    })
    .catch((error) => {
        console.log(error);
        res.sendStatus(500);
    });
// }
//     else{
//         res.sendStatus(403);
//     }
});


/**
 * Add an item for the logged in user to the shelf
 */
router.post('/', (req, res) => {
    console.log(req.user)
    console.log(req.isAuthenticated());
    console.log(req.body)
        if(req.isAuthenticated()) {
            const queryText = `INSERT INTO item (description, image_url, person_id) VALUES ($1, $2, $3)`;
        pool.query(queryText, [req.body.description, req.body.image_url, req.user.id]).then((result) => {
            res.sendStatus(201);
        }).catch((err) => {
            res.sendStatus(500)
        })
        }else {
            res.sendStatus(403);
        }
});


/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', (req, res) => {
    console.log(req.user)
    console.log(req.isAuthenticated());
    console.log(req.params)
    if(req.isAuthenticated()) {
        let queryText = `DELETE FROM item WHERE id = $1 AND person_id = $2;`
        pool.query(queryText, [req.params.id, req.user.id])
        .then( (result) => {
            console.log('successful DELETE', result);
            if (result.rowCount===0){
                res.sendStatus(418);
            }
            else{
                res.sendStatus(201);
            }
            
        })
        .catch( (error) => {
            console.log('error in DELETE', error);
            res.sendStatus(500);
        })
    } else {
        res.sendStatus(403);
    }
});


/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {
    console.log('user:', req.user);
    console.log('is authenticated:', req.isAuthenticated());
    console.log(req.body);
    if(req.isAuthenticated()) {
        let queryText = `UPDATE item SET description = $1, image_url = $2 WHERE id = $3 AND person_id = $4;`
        pool.query(queryText, [req.body.description, req.body.image_url, req.params.id, req.user.id])
        .then( (result) => {
            console.log('successful UPDATE', result);
            res.sendStatus(201);
        })
        .catch( (error) => {
            console.log('error in PUT', error);
            res.sendStatus(500);
        })
    }else {
        res.sendStatus(403);
    }
   
});


/**
 * Return all users along with the total number of items 
 * they have added to the shelf
 */
router.get('/count', (req, res) => {
    if (req.isAuthenticated()) {
        let queryText = `SELECT person.username, count(item) FROM person LEFT JOIN item on person.id = item.person_id GROUP BY person.username, person.id ORDER BY person.id;`;
        pool.query(queryText).then((result)=>{
            res.send(result.rows)
        }).catch((error)=>{
            console.log('error in shelf.router.get.count: ', error);
            res.sendStatus(500);
        })
    } else{
        res.sendStatus(403);
    }
});


/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {

});

module.exports = router;
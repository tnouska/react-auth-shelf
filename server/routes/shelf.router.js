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
if(req.isAuthenticated()){
    let queryText = 'SELECT * FROM "item";';
    pool.query(queryText).then((result) => {
        res.send(result.rows);
    })
    .catch((error) => {
        console.log(error);
        res.sendStatus(500);
    });
}
    else{
        res.sendStatus(403);
    }
});


/**
 * Add an item for the logged in user to the shelf
 */
router.post('/', (req, res) => {
    console.log(req.body)
    const queryText = `INSERT INTO item (description, image_url) VALUES ($1, $2)`;
    pool.query(queryText, [req.body.description, req.body.image_url]).then((result) => {
        res.sendStatus(201);
    }).catch((err) => {
        res.sendStatus(500)
    })
});


/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', (req, res) => {

});


/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {

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
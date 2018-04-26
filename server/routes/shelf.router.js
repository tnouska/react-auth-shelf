const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * Get all of the items on the shelf
 */
router.get('/', (req, res) => {
    res.sendStatus(200); // For testing only, can be removed
});


/**
 * Add an item for the logged in user to the shelf
 */
router.post('/', (req, res) => {

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
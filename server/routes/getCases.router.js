const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/cases', (req, res) => {
  // GET route code here
  pool.query(`SELECT * FROM "cases";`)
    .then((result) => {
      res.status(200).send(result.rows);
    }).catch((err) => {
      console.log('Error in getCases', err);
    });
});
 
/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;

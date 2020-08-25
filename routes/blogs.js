var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    // Get Blogs here
    res.send('All Blogs');
});

router.get('/:id?', function(req, res, next) {
    // Return Specific blog here

    res.send('Specific Blog');
});

router.post('/', function(req, res, next) {
    // Add new Blog to database

    res.send('Good request');
})

module.exports = router;
var express = require('express');
var router = express.Router();
const AWS = require('aws-sdk');
const config = require('../config');
const uuidv1 = require('uuid/v1');
const { IdentityStore } = require('aws-sdk');

/* GET home page. */
router.get('/', function(req, res, next) {
    AWS.config.update(config.aws_remote_config);

    const docClient = new AWS.DynamoDB.DocumentClient();

    const params = {
        TableName: config.aws_table_name
    };

    docClient.scan(params, function (err, data) {

        if (err) {
            console.log(err)
            res.send({
                success: false,
                message: err
            });
        } else {
            const { Items } = data;
            res.send({
                success: true,
                blogs: Items
            });
        }
    });
});

router.get('/:id?', function(req, res, next) {
    AWS.config.update(config.aws_remote_config);

    const docClient = new AWS.DynamoDB.DocumentClient();

    const params = {
        TableName: config.aws_table_name,
        Key: {
            id: parseInt(req.params.id)
        }
    };

    docClient.get(params, function (err, data) {

        if (err) {
            console.log(err)
            res.send({
                success: false,
                message: err
            });
        } else {
            const { Item } = data;
            res.send({
                success: true,
                blog: Item
            });
        }
    });
});

router.post('/', function(req, res, next) {
    // Add new Blog to database

    res.send('Good request');
})

module.exports = router;
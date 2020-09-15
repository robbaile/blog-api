const AWS = require('aws-sdk');
const config = require('../../config');
var express = require('express');
var router = express.Router();

module.exports = (req, res) => {
    AWS.config.update(config.aws_remote_config);

    const docClient = new AWS.DynamoDB.DocumentClient();

    const params = {
        TableName: config.aws_table_name
    };

    docClient.scan(params, function(err, data) {
        if (err) {
            res.send({
                success: false,
                message: 'Error: Server error'
            });
        } else {
            const { Items } = data;
    
            res.send({
                success: true,
                message: 'Loaded blogs',
                blogs: Items
            });
        }
    });
};
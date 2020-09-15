const AWS = require('aws-sdk');
const config = require('../../config');

module.exports = (req, res) => {
    AWS.config.update(config.aws_remote_config);

    const docClient = new AWS.DynamoDB.DocumentClient();
    
    const params = {
        TableName: config.aws_table_name,
        Key: {
            id: parseInt(req.params.id)
        }
    };

    docClient.get(params, function(err, data) {
        if (err) {
            res.send({
                success: false,
                message: 'Error: Server error'
            });
        } else {
            const { Item } = data;
    
            res.send({
                success: true,
                message: 'Loaded blogs',
                blogs: Item
            });
        }
    })
};

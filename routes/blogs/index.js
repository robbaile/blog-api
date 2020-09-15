const blogs = require('express').Router();
const all = require('./all');
const single = require('./single');

blogs.get('/', all);
blogs.get('/:id', single);

module.exports = blogs;
const routes = require('express').Router();

const blogs = require('./blogs/index');

routes.use('/blogs', blogs);

module.exports = routes;
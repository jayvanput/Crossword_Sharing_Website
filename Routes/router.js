const express = require('express');
const routes = require('express').Router();

routes.use('/', express.static('build'));

module.exports = routes;
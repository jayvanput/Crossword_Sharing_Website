const express = require('express');
const routes = require('express').Router();
const sqlite = require('sqlite3');
require('../')
const db = new sqlite.Database('../db.sqlite');

routes.use('/', express.static('build'));

routes.get('/puzzles', (req, res, next) => {
  db.all('SELECT * FROM puzzle;', (error, rows) => {
    if (error) {
      console.log('error boii')
      res.status(400).send()
    }
    res.json({
      "data": rows
    })
  })
})

module.exports = routes;
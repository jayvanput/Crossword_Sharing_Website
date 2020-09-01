const express = require('express');
const app = express();
const router = require('./Routes/router');
const morgan = require('morgan');
const sqlite = require('sqlite3');

const db = new sqlite.Database('./db.sqlite');
// Routes and middleware
app.use(morgan('tiny'));

app.use('/', express.static('build'));

app.get('/puzzles', (req, res, next) => {
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

app.listen(3000, () => {
  console.log('doing the big boy things on port 3000!')
})
const express = require('express');
const app = express();
const morgan = require('morgan');
var cors = require('cors');
const mongoose = require('mongoose')
require('dotenv').config();

// Routes and middleware
let Crossword = require('./models/crossword.model');
app.use(morgan('tiny'));
app.use(cors());

// Connect to mongodb
const uri = process.env.ATLAS_URI;
mongoose.connect(porocess.env.MONGODB_URI || uri, { useNewUrlParser: true, useCreateIndex: true })

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB db connection established successfully")
})

// Routing
app.get('/puzzles', (req, res, next) => {
  Crossword.findOne()
    .then(crossword => res.json(crossword))
    .catch(err => res.status(400).json('Error: ' + err));
})

const PORT = process.env.PORT || 4000;

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('build'));
}
app.listen(PORT, () => {
  console.log(`doing the big boy things on port ${PORT}!`)
})
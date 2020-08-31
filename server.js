const express = require('express');
const app = express();
const router = require('./Routes/router');
const morgan = require('morgan');

// Routes and middleware
app.use(morgan('tiny'));
app.use('/', router);

app.listen(3000, () => {
  console.log('doing the big boy things on port 3000!')
})
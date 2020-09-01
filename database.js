var sqlite = require('sqlite3')

const db = new sqlite.Database('./db.sqlite', (err) => {
  if (err) {
    // Cannot open database
    console.error(err.message)
    throw err
  } else {
    console.log('Connected to the SQLite database.')
    db.run(`CREATE TABLE puzzle (
          name VARCHAR, 
          size VARCHAR, 
          date VARCHAR
          )`,
      (err) => {
        if (err) {
          // Table already created
        } else {
          // Table just created, creating some rows
          db.run('INSERT INTO puzzle (name, size, date) VALUES ("jay", "5x5", "2020-05-10")')
        }
      });
  }
});

module.exports = db;
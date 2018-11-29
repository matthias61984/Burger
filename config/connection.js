// Set up MySQL connection.
var mysql = require("mysql");

// process.env.JAWSDB_URL;
const getDBConfig = () => {
  if(process.env.JAWSDB_URL) return process.env.JAWSDB_URL;
  return({
    host: process.env.dev_host,
    port: process.env.dev_port,
    user: process.env.dev_user,
    password: process.env.dev_password,
    database: process.env.dev_database

  })
}
var connection = mysql.createConnection(getDBConfig())

// Make connection.
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// var connection = mysql.createConnection(process.env.JAWSDB_URL);
// connection.connect();
// connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
//   if (err) throw err;
//   console.log('The solution is: ', rows[0].solution);
// });
// connection.end();

// Export connection for our ORM to use.
module.exports = connection;
// Inside the connection.js file, setup the code to connect Node to MySQL.
// Export the connection.
var mysql = require("mysql");

connection = mysql.createConnection(process.env.CLEARDB_DATABASE_URL);
   
// if(process.env.CLEARDB_DATABASE_URL) {
//     connection = mysql.createConnection(process.env.CLEARDB_DATABASE_URL);
// } else {
// var connection = mysql.createConnection({
//     host: "localhost",
//     port: 3306,
//     user: "root",
//     password: "",
//     database: "burgers_db"
// });
// }

// Make connection.
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

connection.query('select 1 + 1', (err, rows) => { /* */ });

// Export connection for our ORM to use.
module.exports = connection;
// Inside the connection.js file, setup the code to connect Node to MySQL.
// Export the connection.
var mysql = require("mysql");

    port = process.env.PORT || 8080;

if (port === 8080) {

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "burgers_db"
});
} else {
    //Live Server
}

// Make connection.
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
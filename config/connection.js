// Inside the connection.js file, setup the code to connect Node to MySQL.
// Export the connection.
var mysql = require("mysql");

var port = process.env.PORT || 8080;

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
    var connection = mysql.createConnection({
        host: "mysql://b073078c813114:13d6b269@us-cdbr-iron-east-05.cleardb.net/heroku_d0c56e63217e378?reconnect=true",
        port: 3306,
        user: "b073078c813114",
        password: "13d6b269",
        database: "heroku_d0c56e63217e378"
    })

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
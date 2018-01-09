// Set up MySQL connection.
var mysql = require("mysql");
var connection; 
// Make connection
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);  
} else {
    connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "123",
    database: "burgers_db"
  });
};



  connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    };
    console.log("connected as id " + connection.threadId);
  });


// export connection for use in app
module.exports = connection;



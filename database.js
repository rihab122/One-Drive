const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',  
    user: 'root',       
    password: '',       
    database: 'bp_monitor'
});

connection.connect(err => {
    if (err) {
        console.error("error:", err);
        process.exit(1);
    }
    console.log("Connected to MySQL!");
});

module.exports = connection;

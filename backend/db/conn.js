const mysql = require("mysql2");

const conn = mysql.createConnection({
    user:"root",
    host:"localhost",
    password:"12345",
    database:"signup"
})


conn.connect((err)=>{
    if(err) throw err;
    console.log("DB Connected");
});

module.exports = conn;
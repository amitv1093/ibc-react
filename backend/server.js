const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");
require("./db/conn");
const router = require("./Routes/router");

const port = 8081;


// app.get("/",(req,res)=>{
//     res.send("server start")
// });



//middleware
app.use(express.json())
app.use(cors());


app.use(router);




app.listen(port,()=>{
    console.log("server starts at port no:" + port);
})

















// const express = require("express");
// const mysql = require('mysql');
// const cors = require('cors');


// const app = express();
// app.use(cors());
// app.use(express.json());


// const db = mysql.createConnection({
//     host:"localhost",
//     user: "root",
//     password: "12345",
//     database: "signup"
// })

// app.post('/signup', (req, res) => {
//     const sql = "INSERT INTO signup ('name','email','password') Values (?)";
//     const values = [
//         req.body.name,
//         req.body.email,
//         req.body.password
//     ]
//     db.query(sql, [values],(err, data) => {
//         if(err) {
//             return res.json(err);
//         }
//         return res.json(data);
//     })
// })


// app.listen(8080, ()=> {
//     console.log("listening.....");
// })


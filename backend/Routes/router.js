//for api 
const express = require("express");
const router = new express.Router();
const conn = require("../db/conn");


//register user data
router.post("/create", (req, res) => {

    // console.log(req.body);

    const { name, email, subject, phone, message } = req.body;

    if (!name || !email || !subject || !phone || !message) {
        res.status(422).json("Plz fill the all data")
    }

    try {
        conn.query("SELECT *FROM contactus WHERE email = ?", email, (err, result) => {
            if (result.length) {
                res.status(422).json("This Data is Already Exist")
            } else {
                conn.query("INSERT INTO contactus SET ?", { name, email, subject, phone, message }, (err, result) => {
                    if (err) {
                        console.log("err" + err);
                    } else {
                        res.status(201).json(req, body);
                    }
                })
            }
        })
    } catch (error) {
        res.status(422).json(error);
    }

});

module.exports = router;
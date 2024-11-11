const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();

app.use(cors());

app.get("/",(req,res) => {
    res.json("Test");
})

app.listen(8081, ( )=> {
    console.log("listando");
})

const express = require("express");
const path = require("path");
const helmet = require("helmet");
const cors = require("cors");
const port = process.env.PORT || 5000;
const db = require("./routes/db");

const app = express();

// app.use(express.static(__dirname + "/build"));

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/reviews", db);

app.listen(port, () => console.log("server is listening on " + port));

//Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass

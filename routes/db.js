const express = require("express");
const dotenv = require("dotenv");
const router = express.Router();
const MongoClient = require("mongodb").MongoClient;

let reviews;
console.log(process.env.MONGO_USER);
const login = process.env.MONGO_USER + ":" + process.env.MONG_PASS;
const uri =
  "mongodb+srv://" +
  login +
  "@cluster0.epqz8.mongodb.net/Cluster0?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

client.connect((err) => {
  const collection = client.db("POLB").collection("Reviews");
  collection
    .find({})
    .toArray()
    .then((items) => {
      reviews = items;
    });
});

router.get("/reviews", function (req, res) {
  res.send(reviews);
});

router.post("/suggest", function (req, res) {
  const collection = client.db("POLB").collection("Suggestions");
  console.log("Submission received");
  collection.insertOne(req.body);
});

// Clean up MongoDB connection on close
process.on("SIGINT", () => client.close());

module.exports = router;

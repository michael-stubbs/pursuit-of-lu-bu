const express = require("express");
const router = express.Router();
const MongoClient = require("mongodb").MongoClient;

let reviews;

// Set MongoDB login to Vercel config

let login = process.env.MONGO;
let uri =
  "mongodb+srv://" +
  login +
  "@cluster0.epqz8.mongodb.net/Cluster0?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Connect and pull all reviews into an array
client.connect((err) => {
  console.log(err);
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

module.exports = router;

const express = require("express");
const router = express.Router();
const MongoClient = require("mongodb").MongoClient;
const key = require("../keys");

let reviews;
const uri =
  "mongodb+srv://stubbs:" +
  key +
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
    })
    .then(() => client.close());
});

router.get("/reviews", function (req, res) {
  res.send(reviews);
});

module.exports = router;

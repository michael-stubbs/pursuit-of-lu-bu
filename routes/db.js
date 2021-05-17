const MongoClient = require("mongodb").MongoClient;
import key from "../keys";

const uri =
  "mongodb+srv://stubbs:" +
  key +
  "@cluster0.epqz8.mongodb.net/Cluster0?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
client.connect((err) => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

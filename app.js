const express = require("express");
const path = require("path");
const helmet = require("helmet");
const cors = require("cors");
const port = process.env.PORT || 3001;
const db = require("./routes/db");

const app = express();

app.use(express.static(path.join(__dirname + "/build")));

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'", "fonts.gstatic.com", "fonts.googleapis.com"],
      scriptSrc: ["'self'"],
    },
  })
);

app.use("/", db);

app.listen(port, () => console.log("server is listening on " + port));

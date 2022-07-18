require("dotenv").config();

const pool = require("./db/conn");
const express = require("express");
const path = require("path");
const cors = require("cors");

const port = process.env.PORT;

const app = express();

// config JSON and form data response
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

// Solve CORS
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

// Upload directory
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

// DB connection
require("./db/conn.js");

// routes
const router = require("./routes/Router.js");
app.use(router);

const routerFinances = require("./routes/Router.js");
app.use(routerFinances);

//app.use(express.static('public'))

pool
  //.sync({ force: true })
  .sync()
  .then(() => {
    app.listen(port, () => console.log(`Server running port ${port}`));
  })
  .catch((err) => console.log(err));

const express = require("express");
const dotenv = require("dotenv");

const app = express();

dotenv.config();

app.get("/", (req, res) => {
  res.send("API is running");
});

app.get("/api/:id", (req, res) => {
  res.send("API is running");
  console.log(req.params);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server started on PORT ${PORT}`));

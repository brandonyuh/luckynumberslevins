const express = require("express");
const cors = require("cors");
require("dotenv").config();
app.use(cors());
const PORT = process.env.PORT || 5050;
const BACKEND_URL = process.env.BACKEND_URL || "http://localhost";
app.use(express.json());
app.use(express.static("public"));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get("/", (req, res) => {
  res.send("I got your get request at /");
});

app.listen(PORT, () => {
  console.log(`app running on ${BACKEND_URL}:${PORT}`);
});

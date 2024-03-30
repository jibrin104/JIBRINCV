import express from "express";
import cors from 'cors'
import data from './src/data/info.json' assert {type:"json"}
// const express = require("express");
const app = express();

// Parse JSON bodies for this app. Make sure you put
// `app.use(express.json())` **before** your route handlers!
app.use(express.json());
app.use(cors())

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.post("/short-message", (req, res) => {
  const body = req.body;

  res.json({
    message: `You are awesome ${body?.name} for reaching here 🎉🎉🎉🎺🎺🎺`,
  });
});

app.get("/profile-data", (_req, res) => {
  res.json({
    data : data
    
  });
});

const port = 3000;

app.listen(port, () => {
  console.log(`skill-canvas-BE app listening on port http://localhost:${port}`);
});

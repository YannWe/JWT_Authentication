// loading environment variables
require("dotenv").config();
// import express

const express = require("express");

// instantiate express application

const app = express();

// initialise our posts dataset

const posts = [
  {
    username: "John",
    title: "Post 1",
  },
  {
    username: "Gina",
    title: "Post 2",
  },
];

//Create simple route to get all our posts
app.get("/posts", (req, res) => {
  res.json(posts);
  //   res.write(posts)
  //   res.end();
  //.write + .end = .send
  // additional functionalities inside express, use .json. .json converts all types that are sent, making it simpler to use.
});

// Listen to port number: 3001
const PORT = process.env.SERVER_PORT || 3001;
app.listen(PORT, () => {
  console.log(`Application is connected and listening to port ${PORT}`);
});

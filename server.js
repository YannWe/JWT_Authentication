// loading environment variables
require("dotenv").config();
// import express
const express = require("express");

//import jsonwebtoken for authorisation
const jwt = require("jsonwebtoken");

// import dataset

const posts = require("./dataset/dataset.js")

// instantiate express application
const app = express();

// use express body parser middleware
app.use(express.json());







// import postsRouter
app.use("/", require("./routes/postsRoute")) 
  //   res.write(posts)
  //   res.end();
  //.write + .end = .send
  // additional functionalities inside express, use .json. .json converts all types that are sent, making it simpler to use.


// Create a login route
/**
 * @method: POST
 * @description: login
 * @access: Public
 */
app.use("/", require("./routes/loginRoute"));

//


// Listen to port number: 3001
const PORT = process.env.SERVER_PORT || 3001;
app.listen(PORT, () => {
  console.log(`Application is connected and listening to port ${PORT}`);
});

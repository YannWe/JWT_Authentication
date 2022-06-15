// loading environment variables
require("dotenv").config();
// import express
const express = require("express");

// instantiate express application
const app = express();

// use express body parser middleware
app.use(express.json());

// GET POSTS
app.use("/", require("./routes/postsRoute")) 

// POST LOGIN
app.use("/", require("./routes/loginRoute"));

// Listen to port number: 3001
const PORT = process.env.SERVER_PORT || 3001;
app.listen(PORT, () => {
  console.log(`Application is connected and listening to port ${PORT}`);
});

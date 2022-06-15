// loading environment variables
require("dotenv").config();
// import express package
const express = require("express");

// import the router
const router = require("./routes/authRouter.js")

// instantiate express application
const app = express();

// use express body parser middleware
app.use(express.json());

// use the router

app.use("/", router);

// Listen to port number: 4001
const PORT = process.env.AUTH_SERVER_PORT || 4001;
app.listen(PORT, () => {
  console.log(`Application is connected and listening to port ${PORT}`);
});

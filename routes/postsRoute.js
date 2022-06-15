const express = require("express");
const router = express.Router();
// import postsController
const getPostsController = require("../controllers/postsControllers.js");
const authoriseToken = require("../middleware/authorisationToken")

router.get("/posts",authoriseToken, getPostsController);

module.exports = router;

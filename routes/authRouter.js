const express = require("express");

// importing controllers: commonJS
const login = require("../controllers/loginController.js").login;
const tokenController = require("../controllers/loginController.js").tokenController;
const refreshAuth = require("../middleware/refreshAuthorisation.js")

const router = express.Router();

// Create login route
router.post("/login", login);
router.post("/token", refreshAuth, tokenController);

module.exports = router;

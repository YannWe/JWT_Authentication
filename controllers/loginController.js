const jwt = require("jsonwebtoken");

const generateToken = require("../middleware/generateToken");

// Create a login route
/**
 * @method: POST
 * @description: login
 * @access: Public
 */

const login = (req, res) => {
  // 1- Authentication : e.g. "passport js"
  // 2- Authorisation : JWT,
  // Create a token to access api's you are authorised to.
  const username = req.body.username;
  const user = {
    name: username,
  };
  const accessToken = generateToken(user);
  res.json({
    accessToken,
  });
};

// token Controller
function tokenController(req, res) {
  // create a token to access api's you are authorised to.
  const username = req.user.name;
  const user = {
    name: username,
  };
  const accessToken = generateToken(user, process.env.ACCESS_SECRET, "30s");
  res.json({ accessToken });
}

module.exports = { login, tokenController };

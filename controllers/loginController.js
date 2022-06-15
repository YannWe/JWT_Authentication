const jwt = require("jsonwebtoken");

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
  const accessToken = jwt.sign(user, process.env.ACCESS_SECRET);
  res.json({
    accessToken,
  });
};

module.exports = login;

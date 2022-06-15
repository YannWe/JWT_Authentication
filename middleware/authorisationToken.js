// import jsonwebtoken for authorisation
const jwt = require("jsonwebtoken");
// token verification, and payload serialisation
function authoriseToken(req, res, next) {
  // access the request headers to look for the token
  const authHeader = req.headers["authorization"];
  // req.headers["authorization"] : Bearer "jhbfvejsfbweiube"
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) return res.sendStatus(401); // no token

  // as we are here, means we have a token, we need to verify it:
  jwt.verify(token, process.env.ACCESS_SECRET, (err, user) => {
    if (err) return res.sendStatus(403); // Forbidden
    req.user = user;
    next();
  });
}

module.exports = authoriseToken;

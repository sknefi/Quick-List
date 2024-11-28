const jwt = require("jsonwebtoken");
require('dotenv').config();

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({
      code: "tokenIsNotValid",
      message: "JWT token is not valid",
    });
  }
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
	if (err) {
	return res.status(403).json({
		code: "forbidden",
		message: "Forbidden",
	});
	}
	req.user = user;
	next();
  })
}

module.exports = { authenticateToken }
// refresh tokeny v tomto projekte nakoniec nebudem riesit

const jwt = require("jsonwebtoken");
require("dotenv").config();

async function refreshToken(req, res) {
  const refreshToken = req.body.refreshToken;

  if (!refreshToken) {
    return res.status(401).json({
      code: "tokenNotProvided",
      message: "Refresh token is missing",
    });
  }

  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({
        code: "forbidden",
        message: "Invalid or expired refresh token",
      });
    }

    const newAccessToken = jwt.sign(
      {
		_id: user._id,
		name: user.name,
        surname: user.surname,
        photo: user.photo,
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "15m" }
    );

    res.json({ accessToken: newAccessToken });
  });
}

module.exports = { refreshToken };

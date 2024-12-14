const Ajv = require("ajv");
const ajv = new Ajv();
const jwt = require("jsonwebtoken");
require('dotenv').config();
  
const schema = {
	type: "object",
	properties: {
		name: { type: "string" },
		surname: { type: "string" },
		photo: { type: "string" },
	},
	required: ["name", "surname"],
	additionalProperties: false,
};

// http://localhost:3001/user/login
async function loginAbl(req, res) {
  try {
    const user = req.body;
    const valid = ajv.validate(schema, user);
    if (!valid) {
      return res.status(400).json({
        code: "dtoInIsNotValid",
        message: "DTO is not valid",
        validationError: ajv.errors,
      });
    }

	const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '45m' });
	const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '7d' });

    // Send a success response with the success of adding the access token
    res.status(201).json({
      accessToken,
	  refreshToken,
    });
  } catch (error) {
	console.log(error.message);
    res.status(500).json({
      code: "internalServerError",
      message: "An internal server error occurred",
      error: error.message,
    });
  }
}

module.exports = loginAbl;

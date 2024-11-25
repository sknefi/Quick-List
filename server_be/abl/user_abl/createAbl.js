const Ajv = require("ajv");
const ajv = new Ajv();
const UserModel = require("../../models/UserModel.js");
  
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

// http://localhost:3001/user/create
async function createAbl(req, res) {
  try {
    const reqParams = req.body;
    const valid = ajv.validate(schema, reqParams);
    if (!valid) {
      return res.status(400).json({
        code: "dtoInIsNotValid",
        message: "DTO is not valid",
        validationError: ajv.errors,
      });
    }
    // Create a new user object with the validated data
    const newUser = new UserModel({
		name: reqParams.name,
		surname: reqParams.surname,
		photo: reqParams.photo || "",
    });
    const savedUser = await newUser.save();

    // Send a success response with the created user data
    res.status(201).json({
      code: "userCreated",
      message: "User created successfully",
      user: savedUser,
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

module.exports = createAbl;

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

// http://localhost:3001/user/update?id=507f1f77bcf86cd799439139
async function updateAbl(req, res) {
  try {
    const userId = req.query.id;  // user ID is passed in the URL as a parameter
    const reqParams = req.body;

	const valid = ajv.validate(schema, reqParams);
    if (!valid) {
      return res.status(400).json({
        code: "dtoInIsNotValid",
        message: "DTO is not valid",
        validationError: ajv.errors,
      });
    }

    // Find the user by its ID
    const user = await UserModel.findById(userId);
    if (!user) {
      return res.status(404).json({
        code: "userNotFound",
        message: "User not found",
      });
    }

    // Update the user with the new data
    user.name = reqParams.name;
    user.surname = reqParams.surname;
	user.photo = reqParams.photo || user.photo || "";

    // Save the updated user to the database
    const updatedUser = await user.save();

    // Send a success response with the updated user data
    res.status(200).json({
      code: "userUpdated",
      message: "User updated successfully",
      user: updatedUser,
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

module.exports = updateAbl;

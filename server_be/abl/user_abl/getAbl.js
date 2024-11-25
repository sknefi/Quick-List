const Ajv = require("ajv");
const ajv = new Ajv();
const UserModel = require("../../models/UserModel.js");

const schema = {
  type: "object",
  properties: {
    id: { type: "string" },
  },
  required: ["id"],
  additionalProperties: false,
};

// http://localhost:3001/user/get?id=507f1f77bcf86cd743901142
async function getAbl(req, res) {
	try {
	const reqParams = req.query?.id ? req.query : req.body;
    const valid = ajv.validate(schema, reqParams);
    if (!valid) {
		res.status(400).json({
			code: "dtoInIsNotValid",
			message: "dto in is not valid",
			validationError: ajv.errors,
		});
		return;
    }
	
	// const user = await UserModel
	const user = await UserModel.findById(reqParams.id).exec();
	if (!user) {
      res.status(404).json({
        code: "userNotFound",
        message: `user ${reqParams.id} not found`,
      });
      return;

    }

    res.json(user);
  } catch (error) {
    res.status(500).json({
      code: "internalServerError",
      message: "An internal server error occurred",
	  error: error.message,

    });
  }
}

module.exports = getAbl;

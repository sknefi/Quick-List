const UserModel = require("../../models/UserModel.js");

// http://localhost:3001/user/list
async function listAbl(req, res) {
  try {
    const users = await UserModel.find().exec();

    // Check if there are any users in the database
    // if (users.length === 0) {
    //   return res.status(404).json({
    //     code: "noUsersFound",
    //     message: "No users found",
    //   });
    // }

    res.json(users);
  } catch (error) {
    // Handle errors
    res.status(500).json({
      code: "internalServerError",
      message: "An internal server error occurred",
      error: error.message,
    });
  }
}

module.exports = listAbl;

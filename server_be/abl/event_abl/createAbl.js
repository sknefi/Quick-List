const Ajv = require("ajv");
const ajv = new Ajv();
const EventModel = require("../../models/EventModel.js");

const itemSchema = {
  type: "object",
  properties: {
    name: { type: "string" },
    state: { type: "string", enum: ["pending", "done"] }, // Only allow "pending" or "done" states
  },
  required: ["name", "state"],
  additionalProperties: false,
};

const schema = {
  type: "object",
  properties: {
    name: { type: "string" },
    members: { type: "array", items: { type: "string" } },
    items: { type: "array", items: itemSchema }, // Validate each item in the 'items' array
    owner: { type: "string" },
    icon: { type: "string" },
    archived: { type: "boolean" },
  },
  required: ["name", "members", "items", "owner", "icon"],
  additionalProperties: false,
};

// http://localhost:3001/event/create
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

    // Create a new event object with the validated data
    const newEvent = new EventModel({
      name: reqParams.name,
      members: reqParams.members,
      items: reqParams.items,
      owner: reqParams.owner,
      icon: reqParams.icon,
      archived: reqParams.archived || false, // Default to false if not provided
    });
    const savedEvent = await newEvent.save();

    res.status(201).json(savedEvent);
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

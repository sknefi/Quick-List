const Ajv = require("ajv");
const ajv = new Ajv();
const EventModel = require("../../models/EventModel.js");

const itemSchema = {
  type: "object",
  properties: {
    name: { type: "string" },
    state: { type: "string", enum: ["pending", "done"] },
  },
  required: ["name", "state"],
  additionalProperties: false,
};

const schema = {
  type: "object",
  properties: {
    name: { type: "string" },
    members: { type: "array", items: { type: "string" } },
    // items: { type: "array", items: itemSchema },
    items: { type: "array", items: { type: "object" } },
    owner: { type: "string" },
    icon: { type: "string" },
    archived: { type: "boolean" },
  },
  required: ["name", "members", "items", "owner", "icon", "archived"],
  additionalProperties: false,
};

// http://localhost:3001/event/update?id=507f1f77bcf86cd799439011
async function updateAbl(req, res) {
  try {
    const eventId = req.query.id;
    const reqParams = req.body;

    const valid = ajv.validate(schema, reqParams);
    if (!valid) {
      return res.status(400).json({
        code: "dtoInIsNotValid",
        message: "DTO is not valid",
        validationError: ajv.errors,
      });
    }

    // Find the event by its ID
    const event = await EventModel.findById(eventId);
    if (!event) {
      return res.status(404).json({
        code: "eventNotFound",
        message: "Event not found",
      });
    }

    // Update the event with the new data
    event.name = reqParams.name;
    event.members = reqParams.members;
    event.items = reqParams.items;
    event.owner = reqParams.owner;
    event.icon = reqParams.icon;
    event.archived = reqParams.archived || false;

    // Save the updated event to the database
    const updatedEvent = await event.save();

    // Send a success response with the updated event data
    res.status(200).json(updatedEvent);
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

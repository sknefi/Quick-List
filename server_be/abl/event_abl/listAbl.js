const EventModel = require("../../models/EventModel.js");

// http://localhost:3001/event/list
async function listAbl(req, res) {
  try {
    const events = await EventModel.find().exec();

    // Check if there are any events in the database
    // if (events.length === 0) {
    //   return res.status(404).json({
    //     code: "noEventsFound",
    //     message: "No events found",
    //   });
    // }

    res.status(200).json(events);
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

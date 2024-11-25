const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  state: { type: String, enum: ["pending", "done"], required: true },
});

const eventSchema = new mongoose.Schema({
  name: { type: String, required: true },
  members: { type: [String], required: true }, // Array of user IDs
  items: { type: [itemSchema], required: true }, // Array of embedded items
  owner: { type: String, required: true },
  archived: { type: Boolean, required: true, default: false },
  icon: { type: String, required: true }, // Optional icon for the list
});

const EventModel = mongoose.model("Event", eventSchema);

module.exports = EventModel;

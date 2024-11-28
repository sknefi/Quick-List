const express = require("express");
const router = express.Router();

const getAbl = require("../abl/event_abl/getAbl.js");
const listAbl = require("../abl/event_abl/listAbl.js");
const deleteAbl = require("../abl/event_abl/deleteAbl.js");
const createAbl = require("../abl/event_abl/createAbl.js");
const updateAbl = require("../abl/event_abl/updateAbl.js");

const { roleGuard } = require("../helpers/RoleGuard.js");
const { authenticateToken } = require("../helpers/AuthenticateToken.js");

// CRUD + LIST

// EVERYTHING works, eventCreate and eventDelete tests needed

// CREATE EVENT
router.post("/create", authenticateToken, roleGuard("createEvent"), createAbl);

// GET EVENT
router.get("/get", authenticateToken, roleGuard("getEvent"), getAbl);

// UPDATE EVENT
router.put("/update", authenticateToken, roleGuard("updateEvent"), updateAbl);

// DELETE EVENT
router.delete("/delete", authenticateToken, roleGuard("deleteEvent"), deleteAbl);

// LIST EVENTS
router.get("/list", authenticateToken, roleGuard("listEvent"), listAbl);

module.exports = router;

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

// CREATE EVENT
router.post("/create", createAbl);

// GET EVENT
router.get("/get", getAbl);

// UPDATE EVENT
router.put("/update", updateAbl);

// DELETE EVENT
router.delete("/delete", deleteAbl);

// LIST EVENTS
// router.get("/list", authenticateToken, listAbl);
router.get("/list", listAbl);

module.exports = router;

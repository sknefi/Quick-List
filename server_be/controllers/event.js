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
router.post("/create", authenticateToken, createAbl);

// GET EVENT
router.get("/get", authenticateToken, getAbl);

// UPDATE EVENT
router.put("/update", authenticateToken, updateAbl);

// DELETE EVENT
router.delete("/delete", authenticateToken, deleteAbl);

// LIST EVENTS
router.get("/list", authenticateToken, listAbl);

module.exports = router;

const express = require("express");
const router = express.Router();

const getAbl = require("../abl/event_abl/getAbl.js");
const listAbl = require("../abl/event_abl/listAbl.js");
const deleteAbl = require("../abl/event_abl/deleteAbl.js");
const createAbl = require('../abl/event_abl/createAbl.js');
const updateAbl = require('../abl/event_abl/updateAbl.js');

const { roleGuard } = require("../helpers/RoleGuard.js");

// CRUD + LIST

// EVERYTHING works, eventCreate and eventDelete tests needed

// CREATE EVENT
router.post("/create", roleGuard("createEvent"), (req, res) => {
	createAbl(req, res);
});

// GET EVENT
router.get("/get", (req, res) => {
	getAbl(req, res);
});

// UPDATE EVENT
router.put("/update", roleGuard("createEvent"), (req, res) => {
	updateAbl(req, res);
});

// DELETE EVENT
router.delete("/delete", (req, res) => {
	deleteAbl(req, res);
});

// LIST EVENTS
router.get("/list", (req, res) => {
	listAbl(req, res)
});

module.exports = router;
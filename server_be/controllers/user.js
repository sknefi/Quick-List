const express = require("express");
const router = express.Router();

const getAbl = require("../abl/user_abl/getAbl.js");
const listAbl = require("../abl/user_abl/listAbl.js");
const deleteAbl = require("../abl/user_abl/deleteAbl.js");
const createAbl = require('../abl/user_abl/createAbl.js');
const updateAbl = require('../abl/user_abl/updateAbl.js');

// CRUD + LIST

// CREATE USER
router.post("/create", (req, res) => {
	createAbl(req, res);
});

// GET USER
router.get("/get", (req, res) => {
	getAbl(req, res);
});

// UPDATE USER
router.put("/update", (req, res) => {
	updateAbl(req, res);
});

// DELETE USER
router.delete("/delete", (req, res) => {
	deleteAbl(req, res);
});

// LIST USERS
router.get("/list", (req, res) => {
	listAbl(req, res);
});

module.exports = router;
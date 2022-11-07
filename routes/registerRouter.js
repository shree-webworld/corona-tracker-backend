const express = require('express');
const router = new express.Router();

// require('../database/conn');
const registerController = require('../controller/registerController');
// const Patient_registered = require('../model/patientSchema');


router.post("/api/register", registerController);
router.get("/api/register", registerController);


module.exports = router;

"use strict";

const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers/users");
const resCtrl = require("../controllers/reservations");
const sharedCtrl = require("../controllers/shared");

router.get(
  "/reports",
  userCtrl.getUsers,
  resCtrl.getReservations,
  sharedCtrl.getReports,
  sharedCtrl.responeToJSON("reports")
);

module.exports = router;

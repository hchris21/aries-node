"use strict";

const express = require("express");
const router = express.Router();
const resCtrl = require("../controllers/reservations");
const sharedCtrl = require("../controllers/shared");

router.get(
  "/reservations",
  resCtrl.getReservations,
  sharedCtrl.responeToJSON("reservations")
);
router.get("/reservations/:userId", resCtrl.getReservationByUserId);
router.post("/reservations", resCtrl.createReservation);
router.put("/reservations/:reservationId", resCtrl.updateReservation);
router.delete("/reservations/:reservationId", resCtrl.deleteReservation);

module.exports = router;

"use strict";

const express = require("express");
const router = express.Router();
const resCtrl = require("../controllers/reservations");

router.get("/reservations", resCtrl.getReservations);
router.get("/reservations/:userId", resCtrl.getReservationByUserId);
router.post("/reservations", resCtrl.createReservation);
router.put("/reservations/:reservationId", resCtrl.updateReservation);
router.delete("/reservations/:reservationId", resCtrl.deleteReservation);

module.exports = router;

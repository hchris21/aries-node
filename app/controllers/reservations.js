"use strict";
const Reservation = require("../models/reservations");

const getReservations = (req, res, next) => {
  Reservation.find((err, result) => {
    if (err) {
      console.log("err", err);
    }

    req.resources.reservations = result;
    // res.json({ data: result });
    next();
  });
};

const getReservationByUserId = (req, res, next) => {
  Reservation.find({ _id: req.params.userId }, (err, reservations) => {
    if (err) {
      console.log("err", err);
    }

    res.json({ data: reservations });
  });
};

const createReservation = (req, res, next) => {
  const reservation = new Reservation(req.body);

  reservation.save((err, result) => {
    if (err) {
      return next(err);
    }

    return res.json({ data: result });
  });
};

const updateReservation = (req, res, next) => {
  Reservation.findOneAndUpdate(
    { _id: req.params.reservationId },
    req.body,
    (err, reservations) => {
      if (err) {
        return next(err);
      }

      res.json({ data: reservations });
    }
  );
};

const deleteReservation = (req, res, next) => {
  Reservation.findOneAndDelete(
    { _id: req.params.reservationId },
    (err, reservations) => {
      if (err) {
        return next(err);
      }

      res.json({ data: reservations });
    }
  );
};

const responeToJSON = (prop) => {
  return (req, res, next) => {
    res.json(req.resources[prop]);
  };
};

/**
 *  Module exports
 */
module.exports.getReservations = getReservations;
module.exports.getReservationByUserId = getReservationByUserId;
module.exports.createReservation = createReservation;
module.exports.updateReservation = updateReservation;
module.exports.deleteReservation = deleteReservation;
module.exports.responeToJSON = responeToJSON;

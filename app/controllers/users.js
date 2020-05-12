"use strict";
const User = require("../models/users");
const Reservation = require("../models/reservations");

const firstMidFromGetUsers = (req, res, next) => {
  console.log("firs mid from users");
  next();
};
const firstMidFromGetSettings = (req, res, next) => {
  console.log("firs mid from settings");
  next();
};

const getUsers = (req, res, next) => {
  User.find((err, result) => {
    if (err) {
      console.log("err", err);
    }

    req.resources.users = result;
    // res.json({ data: result });
    next();
  });
};

const getUsersById = (req, res, next) => {
  User.find({ _id: req.params.userId }, (err, users) => {
    if (err) {
      console.log("err", err);
    }

    res.json({ data: users });
  });
};

const createUser = (req, res, next) => {
  const user = new User(req.body);

  user.save((err, result) => {
    if (err) {
      return next(err);
    }

    console.log("result", result);
    return res.json({ data: result });
  });
};

const updateUser = (req, res, next) => {
  User.findOneAndUpdate({ _id: req.params.userId }, req.body, (err, users) => {
    if (err) {
      return next(err);
    }

    res.json({ data: users });
  });
};

const deleteUser = (req, res, next) => {
  User.findOneAndDelete({ _id: req.params.userId }, req.body, (err, users) => {
    if (err) {
      return next(err);
    }

    res.json({ data: users });
  });
};

const getReports = (req, res, next) => {
  User.find((err, resultUsers) => {
    if (err) {
      console.log("err", err);
    }
  });

  Reservation.find()
    .populate("user", "name email")
    .exec((err, resultReservations) => {
      if (err) {
        console.log("err", err);
      }

      const reports = resultUsers.concat(resultReservations);
      res.json({ data: reports });
    });
};

const responeToJSON = (prop) => {
  return (req, res, next) => {
    res.json(req.resources[prop]);
  };
};

/**
 *  Module exports
 */
module.exports.firstMidFromGetUsers = firstMidFromGetUsers;
module.exports.firstMidFromGetSettings = firstMidFromGetSettings;
module.exports.getUsers = getUsers;
module.exports.getUsersById = getUsersById;
module.exports.createUser = createUser;
module.exports.updateUser = updateUser;
module.exports.deleteUser = deleteUser;
module.exports.getReports = getReports;
module.exports.responeToJSON = responeToJSON;

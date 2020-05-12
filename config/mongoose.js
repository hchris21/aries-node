"use strict";

const mongoose = require("mongoose");
const config = require("./index");

const initMongoose = (app) => {
  mongoose.connect(config.mongodb.uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });

  // If the Node process ends, cleanup existing connections
  process.on("SIGINT", cleanup);
  process.on("SIGTERM", cleanup);
  process.on("SIGHUP", cleanup);
};

const cleanup = () => {
  mongoose.connection.close(() => {
    process.exit();
  });
};

module.exports.init = initMongoose;

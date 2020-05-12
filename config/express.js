"use strict";

const bodyParser = require("body-parser");
const methodOverride = require("method-override");

const initExpress = (app) => {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(methodOverride());

  app.use((req, res, next) => {
    console.log(`API call`);
    req.resources = req.resources || {};
    next();
  });
};

module.exports.init = initExpress;

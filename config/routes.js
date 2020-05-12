"use strict";
const path = require("path");

const initRoutes = (app) => {
  const routesPath = path.join(__dirname, "../app/routes");
  const routes = ["users", "reservations", "common"];

  routes.forEach(
    (route) => app.use(require(routesPath + "/" + route)) // API is important
  );
};

module.exports.init = initRoutes;

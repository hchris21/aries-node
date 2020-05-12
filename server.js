"use strict";

const express = require("express");
const app = express();

const config = require("./config");

require("./config/express").init(app);
require("./config/routes").init(app);
require("./config/mongoose").init(app);

app.all("*", (req, res, next) => {
  console.log("final midd");
  res.status(404).json({
    status: "fail",
    message: `Can't find ${req.url} on this server`,
  });
});

app.use((err, req, res, next) => {
  console.log("err", err);
  return res.status(400).json({
    status: "error",
    message: (err && err.message) || "Default message",
  });
});

app.listen(config.PORT, () => {
  console.log(`API on port ${config.PORT}`);
});

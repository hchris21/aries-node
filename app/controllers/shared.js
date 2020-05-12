"use strict";

const responeToJSON = (prop) => {
  return (req, res, next) => {
    res.json(req.resources[prop]);
  };
};

const getReports = (req, res, next) => {
  const reports = [].concat.apply([], Object.values(req.resources));
  req.resources.reports = reports;
  next();
};
module.exports.responeToJSON = responeToJSON;
module.exports.getReports = getReports;

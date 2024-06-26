const winston = require("winston");

module.exports = function (err, req, res, next) {
  winston.error(err.message, { error: err });
  res.status(500).send("Something failed");
};

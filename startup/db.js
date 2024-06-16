const winston = require("winston");
const mongoose = require("mongoose");
const { MONGODB_URL } = require("../config/constants");

module.exports = function () {
  mongoose.connect(MONGODB_URL).then(() => {
    winston.info("Connected to MongoDB");
  });
};

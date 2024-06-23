const winston = require("winston");
const mongoose = require("mongoose");
const { MONGODB_URL } = require("../config/constants");
const config = require("config");

module.exports = function () {
  const db = config.get("db");
  mongoose
    .connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    })
    .then(() => {
      winston.info(`Connected to ${db}...`);
    });
};

require("dotenv").config();
const express = require("express");
const winston = require("winston");
const { PORT } = require("./config/constants");
const app = express();
require("./startup/routes")(app);
require("./startup/db")();
require("./startup/logging")();
require("./startup/config")();
require("./startup/validation")();

const server = app.listen(PORT, () =>
  winston.info(`Listening on port ${PORT}... `)
);

module.exports = server;

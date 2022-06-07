const express = require("express");
const bodyParser = require("body-parser");
const application = express();

application.use(bodyParser.json());
application.use(bodyParser.urlencoded({ extended: false }));

application.use((request, response, next) => {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  response.setHeader(
    "Access-Control-Allow-Methods",
    "GET"
  );
  next();
});

module.exports = application;

"use strict";

const testIntegration = require("../any-queue-test/index.js");
const { connect, initialize, refresh, disconnect } = require(".")({
  database: "any-queue-test",
  url: "mongodb://localhost:27017"
});

testIntegration({ name: "mongo", connect, initialize, refresh, disconnect });

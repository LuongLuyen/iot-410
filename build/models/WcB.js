"use strict";

var mongoose = require("mongoose");
var Schema = new mongoose.Schema({
  status_1: {
    type: String,
    required: true
  },
  status_2: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});
module.exports = mongoose.model("WcB", Schema);
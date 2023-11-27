"use strict";

var mongoose = require("mongoose");
var Schema = new mongoose.Schema({
  user: {
    type: String,
    required: true
  },
  day: {
    type: String,
    required: true
  },
  rac: {
    type: String,
    required: true
  },
  nuoc: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  modifiedBy: {
    type: String,
    required: true
  }
});
module.exports = mongoose.model("TrucNhat", Schema);
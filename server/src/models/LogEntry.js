const mongoose = require("mongoose");
const { Schema } = mongoose

// * Title - Text
// * Description - Text
// * Comments - Text
// * Rating - scale of 1 - 10
// * Image - Text - URL
// * Latitude - Number
// * Longitude - Number
// * CreatedAt - DateTime
// * UpdatedAt - DateTime

const logEntrySchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  comments: String,
  image: String,
  rating: {
    type: Number,
    min: [0, "Too low of a rating!"],
    max: [10, "Too high of a rating!"],
    default: 0,
  },
  latitude: {
    type: Number,
    required: true,
    min: -90,
    max: 90,
  },
  longitude: {
    type: Number,
    required: true,
    min: -180,
    max: 180,
  },
  visitDate: {
    required: true,
    type: Date,
  },
}, {timestamps: true}
);

const LogEntry = mongoose.model("LogEntry", logEntrySchema)

module.exports = LogEntry
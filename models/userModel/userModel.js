// Import mongoose database Connection
const db = require("../../database/mongo/connection");

const Schema = db.mongoose.Schema;

const userSchema = new Schema({
  userName: {
    type: String,
    required: true,
  },

  userMail: {
    type: String,
    required: true,
  },
  userLocationX: {
    type: Number, // unique
    required: true,
  },
  userLocationY: {
    type: Number, // unique
    required: true,
  },
  // geoLocation: {
  //   type: {
  //     type: String,
  //     enum: ["Point"],
  //     required: true,
  //   },
  //   coordinates: {
  //     type: [Number],
  //     required: true,
  //   },
  // },
  userSearchDistance: {
    type: Number,
    default: 3
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const userModel = db.mongoose.model("userModel", userSchema, "user");
module.exports = userModel;

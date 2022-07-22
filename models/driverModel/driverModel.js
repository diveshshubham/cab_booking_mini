// Import mongoose database Connection
const db = require("../../database/mongo/connection");

const Schema = db.mongoose.Schema;

const driverSchema = new Schema({
  driverName: {
    type: String, // unique
    required: true,
  },
  driverMail : {
    type: String, // unique
    required: true,
  },
  driverLocX: {
    type: Number, // unique
    required: true,
  },
  driverLocY: {
    type: Number,
    required: true
},
geoLocation: {
  type: {
    type: String,
    enum: ["Point"],
    required: true,
  },
  coordinates: {
    type: [Number],
    required: true,
  },
},
isAvailable: {
  type: Boolean,
  required: true,
  default:true
},
thresholdDistanceDriver: {
  type: Number,
    required: true,
    default : 5
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

const driverModel = db.mongoose.model("driverModel", driverSchema, "driver");
module.exports = driverModel;

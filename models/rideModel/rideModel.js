// Import mongoose database Connection
const db = require("../../database/mongo/connection");

const Schema = db.mongoose.Schema;

const rideSchema = new Schema({
    tripId:{
        type: Schema.ObjectId,
        ref: 'tripModel', 
    },
    userId: {
        type: Schema.ObjectId,
        ref: 'userModel',
    },
    driverId: {
        type: Schema.ObjectId,
        ref: 'driverModel',
    },
    startTime: {
        type: Date,
        default: Date.now,
    },
    endTime: {
        type: Date,
        default: Date.now,
    },
    startLocX: {
        type: Number,   
    },
    startLocY: {
        type: Number,       
    },
    isCompltedRide:{
        type:Boolean,
        default:false
    },
    endLocX: {
        type: Number,
       
    },
    endLocY: {
        type: Number,
      
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

const rideModel = db.mongoose.model("rideModel", rideSchema, "rideModel");
module.exports = rideModel;

// Import mongoose database Connection
const db = require("../../database/mongo/connection");

const Schema = db.mongoose.Schema;

const tripSchema = new Schema({

    userId: {
        type: Schema.ObjectId,
        ref: 'userModel',
    },
    driverId: {
        type: Schema.ObjectId,
        ref: 'driverModel',
    },
    driverAcceptTime: {
        type: Date,
        default: Date.now,
    },
    userDestination: {
        type: String,
    },
    userPickupX: {
        type: Number,   
    },
    userPickupY: {
        type: Number,       
    },
    driverDropX:{
        type:Number,
    },
    driverDropY:{
        type:Number,
    },
    fareCollected: {
        type: Number, 
        default:0    
    },
    userFeedback:{
        type:String,
        default:"POOR"
    },
    driverFeedback:{
        type:String,
        default:"POOR"
    },
    tripEndTime: {
        type: Date,
        default: Date.now,
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

const tripModel = db.mongoose.model("tripModel", tripSchema, "tripModel");
module.exports = tripModel;

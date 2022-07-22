const tripModel = require('../../models/tripModel/tripModel')
const distanceLatLng = require('../../services/fareCalculator/fareCalculator').distanceLatLng

module.exports = {
    //start trip by driver
    startTrip: async (req, res) => {
        try {

            const userId = req.body.userId
            const driverId = req.driver._id;
            const driverAcceptTime = new Date();
            const userDestination = req.body.userDestination;
            const userPickupX = req.body.userPickupX;
            const userPickupY = req.body.userPickupY;

            if (userId &&
                driverId &&
                driverAcceptTime &&
                userDestination &&
                userPickupX &&
                userPickupY) {

                let tripSaveModel = new tripModel({
                    driverId: driverId,
                    userId: userId,
                    driverAcceptTime: driverAcceptTime,
                    userDestination: userDestination,
                    userPickupX: userPickupX,
                    userPickupY: userPickupY
                })
                let rideSave = await tripSaveModel.save()

                res.status(200).send({ data: rideSave })
            }
        }
        catch (err) {
            console.log(err)
            res.status(500).send({ err })
        }
    },
    //end trip controller for user and driver
    endTrip: async (req, res) => {
        try {
            const tripId = req.params.tripId;
            const driverDropX = req.body.driverDropX
            const driverDropY = req.body.driverDropY;
            const userFeedback = req.body.userFeedback;
            const driverFeedback = req.body.driverFeedback;
            //const driverId = req.driver._id

            if (tripId &&
                driverDropX &&
                driverDropY &&
                driverFeedback) {

                let condition = { _id: tripId }
                let tripDetails = await tripModel.findOne(condition)
                console.log(tripDetails.userPickupX,
                    tripDetails.userPickupY,
                    driverDropX,
                    driverDropY)
                let fareCalculated = distanceLatLng(
                    tripDetails.userPickupX,
                    tripDetails.userPickupY,
                    driverDropX,
                    driverDropY
                )

                console.log(fareCalculated)
                fareCalculated = parseInt(fareCalculated)
                let updateTripObj = {
                    driverDropX: driverDropX,
                    driverDropY: driverDropY,
                    driverFeedback: driverFeedback,
                    fareCollected: fareCalculated,
                    tripEndTime: new Date()
                }
                tripDetails = await tripModel.updateOne(condition, { $set: updateTripObj })
                tripDetails = await tripModel.findOne(condition)
                res.status(200).send({ data: tripDetails })
            } else if (userFeedback) {
                let condition = { _id: tripId }
                let updateTripObj = {
                    userFeedback: userFeedback,
                }
                tripDetails = await tripModel.updateOne(condition, { $set: updateTripObj })
                tripDetails = await tripModel.findOne(condition)
                res.status(200).send({ data: tripDetails })
            }
        }
        catch (err) {
            console.log(err)
            res.status(500).send({ msg: "something went wrong" })
        }
    }
}
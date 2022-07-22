
const userModel = require('../../models/userModel/userModel')
const driverNearMe = require('../../services/driverFinderServices/driverFinderServices').driversNearMe

module.exports = {
    //user to get cabs near by
    getDriverNearBy: async (req, res) => {
        try {
            const userId = req.user._id
            let condition = { _id: userId }
            let userDetails = await userModel.findOne(condition)
            
            let driversNearBy = await driverNearMe(userDetails.userLocationX,
                userDetails.userLocationY,
                userDetails.userSearchDistance)

            if (driversNearBy.length == 0) {
                driversNearBy = "oops! No Driver found"
            }
            res.status(200).send({ drivers: driversNearBy })
        }
        catch (err) {
            res.status(500).send({ msg: "something went wrong" })
        }
    }
}
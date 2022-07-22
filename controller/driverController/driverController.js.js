const driverModel = require('../../models/driverModel/driverModel')
var jwt = require('jsonwebtoken');
var jwtsecret = "indiaisgreat";

module.exports = {
    // to register a driver
    addDriver: async (req, res) => {
        try {
            const driverMail = req.body.driverMail
            const driverName = req.body.driverName;
            const driverLocX = req.body.driverLocX;
            const driverLocY = req.body.driverLocY;
            const isAvailable = req.body.isAvailable;
            const lat = req.body.lat;
            const lng = req.body.lng;
            const thresholdDistanceDriver = req.body.thresholdDistanceDriver;

            let geoLocationObj = {
                coordinates: [lng, lat],
                type: "Point",
            };

            let check = await driverModel.findOne({ driverMail: driverMail })
            if (check) {
                res.status(400).send({ msg: "email already exist" })
            }
            if (!driverMail) {
                res.status(400).send({ mgs: "empty driver name" })
            }
            let driverSaveMoel = new driverModel({
                driverMail: driverMail,
                geoLocation: geoLocationObj,
                driverName: driverName,
                driverLocX: driverLocX,
                driverLocY: driverLocY,
                isAvailable: isAvailable,
                thresholdDistanceDriver: thresholdDistanceDriver
            })
            let driverSave = await driverSaveMoel.save()
            res.status(200).send({ data: driverSave })
        }
        catch (err) {
            res.status(500).send({ msg: "something went wrong" })
        }
    },

    //driver login
    driverLogin: (req, res) => {
        const driverMail = req.body.driverMail;

        let statusMessage = "bad request";

        if (!driverMail) {
            statusMessage = "invalid email";
            res.status(400).send({ msg: statusMessage });
        }
        else {
            let condition = {
                driverMail: driverMail,
            };
            driverModel.findOne(condition)
                .exec((err, driverData) => {
                    if (err) {
                        res.status(500).send({ msg: "something went wrong" });
                    } else {
                        if (driverData) {
                            createDriverToken({ id: driverData._id }, function (token) {

                                if (err) {
                                    res.serverError(err);
                                } else {
                                    console.log("token:", token);
                                    res.status(200).send({ driver: driverData, token });
                                }
                            });
                        } else {
                            res.status(400).send({ msg: "invalid cred" });
                        }
                    }
                });
        }
    },

    //update driver location and availablity
    updateDriver: async (req, res) => {
        try {
            const driverId = req.driver._id
            const driverLocX = req.body.driverLocX;
            const driverLocY = req.body.driverLocX;
            const isAvailable = req.body.isAvailable;
            const thresholdDistanceDriver = req.body.thresholdDistanceDriver;


            if (driverLocX &&
                driverLocY &&
                driverId) {
                let geoLocationObj = {
                    coordinates: [driverLocY, driverLocX],
                    type: "Point",
                };

                let updateDriverObj = {
                    driverLocX: driverLocX,
                    driverLocY: driverLocY,
                    geoLocation: geoLocationObj,
                    isAvailable: isAvailable,
                    thresholdDistanceDriver: thresholdDistanceDriver,
                }

                if (isAvailable == false) {
                    updateDriverObj = {
                        isAvailable: isAvailable,
                    }
                }
                let driverUpd = await driverModel.updateOne({ _id: driverId }, { $set: updateDriverObj })
                driverUpd = await driverModel.findOne({ _id: driverId })
                res.status(200).send({ data: driverUpd })
            }
            else {
                res.status(400).send({ mgs: "invalidData" })
            }
        }
        catch (err) {
            res.status(500).send({ msg: "something went wrong" })

        }
    }
}
function createDriverToken(driver, callback) {
    var token = jwt.sign(driver, jwtsecret, {
        expiresIn: "365d", // expires in 365 days
    });
    callback(token);
}
const express = require("express");
const router = express.Router();
const { validateApiKey, validateDriver } = require('../../middleware/index');
const driverController = require('../../controller/index').driverController;
const tripController = require('../../controller/index').tripController;


let routes = (app) => {
    // driver to register 
    router.post("/driver/register",
        validateApiKey,
        (req, res) => {
            console.log(req.body)
            driverController.addDriver(req, res)
        }
    );
    //login driver
    router.post("/driver/login",
        validateApiKey,
        (req, res) => {
            driverController.driverLogin(req, res)
        });
    //driver updates location when he is available
    router.put("/driver/update",
        validateApiKey,
        validateDriver,
        (req, res) => {
            driverController.updateDriver(req, res)
        });
    //driver starts trip
    router.post("/driver/startTrip",
        validateApiKey,
        validateDriver,
        (req, res) => {
            tripController.startTrip(req, res)
        }
    )
    //driver ends trip
    router.put("/driver/endTrip/:tripId",
        validateApiKey,
        validateDriver,
        (req, res) => {
            tripController.endTrip(req, res)
        }
    )

    app.use(router);
};
module.exports = routes;
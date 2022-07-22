const express = require("express");
const router = express.Router();
const { validateApiKey, validateUserToken } = require('../../middleware/index');
const userController = require('../../controller/index').userController
const searchCabController = require('../../controller/index').searchCabController;
const tripController = require('../../controller/index').tripController;


let routes = (app) => {
    //to register user
    router.post("/user/register",
        validateApiKey,
        (req, res) => {
            console.log(req.body)
            userController.register(req, res)
        }
    );
    //to login user
    router.post("/user/login",
        validateApiKey,
        (req, res) => {
            console.log("o")
            userController.login(req, res)
        }
    );
    //user updates location and search distance
    router.put("/user/update",
        validateApiKey,
        validateUserToken,
        (req, res) => {
            userController.updateUser(req, res)
        }
    );
    // user to search cab withing mutulal threshold distance
    router.get("/user/searchCab",
        validateApiKey,
        validateUserToken,
        (req, res) => {
            searchCabController.getDriverNearBy(req, res)
        }
    )
    //user ends trip
    router.put("/user/endTrip/:tripId",
        validateApiKey,
        validateUserToken,
        (req, res) => {
            tripController.endTrip(req, res)
        }
    );

    app.use(router);
};
module.exports = routes;
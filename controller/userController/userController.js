const emailExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // eslint-disable-line
var jwt = require('jsonwebtoken');
var jwtsecret = "indiaisgreat";
const userModel = require('../../models/userModel/userModel');

module.exports = {

    // user login controller
    login: (req, res) => {
        console.log("lo")
        const userMail = req.body.userMail;
        let statusMessage = "bad request";
        if (!userMail) {
            statusMessage = "invalid email";
            res.status(400).send({ msg: statusMessage });
        } else {
            let condition = {
                userMail: userMail
            };
            userModel.findOne(condition)
                .exec((err, userData) => {
                    if (err) {
                        res.status(500).send({ msg: "something went wrong" });
                    } else {
                        if (userData) {
                            createUserToken({ id: userData._id }, function (token) {

                                if (err) {
                                    console.log(err)
                                    res.status(500).send(err);
                                } else {
                                    console.log("token:", token);
                                    res.status(200).send({ user: userData, token });
                                }
                            });
                        } else {
                            res.status(400).send({ msg: "invalid cred" });
                        }
                    }
                });
        }
    }
    ,
    //user registration
    register: async (req, res) => {
        try {
            const userName = req.body.userName;
            const userMail = req.body.userMail;
            const userLocationX = req.body.userLocationX;
            const userLocationY = req.body.userLocationY;
            const userSearchDistance = req.body.userSearchDistance;

            if (!userName) {
                statusMessage = "invalid name";
                res.status(400).send({ msg: statusMessage });
            } else if (!emailExp.test(userMail)) {
                statusMessage = "invalid email";
                res.status(400).send({ msg: statusMessage });
            } else if (!userLocationX || !userLocationY) {
                statusMessage = "empty location";
                res.status(400).send({ msg: statusMessage });
            } else {
                let emailCheck = await userModel.findOne({ userMail: userMail })
                if (emailCheck) {
                    statusMessage = "email already exists";
                    res.status(400).send({ msg: statusMessage });
                }
                const user = new userModel({
                    userName: userName,
                    userMail: userMail,
                    userLocationX: userLocationX,
                    userLocationY: userLocationY,
                    userSearchDistance: userSearchDistance
                });
                await user.save()
                res.status(200).send({ user: user })
            }
        } catch (err) {
            console.log(err)
            res.status(500).send({ msg: err })
        }
    },

    //update user
    updateUser: async (req, res) => {
        try {
            const userId = req.user._id;
            const userLocationX = req.body.userLocationX;
            const userLocationY = req.body.userLocationY;
            const userSearchDistance = req.body.userSearchDistance;
            let condition = { _id: userId }

            if (userLocationX && userLocationY) {
                const updateUser = {
                    userLocationX: userLocationX,
                    userLocationY: userLocationY,
                    userSearchDistance: userSearchDistance
                }
                let updUser = await userModel.updateOne(condition, { $set: updateUser })
                updUser = await userModel.findOne(condition)
                res.status(200).send({ data: updUser })

            } else {
                res.status(400).send({ msg: "invalid data" })
            }
        }
        catch (err) {
            res.status(500).send({ msg: "something went wrong" })
        }

    }

}

/**
* Used t o create JWT token
* @param {Object} admin
* @param {any} callback
*/
function createUserToken(user, callback) {
    var token = jwt.sign(user, jwtsecret, {
        expiresIn: "365d", // expires in 365 days
    });
    callback(token);
}

const express = require("express");
const router = express.Router();

let routes = (app) => {
  router.get("/home", (req,res) => {
    res.send("welcome to mini Uber")
  });
  app.use(router);
};
module.exports = routes;
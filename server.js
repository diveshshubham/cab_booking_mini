const cors = require("cors");
const express = require("express");
const app = express();
app.use(express.json());

var corsOptions = {
  origin: "http://localhost:8086"
};
app.use(cors(corsOptions));


const user = require('./router/index').userRoutes;
const driver = require('./router/index').driverRoutes;
const home = require('./router/defaultPath/defaultPath')


app.use(express.urlencoded({ extended: true }));
user(app)
driver(app)
home(app)

function initializeDatabaseConnection(){
  require('./database/mongo/connection')
}

initializeDatabaseConnection()

let port = process.env.PORT;
app.listen(port, () => {
  console.log(`Running at localhost:${port}`);
});
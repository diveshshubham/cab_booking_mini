const driverModel = require('../../models/driverModel/driverModel')

module.exports = {
    driversNearMe: async (X, Y, Z) => {
        try {
            let coordinateArray = [Y, X];
            let driversArray = []
            let condition = {
                geoLocation: {
                  $geoWithin: {
                    $centerSphere: [coordinateArray, getLocationRange(Z)],
                  },
                },
            };
            let drivers = await driverModel.find(condition)
            console.log(drivers)
            
            for (let i = 0; i < drivers.length; i++) {
                let distanceD = distance(
                    X,
                    Y,
                    drivers[i].driverLocX,
                    drivers[i].driverLocY
                )
                if ((distanceD < drivers[i].thresholdDistanceDriver) && drivers[i].isAvailable) {
                    driversArray.push(drivers[i])
                }
            }
            return driversArray;

        } catch (err) {
            console.log(err)
        }
    }
}

function distance(X, Y, X1, Y1) {
    let d1 = X1 - X;
    let d2 = Y1 - Y;
    let distance = Math.pow(d1, 2) + Math.pow(d2, 2)
    distance = Math.sqrt(distance)
    return distance
}

function distanceLatLng(lat1, lon1, lat2, lon2) {
    var p = 0.017453292519943295;    // Math.PI / 180
    var c = Math.cos;
    var a = 0.5 - c((lat2 - lat1) * p)/2 + 
            c(lat1 * p) * c(lat2 * p) * 
            (1 - c((lon2 - lon1) * p))/2;
  
    return 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
  }

function getLocationRange(distanceRange) {
    var earthRadiusInMiles = 3959;
    return distanceRange / earthRadiusInMiles;
  }
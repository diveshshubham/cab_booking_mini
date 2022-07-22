
module.exports = {
    fareCalculated: (X, Y, X1, Y1) => {
        const ratePerKm = 10;
        let d1 = parseInt(X1 - X);
        let d2 = parseInt(Y1 - Y);
        let distance = Math.pow(d1, 2) + Math.pow(d2, 2)
        distance = Math.sqrt(distance)

        return distance * ratePerKm
    },
    distanceLatLng: (lat1, lon1, lat2, lon2) => {
        let ratePerKm = 10
        var p = 0.017453292519943295;    // Math.PI / 180
        var c = Math.cos;
        var a = 0.5 - c((lat2 - lat1) * p) / 2 +
            c(lat1 * p) * c(lat2 * p) *
            (1 - c((lon2 - lon1) * p)) / 2;

        return ratePerKm * 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
    }
}


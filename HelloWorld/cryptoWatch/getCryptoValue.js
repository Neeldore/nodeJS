var axios = require('axios');


var getPrices = function (res) {
    axios.get('https://api.coinmarketcap.com/v1/ticker/?convert=INR&limit=10').then(response => {
        // console.log(response.data[0].id);
        var arrayToSend = []
        for (var i = 0; i < response.data.length; i++)
            arrayToSend.push(response.data[i].id + '-' + response.data[i].price_inr);
        res.send(arrayToSend);
    })

}
var listOfBroadband = function (res) {
    var listOfBroadbands = [];
    var tempObject = {
        Name: ["Hathway", "ACT", "Spectranet", "NET", "GCN", "BBNL"],
        ratings: [3, 4, 3, 2, 1, 3]
    }
    for (var i = 0; i < tempObject.Name.length; i++) {
        var tempName = tempObject.Name[i];
        var tempRatings = tempObject.ratings[i];
        var tempTempObject = {
            Name: tempName,
            Ratings: tempRatings
        }
        listOfBroadbands.push(tempTempObject);
    }
    console.log(listOfBroadbands);
    res.json(listOfBroadbands);
}

var googleBroadBands = function (res) {
    var list = [];
    axios.get('https://maps.googleapis.com/maps/api/place/textsearch/json?query=isp+in+bangalore&key=AIzaSyCigjGhKYE2iU4UMysbrdh1Wua18B7GkCk').then(response => {
        var arrayToSend = [];

        for (var i = 0; i < response.data.results.length; i++){
            var tempName = response.data.results[i].name
            var tempRatings = response.data.results[i].rating
            var tempTempObject = {
                Name: tempName,
                Ratings: tempRatings
            }
            arrayToSend.push(tempTempObject);
        }
        res.send(arrayToSend);
    })
}

exports.getPrices = getPrices;
exports.listOfBroadband = listOfBroadband;
exports.googleBroadBands = googleBroadBands;

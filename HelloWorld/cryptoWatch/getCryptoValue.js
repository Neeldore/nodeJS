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


exports.getPrices = getPrices;

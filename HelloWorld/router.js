module.exports = function (app) {
    var cryptoWatch = require('./cryptoWatch/getCryptoValue');
    app.get('/', function (req, res) {
        cryptoWatch.getPrices(res);
    })
    app.get('/broadband', function (req, res) {
        cryptoWatch.googleBroadBands(res);
    })
    app.get('/googleisp' , function(req , res){
        cryptoWatch.googleBroadBands(res);
    })
}
module.exports = function (app) {
    var cryptoWatch = require('./cryptoWatch/getCryptoValue');
    app.get('/', function (req, res) {
        console.log('im working')
    })
}
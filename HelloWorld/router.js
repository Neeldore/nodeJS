module.exports = function (app) {
    var cryptoWatch = require('./cryptoWatch/getCryptoValue');
    app.get('/searchme', function (req, res) {
        console.log('im working')
    })
}
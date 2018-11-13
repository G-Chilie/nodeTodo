var configValues = require('./config');

module.exports = {

    getDbConnectionString: function() {
        return 'mongodb://' +configValues.uname + ':' + configValues.pwd + '@ds033669.mlab.com:33669/chinwe';
    }

} 
const { connect, connection } = require('mongoose');

connect('mongodb://127.0.0.1:27017/socialAPI').
catch(error => handleError(error));

module.exports = connection;

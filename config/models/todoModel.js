var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var todoSchema = new Schema({
    username: String,
    todo: String,
    isDone: Boolean

});

var Todos = mongoose.model('Todos', ochema);

module.exports = Todos;
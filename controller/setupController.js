var Todos = require('../models/todoMode1');

module.exports = function(app) {

    app.get('/api/setupTodos', function(req, res) {

        //seed database
        var starterTodos = [
            {
                username: 'chinwe',
                todo: 'Buy milk',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'chinwe',
                todo: 'Feed dog',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'chinwe',
                todo: 'Learn Node',
                isDone: false,
                hasAttachment: false
            }
        ];
        Todos.create(starterTodos, function(err, results){
            res.send(results);
        });
    });
}
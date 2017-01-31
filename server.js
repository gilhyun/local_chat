var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');


io.on('connection', function(socket) {
    console.log('a user connected');
    socket.on('disconnect', function() {
        console.log('user disconnected');
    });
    socket.on('chat message', function(msg) {
        console.log('message: ' + msg);
        io.emit('chat message', msg);
    });



});


app.get('/', function(req, res) {
res.sendFile('index.html', { root: path.join(__dirname, 'src') });      
});

http.listen(3000, function() {
    console.log('listening on *:3000');

});

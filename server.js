var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');

var fs = require('fs');
var data = fs.readFileSync('data.json');

var directoryName = __dirname;

var currPath = process.cwd();


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
// app.use(express.static('./src'))

// app.get('/', function(req, res) {

// // res.send(directoryName);      
// });
//app.use(express.static('/', __dirname + '/../src'));

http.listen(3000, function() { //add ip after port
    console.log('Listening to port:  ' + 3000);
    console.log('this is the path: ' + currPath)
    console.log(directoryName);
});




app.get('/', function (req, res) {

res.sendFile(__dirname+'/index.html');

    fs.writeFile('data.json', directoryName);
});




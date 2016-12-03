/**
 * Created by richard.g on 07/11/2016.
 */

// var events = require("./events");
// var emitter = new events.EventEmitter();
// emitter.emit("foo.txt");
//
// var events = require("./events");
// var emitter = new events.EventEmitter();
// emitter.on('aaa', function () {
//     console.log('aaa');
// })
//
// emitter.emit('aaa');

var events = require("./events");
var emitter = new events.EventEmitter();
var username = "colin";
var password = "password";
// add the user
// then emit an event
emitter.on('userAdded', function (user, pwd) {
    console.log(user, pwd);
});
emitter.emit("userAdded", username, password);





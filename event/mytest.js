/**
 * Created by richard.g on 17/11/2016.
 */


var events = require('./customEvent');

var emitter = new events.EventEmitter();

//##Event Emitters and Listening for Events
// var username = "colin";
// var password = "password";
// // add the user
// // then emit an event
// emitter.on('userAdded', function (user, pwd) {
//     console.log(user, pwd);
// });
// emitter.emit("userAdded", username, password);
//


//##One-Time Event Listeners

// emitter.once("foo", function() {
//     console.log("In foo handler");
// });
//
// emitter.emit("foo");
// emitter.emit("foo");

//##Removing Event Listeners



//##Inspecting Event Listeners
// var events = require("events");
// var emitter = new events.EventEmitter();
// emitter.on("newListener", function(eventName, listener) {
//     console.log("Added listener for " + eventName + " events");
// });
// emitter.on("foo", function() {});


// var events = require("events");
// var emitter = new events.EventEmitter();
// emitter.on("newListener", function(date) {
//     console.log(date.getTime());
// });
// emitter.emit("newListener", new Date());
// emitter.on("foo", function() {});



//##Inheriting from Event Emitters

// var EventEmitter = require("./customEvent").EventEmitter;
// var util = require("util");
// function UserEventEmitter() {
//     this.addUser = function(username, password) {
// // add the user
// // then emit an event
//         this.emit("userAdded", username, password);
//     };
// };
// util.inherits(UserEventEmitter, EventEmitter);
//
//
//
// var user = new UserEventEmitter();
// var username = "colin";
// var password = "password";
// user.on("userAdded", function(username, password) {
//     console.log("Added user " + username);
// });
// user.addUser(username, password)
// console.log(user instanceof EventEmitter);

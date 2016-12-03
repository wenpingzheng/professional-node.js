/**
 * Created by richard.g on 17/11/2016.
 */


var events = require('./customEvent');

var emitter = new events.EventEmitter();

//##Event Emitters and Listening for Events

// var username = "colin";
// var password = "password";
// emitter.on('userAdded', function (user, pwd) {
//     console.log(user, pwd);
// });
// emitter.emit("userAdded", username, password);


//##One-Time Event Listeners

// emitter.once("foo.txt", function() {
//     console.log("In foo.txt handler");
// });
//
// emitter.emit("foo.txt");
// emitter.emit("foo.txt");
// emitter.emit("foo.txt");

//##Removing Event Listeners


//##Inspecting Event Listeners

/*
 var events = require("events");
 var emitter = new events.EventEmitter();

 var f = function () {
 };
 emitter.on("newListener", function (eventName, listener) {
 console.log("" + eventName + "", listener === f);
 });
 emitter.on("foo.txt", f);
 */

/*

 var events = require("events");
 var emitter = new events.EventEmitter();
 emitter.on("newListener", function(date) {
 console.log(date);
 });
 emitter.emit("newListener", new Date);
 emitter.on("foo.txt", function() {});

 */

//##Inheriting from Event Emitters

// var EventEmitter = require("./customEvent").EventEmitter;
//
// var util = require("util");
//
// function UserEventEmitter() {
//     this.addUser = function (username, password) {
//         this.emit("userAdded", username, password);
//     };
// };
// //son  parent
// util.inherits(UserEventEmitter, EventEmitter);
//
//
// var user = new UserEventEmitter();
// var username = "colin";
// var password = "password";
// user.on("userAdded", function (username, password) {
//     console.log("Added user " + username);
// });
// user.addUser(username, password)
// console.log(user instanceof EventEmitter);


// var events = require("events");
// var emitter = new events.EventEmitter();
//
//
// emitter.on("eventaaa", function (date) {
//     console.log('a');
// });
// emitter.on("eventbbb", function (date) {
//     console.log('b');
// });
//
// var eventnames = emitter.eventNames();
// console.log(eventnames);
//






#event

##Event Emitters and Listening for Events
```
var events = require("events");
var emitter = new events.EventEmitter();
emitter.emit("foo");

var events = require("events");
var emitter = new events.EventEmitter();
var username = "colin";
var password = "password";
// an event listener
emitter.on("userAdded", function(username, password) {
console.log("Added user " + username);
});
// add the user
// then emit an event
emitter.emit("userAdded", username, password);

```
##One-Time Event Listeners

```
var events = require("events");
var emitter = new events.EventEmitter();
emitter.once("foo", function() {
console.log("In foo handler");
});

emitter.emit("foo");
emitter.emit("foo");


```
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

##Removing Event Listeners

```
emitter.removeAllListeners([eventName])

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

##Inspecting Event Listeners

```
var events = require("events");
var emitter = new events.EventEmitter();
emitter.on("newListener", function(eventName, listener) {
console.log("Added listener for " + eventName + " events");
});
emitter.on("foo", function() {});
```

##Inheriting from Event Emitters

```
var EventEmitter = require("events").EventEmitter;
var util = require("util");
function UserEventEmitter() {
EventEmitter.call(this);
this.addUser = function(username, password) {
// add the user
// then emit an event
this.emit("userAdded", username, password);
};
};
util.inherits(UserEventEmitter, EventEmitter);



var user = new UserEventEmitter();
var username = "colin";
var password = "password";
user.on("userAdded", function(username, password) {
console.log("Added user " + username);
});
user.addUser(username, password)
console.log(user instanceof EventEmitter);



```
/**
 * Created by richard on 11/24/16.
 */

/***
 * data Events,The end Event，close Event
 * @type {Stream}
 */

// var Stream = require("stream");
// var stream = new Stream();
// stream.readable = true;
// stream.on('data', function (inputdata) {
//     console.log(inputdata.toString());
// });
// stream.emit("data", new Buffer("foo"));


// var Stream = require("stream");
// var stream = new Stream();
// var duration = 5 * 1000; // 5 seconds
// var end = Date.now() + duration;
// var interval;
// stream.readable = true;
// stream.on('end', function (inputdata) {
//     console.log(inputdata.toString());
// });
// interval = setInterval(function() {
//     var now = Date.now();
//     console.log("Emitting a data event");
//     stream.emit("data", new Buffer("foo"));
//     if (now >= end) {
//         stream.emit("end","Emitting an end event");
//         clearInterval(interval);
//     }
// }, 1000);

//
// var Stream = require("stream");
// var stream = new Stream();
// stream.readable = true;
// stream.on('close', function (data) {
//     console.log(closedata);
// });
// stream.on('data', function (closedata) {
//     console.log(closedata);
// });
// stream.emit("close",'clase flag');
// stream.emit("data",'data flag');


// var Stream = require("stream");
// var stream = new Stream();
// stream.readable = true;
// stream.on('data', function (closedata) {
//     console.log(closedata);
// });
// stream.on('error', function (closedata) {
//     console.log(closedata);
// });
// stream.emit("error", new Error("Something went wrong!"));
//
// stream.emit("data", 'clase flag');

/***
 * Writable Streams
 */

//process.stdout.write(chunck,[encoding],[callback)， return: Boolean value,

// var success = process.stdout.write("foo\n", function(data) {
//     console.log("Data was successfully written!");
// });
// console.log("success = " + success);


// var success = process.stdout.write("中或要呆", 'ascii', function () {
//     console.log('finished');
// });
// console.log("success = " + success);




var Stream = require("stream");
var stream = new Stream();
var bytes = 0;
stream.writable = true;
stream.write = function(buffer) {
    bytes += buffer.length;
};
stream.end = function(buffer) {
    if (buffer) {
        stream.write(buffer);
    }
    stream.writable = false;
    stream.emit("finish");
    console.log(bytes + " bytes written");
};














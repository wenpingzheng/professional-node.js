/**
 * Created by richard on 11/24/16.
 */

// reading and writing files and
// transmitting data over network sockets.
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
//
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
 * pipie
 */

// var Stream = require("stream");
// var stream = new Stream();
// var bytes = 0;
// stream.writable = true;//what happen if false
// stream.write = function(buffer) {
//     bytes += buffer.length;
// };
// stream.end = function(buffer) {
//     if (buffer) {
//         stream.write(buffer);
//     }
//     stream.writable = false;
//     stream.emit("finish");
//     console.log(bytes + " bytes written");
// };
// stream.pipe(stream);
// stream.emit("data", new Buffer("foo"));
// stream.emit("end");
//


/***
 * Writable Streams
 */


/***
 * File Streams, createReadStream(path,[options ])
 */
//demo 1
// var colors = require('colors');
// var fs = require("fs");
// fs.readFile('/Users/richard.g/Documents/workspaces/github-richardgong1987/msyh.ttf', function(err,data) {
//     console.log('\n=====================input ******  data=========================================='.green);
//     console.log(data.toString());
// })
//
// var colors = require('colors');
// var fs = require("fs");
// fs.readFile('/Users/richard.g/Documents/software/CentOS-7-x86_64-DVD-1511.iso', function(err,data) {
//     if (!err) {
//         console.log('\n=====================input ******  data=========================================='.green);
//         console.log(data.toString());
//     } else{
//         console.log(err);//throw an error
//     }
// })
//


// var colors = require('colors');
// var fs = require("fs");
// var stream;
// stream = fs.createReadStream("/Users/richard.g/Documents/workspaces/github-richardgong1987/msyh.ttf");
// stream.on("data", function (data) {
//     var chunk = data.toString();
//
//     console.log('\n=====================input ******  data=========================================='.green);
//     process.stdout.write(chunk);
// });
//
// stream.on("end", function () {
//     console.log('\n***********************end*******************************'.red);
// });
//

// var colors = require('colors');
// var fs = require("fs");
// var stream;
// stream = fs.createReadStream("/Users/richard.g/Documents/software/CentOS-7-x86_64-DVD-1511.iso");
// stream.on("data", function (data) {
//     var chunk = data.toString();
//
//     console.log('\n=====================input ******  data=========================================='.green);
//     process.stdout.write(chunk);
// });
//
// stream.on("end", function () {
//     console.log('\n***********************end*******************************'.red);
// });


/**
 * The ReadStream’s open Event
 */





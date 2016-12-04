/**
 * Stream used to  reading and writing files and
 // transmitting data over network sockets.

 */
/*****************************************
 * 1.Readable Streams
 */
/**
 * data Events,The
 * end Event:no more data
 * close Event:stream data has been closed.
 * error Event:problem occurred with the data stream
 */

// var Stream = require("stream");
// var stream = new Stream();
// stream.readable = true;
// stream.on('data', function (inputdata) {
//     console.log(inputdata.toString());
// });
// stream.emit("data", new Buffer("foo.txt"));


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
//     stream.emit("data", new Buffer("foo.txt"));
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

/**********************************
 * 2.Writable Streams
 * write() method:writing a chunk of data to the stream.
 * end() methods:used to signal the end of the data stream,
 * drain event: is used to alert thesource that the writable stream, having processed all its data, can begin receiving data again.
 * finish event: it will emited when no more data
 * close event:
 * error Events:
 */

// var Stream = require("stream");
// var stream = new Stream();
// var bytes = 0;
// stream.writable = true;
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


/********************************
 * Pipes,
 * pipe() Method
 * e.g:node pipes/A.js | node pipes/B.js
 * echo 'richardgong' | node pipes/B.js
 */

//
// var Stream = require("stream");
// var stream = new Stream();
// var bytes = 0;
// stream.writable = true;
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


/**********************************************
 * 3.File Streams:
 * createReadStream(path,[options]) method:
 * fs.createReadStream,open Event:successfully opened
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
 * The fs.createReadStream’s  ,open Event
 */
// var fs = require("fs");
// var stream;
// stream = fs.createReadStream(__dirname + "/foo.txt");
// stream.on("open", function(fd) {
//     fs.fstat(fd, function(error, stats) {
//         if (error) {
//             console.error("fstat error: " + error.message);
//         } else {
//             console.log(stats);
//         }
//     });
// });

// var fs = require('fs');
// var stream;
// var color = require('colors');
// fs.open(__dirname + "/stream.js", "r", function (error, fd) {
//     if (error) {
//         return console.error("open error: " + error.message);
//     }
//     stream = fs.createReadStream(null, {
//         fd: fd,
//         start: 1000
//     });
//
//     stream.on("data", function (data) {
//         console.log('****************************************'.green);
//         console.log(data.toString());
//     });
//     stream.on("end", function () {
//         console.log();
//     });
// });


/**
 * fs.createWriteStream(path,[options]) method
 */
// var fs = require("fs");
// var readStream = fs.createReadStream(__dirname + "/foo.txt");
// var writeStream = fs.createWriteStream(__dirname + "/bar.txt");
// readStream.pipe(writeStream);
/**
 * fs.createWriteStream, open Event:
 */
// var fs = require("fs");
// var stream = fs.createWriteStream(__dirname + "/foo.txt");
// stream.on("open", function(fd) {
//     console.log("File descriptor: " + fd);
// });
/**
 * fs.createWriteStream, bytesWritten Property:number of bytes written to the underlying stream.
 */
// var fs = require("fs");
// var readStream = fs.createReadStream(__dirname + "/foo.txt");
// var writeStream = fs.createWriteStream(__dirname + "/bar.txt",{
//     start:1000
// });
// readStream.pipe(writeStream);
// writeStream.on("finish", function () {
//     console.log(writeStream.bytesWritten);
// });


/***********************************************
 * 4.zlib Module
 */

// var fs = require("fs");
// var zlib = require("zlib");
// var gzip = zlib.createGzip();
// var input = fs.createReadStream("foo.txt");
// var output = fs.createWriteStream("input.txt.gz");
// input.pipe(gzip).pipe(output);

//input | gzip | output


// var fs = require("fs");
// var zlib = require("zlib");
// var gunzip = zlib.createGunzip();
// var input = fs.createReadStream("input.txt.gz");
// var output = fs.createWriteStream("output.txt");
// input.pipe(gunzip).pipe(output);

//input | gunzip | output

/**
 * Convenience Methods
 */
// var zlib = require("zlib");
// var data = "This is some data to compress!";
// zlib.deflate(data, function (error, compressed) {
//     console.log('compressed data:',compressed.toString());
//     if (error) {
//         return console.error("Could not compress data!");
//     }
//     zlib.unzip(compressed, function (error, decompressed) {
//         if (error) {
//             return console.error("Could not decompress data!");
//         }
//         console.log(decompressed.toString());
//     });
// });


/**
 * Deflate/Inflate and DeflateRaw/InflateRaw
 */
// The Deflate compression scheme can be used as an alternative to Gzip. The DeflateRaw scheme is similar to Deflate,
//     but omits the zlib header that is present in Deflate. As previously mentioned, the usage for these schemes are the
// same as for Gzip. The methods used to create Deflate and DeflateRaw streams are zlib.createDeflate() and
// zlib.createDeflateRaw(). Similarly, zlib.createInflate() and zlib.createInflateRaw() are used to create the
// corresponding decompression streams. An additional method, zlib.createUnzip(), is used in the same way, and it
// can decompress both Gzip and Deflate compressed data by automatically detecting the compression scheme.

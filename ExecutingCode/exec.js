/******************
 * child_process.exec(command,[options],callback);
 */
// var cp = require("child_process");
// cp.exec("ls -l /", function(error, stdout, stderr) {
//     if (error) {
//         console.error(error.toString());
//     } else if (stderr !== "") {
//         console.error(stderr);
//     } else {
//         console.log(stdout);
//     }
// });

// cp.exec("ls -l", {
//     cwd: "/"
// }, function(error, stdout, stderr) {
//     if (error) {
//         console.error(error.toString());
//     } else if (stderr !== "") {
//         console.error(stderr);
//     } else {
//         console.log(stdout);
//     }
// });

/******************
 * child_process.execFile(command(not arguments),[options array],[options Object],callback)
 */

// var cp = require("child_process");
// cp.execFile("ls -al", function(error, stdout, stderr) {
//     if (error) {
//         console.error(error.toString());
//     } else if (stderr !== "") {
//         console.error(stderr);
//     } else {
//         console.log(stdout);
//     }
// });


// var cp = require("child_process");
// cp.execFile("ls", ["-la", "/"], function(error, stdout, stderr) {
//     if (error) {
//         console.error(error.toString());
//     } else if (stderr !== "") {
//         console.error(stderr);
//     } else {
//         console.log(stdout);
//     }
// });

// var cp = require("child_process");
// cp.execFile("ls", ["-l"], {
//     cwd: "/"
// }, function (error, stdout, stderr) {
//     if (error) {
//         console.error(error.toString());
//     } else if (stderr !== "") {
//         console.error(stderr);
//     } else {
//         console.log(stdout);
//     }
// });

/******************
 * child_process.spawn(command(not arguments),[options array],[options Object],callback)
 */
// var cp = require("child_process");
// var child = cp.spawn("ls", ["-l"], {
//     cwd: "/",
//     stdio: "inherit"
// });


// var cp = require("child_process");
// var child = cp.spawn("ls", ["-l", "/"]);
// child.stdout.on("data", function(data) {
//     process.stdout.write(data.toString());
// });
//

/***
 * error Event
 */
// var cp = require("child_process");
// var child = cp.spawn("ls -al");
// child.on("error", function(error) {
// // process error here
//     console.error(error.toString());
// })

/**
 * exit Event
 */
// var cp = require("child_process");
// var child = cp.spawn("ls");
// child.on("exit", function (code, signal) {
//     console.log("exit code: " + code);
//     console.log("exit signal: " + signal);
// });

/**
 * close Event
 */
// var cp = require("child_process");
// var child = cp.spawn("ls");
// child.on("close", function (code, signal) {
//     console.log("exit code: " + code);
//     console.log("exit signal: " + signal);
// });

/**
 * pid Property
 */

// var cp = require("child_process");
// var child = cp.spawn("ls");
// console.log(child.pid);


/*********************************************************
 * child.kill()
 *'SIGINT' , 'SIGUSR1','SIGTERM'
 */

var cp = require("child_process");
var child = cp.spawn("cat");
child.on("exit", function (code, signal) {
    console.log("Killed using " + signal);
});
child.kill("SIGTERM");


/*********************************************************
 * child.fork()
 *'SIGINT' , 'SIGUSR1','SIGTERM'
 */

var cp = require("child_process");
var child;
child = cp.fork(__dirname + "/child", ["-foo"], {
    cwd: "/",
    env: {
        bar: "baz"
    }
});


/*********************************************************
 * child.send()
 *'SIGINT' , 'SIGUSR1','SIGTERM'
 */

var cp = require("child_process");
var child;
process.on("message", function(message) {
    console.log("child received: " + message.count);
    if (process.connected) {
        message.count++;
        process.send(message);
    }
});






/******************
 * child_process.exec(command,[object(env)],[callback]);
 * launch a child process.invoked, a new shell
 */

//1.command with argumens
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
//2.with options
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
 * not spawn a new shell.
 */
//1.error
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

//2. with options
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

// var cp = require("child_process");
// var child = cp.spawn("cat");
// child.on("exit", function (code, signal) {
//     console.log("Killed using " + signal);
// });
// child.kill("SIGTERM");


/*********************************************************
 * child.fork()
 *'SIGINT' , 'SIGUSR1','SIGTERM'
 */

// var cp = require("child_process");
// var child;
// child = cp.fork(__dirname + "/child", ["-foo"], {
//     cwd: "/",
//     env: {
//         bar: "baz"
//     }
// });


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


/***********************************************************
 * The vm Module
 * like=>eval()
 */

/***************************
 *
 * vm.runInThisContext
 * @static
 * @param code {string}
 * @param filename? {string}
 */

/**
 * same context as  application
 */
// var vm = require("vm");
// var code = "console.log(foo);";
// foo = "Hello vm";
// vm.runInThisContext(code);

/**
 * Updating a Global Variable;
 */
// var vm = require("vm");
// var code = "console.log(foo); foo = 'Goodbye' //Updating a Global Variable;";
// foo = "Hello vm";
// vm.runInThisContext(code);
// console.log(foo);

/**
 * Attempting to Access a Nonglobal Variable
  */
// var vm = require("vm");
// var foo = "Hello vm";
// var code = "console.log(foo);";
// vm.runInThisContext(code,'/Users/richard.g/Documents/workspaces/github-richardgong1987/professional-node.js/ExecutingCode/exec.js');//error
//

/**
 * Successfully Accessing a Local Variable Using eval()
 */
// var code = "console.log(foo);";
// var foo = "Hello eval";
// eval(code);



/***************************
 *
 * vm.runInNewContext(code, [sandbox], [filename])
 * @static
 * @param code {string}
 * @param filename? {string}
 */


/**
 *Attempting to Execute Code
 */
// var vm = require("vm");
// var code = "console.log(foo);";
// foo = "Hello vm";
// vm.runInNewContext(code);


/**
 * A Successful with sanbox
 * sanbox => with-like  => with(obj){}
 */

// var vm = require("vm");
// var code = "console.log(foo);";
// var sandbox;
// foo = "Hello vm";
// sandbox = {
//     console: console,
//     foo: foo
// };
// vm.runInNewContext(code, sandbox);


// var vm = require("vm");
// var code = "var bar = 1; console.log(foo); foo = 'Goodbye'";
// var sandbox;
// foo = "Hello vm";
// sandbox = {
//     console: console,
//     foo: foo
// };
// vm.runInNewContext(code, sandbox);
// console.log(foo);
// console.log(sandbox.foo);
// console.log(sandbox.bar);


/***************************
 *
 * vm.runInNewContext(code, [sandbox], [filename])
 * @static
 * @param code {string}
 * @param filename? {string}
 */



// var vm = require("vm");
// var code = "console.log(foo);";
// foo = "Hello vm";
// vm.runInNewContext(code);//error
//


// var vm = require("vm");
// var code = "console.log(foo);";
// var sandbox;
// foo = "Hello vm";
// sandbox = {
//     console: console,
//     foo: foo
// };
// vm.runInNewContext(code, sandbox);

/********************************************************************
 * Sandboxing Data
 */
// var vm = require("vm");
// var code = "var bar = 1; console.log(foo); foo = 'Goodbye'";
// var sandbox;
// foo = "Hello vm";
// sandbox = {
//     console: console,
//     foo: foo
// };
// vm.runInNewContext(code, sandbox);
// console.log(foo);
// console.log(sandbox.foo);
// console.log(sandbox.bar);


/**************
 *vm.createContext([initSandbox])
 */
// var vm = require("vm");
// var code = "var bar = 1; console.log(foo); foo = 'Goodbye'";
// var context;
// foo = "Hello vm";
// context = vm.createContext({
//     console: console,
//     foo: foo
// });
// vm.runInContext(code, context);
// console.log(foo);
// console.log(context.foo);
// console.log(context.bar);


/*************
 * createScript()
 * script.runInThisContext()
 * script.runInNewContext([sandbox])
 * script.runInContext(context)
 */

// var vm = require("vm");
// var script = vm.createScript("i++;", "example.vm");
// var sandbox = {
//     i: 0
// }
// for (var i = 0; i < 10; i++) {
//     script.runInNewContext(sandbox);
// }
// console.log(sandbox);
// displays {i: 10}







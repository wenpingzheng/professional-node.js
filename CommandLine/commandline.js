/**
 * Created by richard on 11/24/16.
 */
/**
 * Command Line Arguments,Command line arguments constitute one of the most fundamental ways of providing input to computer programs.
 */

//console.log(process.argv);
/*

 [ '/usr/local/bin/node',
 '/Users/richard.g/Documents/workspace/professional-node.js/CommandLine/commandline.js',
 'a',
 'b',
 'c'
 ]
 */


/***
 * Parsing Argument Values
 */


//node commandline.js a=100 b=100 c=1000

// function parseArgs() {
//     var argv = process.argv;
//     var args = {};
//     argv.forEach(function (arg){
//         if (/(\w+)=(\w+)/.test(arg)) {
//             args[RegExp.$1] = RegExp.$2;
//         }
//     });
//     return args;
// }
// var args = parseArgs();
// console.log(args);


/****
 * Standard Input
 */

//process.stdin.resume() //waiting for input
//process.stdin.pause() //

//
// process.stdin.on("data", function (data) {
//     console.log(data);
//     process.stdin.pause();
// });
// console.log("input:");
// process.stdin.setEncoding("utf8");
// process.stdin.resume();


/***
 * Command Line Arguments in commander-pluse
 */

// var program = require('commander-plus');
// program
//     .version('10.10.11')
//     .option('-p, --peppers', 'Add peppers')
//     .parse(process.argv);
// console.log(program.peppers);
//

// var program = require('commander-plus');
// program
//     .version('0.0.1')
//     .option('-i, --inter <n>', 'Add int', function (data) {
//         console.log('data:', data);
//     }, 1000)
//     .parse(process.argv);
//


//node commandline.js out.txt -i 10 -f 10.5 -l a,b,c -r 1..10 -o

// var program = require('commander-plus');
// function range(val) {
//     var arr = val.split('..');
//     var r = [];
//     for (var i = (+arr[0]); i < (+arr[1]); i++) {
//         r.push(i);
//     }
//     return r.join(',');
// }
//
// function list(val) {
//     return val.split(',');
// }
//
// program
//     .version('0.0.1')
//     .usage('[options] <file ...>')
//     .option('-i, --integer <n>', 'An integer argument', parseInt)
//     .option('-f, --float <n>', 'A float argument', parseFloat)
//     .option('-r, --range <a>..<b>', 'A range', range)
//     .option('-l, --list <items>', 'A list', list)
//     .option('-o, --optional [value]', 'An optional value')
//     .parse(process.argv);
//
// console.log(' int:', program.integer);
// console.log(' float:', program.float);
// console.log(' optional:', program.optional);
// console.log(' range:', program.range);
// console.log(' list:', program.list);
// console.log(' args:', program.args);

// var program = require('commander-plus');
// program.prompt('name: ', function (name) {
//     program.prompt('version:(1.0.0) ', function (name) {
//         program.prompt('git repository: ', function (name) {
//             program.prompt('license: (MIT)', function (name) {
//                 process.stdin.destroy();
//             });
//         });
//     });
// });

//
//
// program.parse(process.argv);
//
//


// var program = require('commander-plus');
// program.password('Password: ', '*', function (pass) {
//     console.log('got "%s"', pass);
//     process.stdin.destroy();
// });

// program.parse(process.argv);


// var program = require('commander-plus');
// program.confirm('continue? ', function(ok){
//     console.log(' got %j', ok);
// });
// program.parse(process.argv);


// var program = require('commander-plus');
// var list = ['tobi', 'loki', 'jane', 'manny', 'luna'];
// console.log('Choose the coolest pet:');
// program.choose(list, function(i){
//     console.log('you chose %d "%s"', i, list[i]);
// });
//
// program.parse(process.argv);


/***
 * Standard Output
 */

/**
 * https://github.com/nodejs/node-v0.x-archive/blob/master/lib/console.js
 * 1.console.log()
 */



// var util = require("util");
// var name = "Colin";
// var age = 100;
// var format1 = util.format("Hi, my name is %s", name);
// var format2 = util.format("Hi, my name is %d", name);
// var format3 = util.format("Hi, my name is %j", name);
// var format4 = util.format("Hi, my name is %j");
// var format5 = util.format("Hi, my name is %j %j", name, name);
// var format6 = util.format("I'm %s, and I'm %d years old", name, age);
// var format7 = util.format(name, age);
// console.log(format1);
// console.log(format2);
// console.log(format3);
// console.log(format4);
// console.log(format5);
// console.log(format6);
// console.log(format7);

// var util = require('util');
//
// Console.prototype.log = function() { this._stdout.write(util.format.apply(this, arguments) + '\n');
// };

//
// var jsontest = {
//     name: 'richard',
//     id: '100000',
//     birthtime: new Date()
// }
//
//
// console.log('String Data:%s', jsontest);
//
// // //or
// //
// //console.log(`String Data:%s, ${jsontest}`);
// //
// console.log('************************************************************************');
//
// console.log('Integer or floating-point numeric data %d', jsontest);
//
//
// console.log('************************************************************************');
//
// console.log('JSON data %j', jsontest);
//
// console.log('************************************************************************');
//
// console.log('%%',100);


//stdout with a timestamp.
// var util = require("util");
// util.log("baz");
// console.log('baz');
//
//


var util = require("util");// notice:inspect() only recurses through two levels while formatting the object
var obj = {
    foo: {
        bar: {
            baz: {
                baff: false,
                beff: "string value",
                biff: null,
                richardgong: {
                    baff: false,
                    beff: "string value",
                    biff: null,
                    test: {
                        baff: false,
                        beff: "string value",
                        biff: null,
                        aaaa: {
                            baff: false,
                            beff: "string value",
                            biff: null
                        }
                    }

                }
            },
            boff: []
        }
    }
};

// util.inspect(obj)
// console.log(util.inspect(obj));

// console.log(util.inspect(obj, {
//     depth: 4
// }));


//with a Custom inspect() Method

// var util = require("util");
// var obj = {
//     foo: {
//         bar: {
//             baz: {
//                 baff: false,
//                 beff: "string value",
//                 biff: null
//             },
//             boff: []
//         }
//     },
//     inspect: function () {
//         return "richardgong";
//     }
// };
// console.log(util.inspect(obj));
// console.log(obj);


/***
 * Standard Error
 */

//process.stderr.write(data, [encoding], [callback])

// Console.prototype.warn = function() {
//     this._stderr.write(util.format.apply(this, arguments) + '\n');
// };
// Console.prototype.error = Console.prototype.warn;
//
//

/****
 * console.trace()
 */


// (function foo() {
//     (function bar() {
//         (function baz() {
//             console.trace("test-trace");
//         })();
//     })();
// })();


// function myTrace(data) {
//     var err = new Error;
//     err.name = 'Trace';
//     err.message = data;
//     Error.captureStackTrace(err, myTrace);
//     process.stdout.write(err.stack);
// }
//
//
// (function foo() {
//     (function bar() {
//         (function baz() {
//             myTrace('richard.g custom trace');
//         })();
//     })();
// })();

/***
 * Separating stderr and stdout
 */


// console.log("foo");
// console.error("bar");

//node commandline.js > out.txt
//bar
/***
 * this time stdout is redirected to the file output.txt
 using the > operator. Note that redirection has no effect on the stderr stream. The result is that bar, which is sent to
 stderr, is printed in the terminal window, while foo is not.
 */



/***
 * The TTY Interface
 */

// all standard streams provide an isTTY property that is true if the stream is associated with
//     a terminal window.


// console.warn("stdin = " + process.stdin.isTTY);
// console.warn("stdout = " + process.stdout.isTTY);
// console.warn("stderr = " + process.stderr.isTTY);


//node commandline.js > ttyout.txt


//when resize teriminal
// var columns = process.stdout.columns;
// var rows = process.stdout.rows;
// console.log("Size: " + columns + "x" + rows);
//
//
//

// function size() {
//     var columns = process.stdout.columns;
//     var rows = process.stdout.rows;
//     console.log("Size: " + columns + "x" + rows);
// }
// if (!process.stdout.isTTY) {
//     console.error("Not using a terminal window!");
//     process.exit(-1);
// }
// size();
// process.stdout.on("resize", size);
// process.stdin.resume();


/***
 * Signal Events, press:Ctrl+C
 */
//
// process.on("SIGINT", function() {
//     console.log("you press:Ctrl+C");
// });
// process.stdin.resume(); //Stop the program using Ctrl+D.


/***
 * User Environment Variables
 */
// console.log("Original: " + process.env.PATH);
// process.env.PATH = "/some/path:" + process.env.PATH;
// console.log("Updated: " + process.env.PATH);


// var devMode = !!process.env.DEVELOPMENT;
// if (devMode) {
//     console.log("Some useful debugging information");
// }

//DEVELOPMENT=true  node commandline.js
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
//
//     var args = {};
//     for (var i = 0, len = argv.length; i < len; i++) {
//         var arg = argv[i];
//         if (/(\w+)=(\w+)/.test(arg)) {
//             args[RegExp.$1] = RegExp.$2;
//         }
//     }
//     return args;
// }
// var args = parseArgs();
// console.log(args);
//

/***
 * Command Line Arguments in commander
 */

// var commander = require("commander");
// commander
//     .option("-f, --foo <i>", "Integer value for foo", parseInt, 0)
//     .option("-b, --bar [j]", "Integer value for bar", parseInt, 0)
//     .option("-z, --baz", "Boolean argument baz")
//     .parse(process.argv);
//
// console.log(commander.foo);
// console.log(commander.bar);
// console.log(commander.baz);

// process.stdin.once("data", function(data) {
//     var response = data.toString();
//     console.log("You said your name is " + response);
//     process.stdin.pause();
// });
// console.log("What is your name?");
// process.stdin.resume();


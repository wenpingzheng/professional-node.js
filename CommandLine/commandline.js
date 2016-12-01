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
/****
 * Standard Input
 */

//process.stdin.resume() //waiting for input
//process.stdin.pause() //

// process.stdin.once("data", function(data) {
//     console.log("You said your name is " + data);
//     process.stdin.pause();
// });
// console.log("What is your name?");
// process.stdin.setEncoding("utf8");
// process.stdin.resume();

/***
 * Command Line Arguments in commander-pluse
 */

// var program = require('commander-plus');
//
// function range(val) {
//     return val.split('..').map(Number);
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
// console.log(' int: %j', program.integer);
// console.log(' float: %j', program.float);
// console.log(' optional: %j', program.optional);
// console.log(' range: %j..%j', program.range[0], program.range[1]);
// console.log(' list: %j', program.list);
// console.log(' args: %j', program.args);

// var program = require('commander-plus');
// program.on('--help', function(){
//     console.log('  Examples:');
//     console.log('');
//     console.log('    $ custom-help --help');
//     console.log('    $ custom-help -h');
//     console.log('');
// });
//
// program.parse(process.argv);


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
// program.password('Password: ', function(pass){
//     console.log('got "%s"', pass);
//     process.stdin.destroy();
// });
//
// program.parse(process.argv);


// var program = require('commander-plus');
// program.confirm('continue? ', function(ok){
//     console.log(' got %j', ok);
// });
// program.parse(process.argv);


// var program = require('commander-plus');
// var list = ['tobi', 'loki', 'jane', 'manny', 'luna'];
//
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
// var format5 = util.format("Hi, my name is %j", name, name);
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


// var jsontest = {
//     name: 'richard',
//     id: '100000',
//     birthtime: new Date()
// }
//
//
// console.log('String Data:%s', jsontest);
//
// //or
//
// console.log(`String Data:%s, ${jsontest}`);
//
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
//

//stdout with a timestamp.
// var util = require("util");
// util.log("baz");
//
//

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
//     }
// };
// console.log(obj);
// console.log(util.inspect(obj));


var util = require("util");// notice:inspect() only recurses through two levels while formatting the object
var obj = {
    foo: {
        bar: {
            baz: {
                baff: false,
                beff: "string value",
                biff: null
            },
            boff: []
        }
    }
};

util.inspect(obj)
console.log(util.inspect(obj));

console.log(util.inspect(obj, {
    depth: null
}));

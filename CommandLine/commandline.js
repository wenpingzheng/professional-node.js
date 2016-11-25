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
 * Command Line Arguments in commander-pluse
 */

var program = require('commander-plus');

function range(val) {
    return val.split('..').map(Number);
}

function list(val) {
    return val.split(',');
}

program
    .version('0.0.1')
    .usage('[options] <file ...>')
    .option('-i, --integer <n>', 'An integer argument', parseInt)
    .option('-f, --float <n>', 'A float argument', parseFloat)
    .option('-r, --range <a>..<b>', 'A range', range)
    .option('-l, --list <items>', 'A list', list)
    .option('-o, --optional [value]', 'An optional value')
    .parse(process.argv);

console.log(' int: %j', program.integer);
console.log(' float: %j', program.float);
console.log(' optional: %j', program.optional);
program.range = program.range || [];
console.log(' range: %j..%j', program.range[0], program.range[1]);
console.log(' list: %j', program.list);
console.log(' args: %j', program.args);


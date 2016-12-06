/****************************
 * Overview
 */
// console.log({"foo": "bar"});
// console.log(new Buffer("{foo: 'bar'}"));
// //<buffer 7b 22 66 6f 6f 22 3a 20 22 62 61 72 22 7d>
// console.log(String.fromCharCode(0x7b, 0x22, 0x66, 0x6f, 0x6f, 0x22, 0x3a, 0x20, 0x22, 0x62, 0x61, 0x72, 0x22, 0x7d));//{"foo": "bar"}
//
// var chinese = new Buffer('中')
// //<Buffer e4 b8 ad>
// console.log(chinese.toString());//中

/**
 * Endianness
 */

// var os = require("os");
// console.log(os.endianness());


/*******************************
 * function ArrayBuffer(length) {}
 @param {number} length
 @constructor
 ArrayBuffer is very similar to working with a normal array
 */


// var a = new ArrayBuffer(1);
// a[0] = 'riaaa'
// a[1] = 'riaaa'
// a[2] = 'riaaa'
//
// console.log(a.byteLength,'aa',a);

//a.push('aaa')

/**
 * ArrayBuffer.prototype.slice = function(start(inclusive),[end(exclusive])) {};
 @default extraact one item
 @param {number} start
 @param {number} end
 @return {ArrayBuffer}
 usage:extract a new ArrayBuffer from an existing
 */

// var foo = new ArrayBuffer(4);
// foo[0] = 0;
// foo[1] = 1;
// foo[2] = 2;
// foo[3] = 3;
// console.log(foo.slice(2, 4));
// console.log(foo.slice(2, foo.byteLength));
// console.log(foo.slice(2));
// console.log(foo.slice(-2));
// console.log(foo);


// var foo = new ArrayBuffer(4);
// var bar;
// foo[0] = 0;
// foo[1] = 1;
// foo[2] = 2;
// foo[3] = 3;
// // Create a copy of foo and modify it
// bar = foo.slice(0);
// bar[0] = 0xc;
// console.log(foo);
// console.log(bar);


/**
 * ArrayBuffer Views
 */











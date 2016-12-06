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
//
// var buf = new ArrayBuffer(8);
// var view = new Uint32Array(buf);
// view[0] = 100;
// view[1] = 10000000000;
// console.log(view);


// var buf = new ArrayBuffer(4);
// var view1 = new Uint32Array(buf);
// var view2 = new Uint8Array(buf);
// // write to view1 and print the value
// view1[0] = 0;
// console.log("Uint32 = " + view1[0]);
// // write to view2 and print view1's value
// view2[1] = 2;
//
// console.log("Uint32 = " + view1[0]);


// var buf = new ArrayBuffer(5);
// var view = new Int32Array(buf, 0, 1);
// view[0] = 256;
// buf[4] = 5;
// console.log(view[0]);


// // 创建16个字节的内存，1字节=8位2进制
// var buffer = new ArrayBuffer(16);
// // 用32位的类型来绑定该内存区域，32位，每个变量是4个字节
// var int32View = new Float32Array(buffer);
// // 此时长度为4：4个int32类型，则4*4 = 16字节
// for (var i=0; i<int32View.length; i++) {
//     int32View[i] = i; // 对每一个int32的变量赋值
// }
//



var buf1 = new Buffer('1234');
var buf2 = new Buffer('567');
var bufList = [buf1, buf2];
var buf3 = Buffer.concat(bufList);
console.log('buf3 - %s', buf3.toString());
var buf4 = buf3.slice(3, 8);
console.log('buf4 - %s', buf4.toString());
var buf5 = new Buffer(5);
buf3.copy(buf5, 0, 1);
console.log('buf5 - %s', buf5.toString());



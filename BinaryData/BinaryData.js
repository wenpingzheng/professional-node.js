/****************************************************************************************
 * The Buffer class is a global type for dealing with binary data directly. It can be constructed in a variety of ways:
 *
 * <i><code>new Buffer(size)</code></i> - Allocates a new buffer of <i><code>size</i></code> octets.
 * <i><code>new Buffer(array)</code></i> - Allocates a new buffer using an <i><code>array</code></i> of octets.
 * <i><code>new Buffer(str, [encoding])</code></i> - Allocates a new buffer containing the given <i><code>str</code></i>. <i><code>encoding</code></i> defaults to <i><code>'utf8'</code></i>.
 *
 * See <a href="http://nodejs.org/api/buffer.html">http://nodejs.org/api/buffer.html</a> for more information.
 *
 * @constructor
 * @this {Buffer}
 * @param {Number|Array|String} obj size of octets (Number) | array of octets (Array) | string to encode (String)
 * @param {String?} encoding encoding to use if the first parameter type is string
 */
// var buffer = new Buffer(8);
// console.log(buffer.toString());
// var buffer = new Buffer([8, 6, 7, 5, 3, 0, 9]);
// console.log(buffer);
// var buffer = new Buffer("I'm a string!", "utf-8")
// console.log(buffer);
// console.log(String.fromCharCode(73/* 0x49=73 */));


/**
 * Writes <i><code>string</code></i> to the buffer at <i><code>offset</code></i> using the given encoding.
 * @param {String} string data to be written to buffer
 * @param {Number?} [offset=0] start buffer position
 * @param {Number?} [length=buffer.length-offset] the number of bytes to write
 * @param {String?} [encoding='utf8'] data to be written to buffer
 * @returns {Number} number of octets written
 * Buffer.prototype.write = function(string, offset, length, encoding) {

    };
 */
// buf = new Buffer(256);
// len = buf.write('\u00bd + \u00bc = \u00be', 0);
// console.log(len + " bytes: " + buf.toString());
// console.log(len + " bytes: " + buf.toString('utf8'));
// console.log(len + " bytes: " + buf.toString('utf8', 0, 2));
// console.log(len + " bytes: " + buf.toString('utf8', 0, len));


/**
 * Fills the buffer with the specified value. If the <i><code>offset</code></i> and <i><code>end</code></i> are not given it will fill the entire buffer.
 * @param {Number|String} value (if it's string, the first char code is used)
 * @param {Number?} [offset=0] start buffer offset
 * @param {Number?} [end=this.length] end buffer offset
 * Buffer.prototype.fill = function(value, offset, end) {
};
 */
// buf = new Buffer(256);
// buf.fill(0);
// len = buf.write('\u00bd + \u00bc = \u00be', 0);
// console.log(len + " bytes: " + buf.toString());
// console.log(len + " bytes: " + buf.toString('utf8'));
// console.log(len + " bytes: " + buf.toString('utf8', 0, 2));
// console.log(len + " bytes: " + buf.toString('utf8', 0, len));

// var buf = new Buffer(8);
// buf.fill(0)
// buf.writeDoubleLE(3.14, 0,true);
// var value = buf.readDoubleLE(0);
// console.log(value,buf.toString());

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




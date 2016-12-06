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
//var bu = new Buffer();//error
// var buffer = new Buffer(8);
// console.log(buffer.toString());
// var buffer = new Buffer([8, 6, 7, 5, 3, 0, 9]);
// console.log(buffer);
// var buffer = new Buffer("I'm a string!", "utf-8")
// console.log(buffer);
// console.log(String.fromCharCode(73/* 0x49=73 */));

/**
 * @static
 * @param {Object} obj Object
 * @returns {Boolean} true if <i><code>obj</code></i> is a <i><code>Buffer</code></i>
 * Buffer.isBuffer = function(obj) {};
 */
// var buf = new Buffer(5);
// console.log(Buffer.isBuffer(buf));

/**
 * Gives the actual byte length of a string. This is not the same as
 * <i><code>String.prototype.length</code></i> since that returns the number of characters in a string.
 *
 * @static
 * @param {String} string String object
 * @param {String?} [encoding='utf8'] Encoding
 * @returns {Number}  the actual byte length of a string
 * Buffer.byteLength = function(string, encoding) {}
 */
// var byteLength = Buffer.byteLength("foo");
// var length = (new Buffer("foo")).length;
// console.log(byteLength);
// console.log(length);


/**
 * Writes <i><code>string</code></i> to the buffer at <i><code>offset</code></i> using the given encoding.
 * @param {String} string data to be written to buffer
 * @param {Number?} [offset=0] start buffer position
 * @param {Number?} [length=buffer.length-offset] the number of bytes to write
 * @param {String?} [encoding='utf8'] data to be written to buffer
 * @returns {Number} number of octets written
 * Buffer.prototype.write = function(string, offset, length, encoding) {}
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
 * Buffer.prototype.fill = function(value, offset, end) {}
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


/**
 * Returns a new buffer which references the same memory as the old, but offset and cropped by the <i><code>start</code></i>
 * and <i><code>end</code</i> indexes. Negative indexes start from the end of the buffer.
 * <b>Modifying the new buffer slice will modify memory in the original buffer!</b>
 *
 * @param {Number?} [start=0]
 * @param {Number?} [end=this.length]
 * @returns {Buffer}
 * Buffer.prototype.slice = function(start, end) {}
 */
// var buf1 = new Buffer(256);
// buf1.fill(0)
// var buf2 = buf1.slice();
// console.log(buf2);
// var buf3 = buf1.slice(250);
// console.log(buf3);
//
// var buf4 = buf1.slice(250, 253);
// console.log(buf4);

/**
 * Does copy between buffers. The source and target regions can be overlapped.
 * All values passed that are undefined/NaN or are out of bounds are set equal to their respective defaults.
 *
 * @param {Buffer} targetBuffer Buffer to copy into
 * @param {Number?} [targetStart=0] start offset in <i><code>targetBuffer</code></i>
 * @param {Number?} [sourceStart=0] start offset in <i><code>this buffer</code></i>
 * @param {Number?} [sourceEnd=this.length] end offset in <i><code>this buffer</code></i>
 * Buffer.prototype.copy = function(targetBuffer, targetStart, sourceStart, sourceEnd) {}
 */
//
// var buf1 = new Buffer(20);
// var buf2 = new Buffer(18);
// var buf3 = new Buffer(18);
// buf1.copy(buf2);
// console.log(buf2);
//
// buf1.copy(buf3,8);
// console.log(buf3);


// var buf1 = new Buffer([1, 2, 3, 4]);
// var buf2 = new Buffer(4);
// buf1.copy(buf2, 0, 0, buf1.length);
//
// console.log(buf2);

/**
 * Returns a buffer which is the result of concatenating all the buffers in the list together.
 * If the list has no items, or if the <i><code>totalLength</code></i> is 0, then it returns a zero-length buffer.
 * If the list has exactly one item, then the first item of the list is returned.
 * If the list has more than one item, then a new Buffer is created.
 * If <i><code>totalLength</code></i> is not provided, it is read from the buffers in the list. However, this adds an additional loop to the function, so it is faster to provide the length explicitly.
 *
 * @static
 * @param {Array} list List of Buffer objects to concat
 * @param {Number?} totalLength Total length of the buffers when concatenated
 * @returns {Buffer}
 * Buffer.concat = function(list, totalLength) {}
 */

// var buf1 = new Buffer([1, 2]);
// var buf2 = new Buffer([3, 4]);
// var buf = Buffer.concat([buf1, buf2]);
// console.log(buf);

// var buf1 = new Buffer([1, 2]);
// var buf2 = new Buffer([3, 4]);
// var buf = Buffer.concat([buf1, buf2],3);
// console.log(buf);




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




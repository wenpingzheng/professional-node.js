/*******************************
 * function ArrayBuffer(length) {}
 @param {number} length
 @constructor
 ArrayBuffer is very similar to working with a normal array
 */

var a = new ArrayBuffer(1);//number only
a[0] = 'riaaa' //property only
a[1] = 'riaaa'
a[2] = 'riaaa'

//a.push('aaa')//error

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
// var foo1 = foo.slice(0);
// console.log(foo);
// console.log(foo1);
//console.log(foo.slice(2, 4));
// console.log(foo.slice(2, foo.byteLength));
// console.log(foo.slice(2));
//console.log(foo.slice(-2));


// var foo = new ArrayBuffer(4);
// var bar;
// foo[0] = 0;
// foo[1] = 1;
// foo[2] = 2;
// foo[3] = 3;
// // Create a copy of foo and modify it,it will not copy the modifty data
// bar = foo.slice(0);
// bar[0] = 0xc;
// console.log(foo);
// console.log(bar);




// var foo = new ArrayBuffer(4);
// foo[0] = 0;
// foo[1] = 1;
// foo[2] = 2;
// foo[3] = 3;
// var foo1 = foo.slice(0);
//
// //e.g:not shares memory
// console.log(foo1);
// var view1 = new Int8Array(foo);
// view1[0] = 50;
// var view2 = new Int8Array(foo1);//not shares buffer
// console.log(view1[0], view2[0]);



/**
 * ArrayBuffer Views
 */

// var buf = new ArrayBuffer(3);
// var view = new Uint8Array(buf);
// view[0] = '10';//number only
// view[1] = 271;//1 0000 1111
// console.log(view);//100,15

/***
 * share buffer issue:
 *
 @param bufferOrArrayOrLength
 @param {number} [byteOffset]
 @param {number} [length]
 @constructor
 function Int32Array(bufferOrArrayOrLength,byteOffset,length) {}
 */

// var buf = new ArrayBuffer(4);
// var view1 = new Uint32Array(buf);
// var view2 = new Uint8Array(buf);
// view1[0] = 100;
// console.log(view1[0]);//100
// view2[1] = 1;
// console.log(view1[0]);//356


// var buf = new ArrayBuffer(5);
// var view = new Int32Array(buf, 0, 1);
// view[0] = 2560;
// buf[4] = 5;
// console.log(view,view[0]);


// var arraybuffer = new ArrayBuffer(30);
//
// var aView = new Int16Array(arraybuffer,0,4);    //占用0-7  8
//
// var bView = new Float32Array(arraybuffer,8,5);  //占用8-27
//
// var cView = new Uint8Array(arraybuffer,28,4)    //仅剩4个,报错Invalid typed array length


// var arraybuffer = new ArrayBuffer(4);
//
// var aView = new Int8Array(arraybuffer);  //从0开始到内存末尾
//
// var bView = new Int16Array(arraybuffer,2); //从2开始到末尾
//
// aView[0] = 1;
// aView[1] = 2;
// aView[2] = 3;
// aView[3] = 4;
//
// bView[0] = 500;
// bView[1] = 8;
//
// console.log(aView[2] );      //return   -12
// console.log(aView[3] );      //return   1
// console.log(bView[1]);
//


/*************************************
 * Creating an Empty View
 */

// var view = new Int8Array(2);
// view[0]= 1000;

/**
 * http://www.99cankao.com/numbers/twos-complement.php
 * -24 = 1110 1000
 * 1000=0011 1110 1000
 * @type {number}
 */
//console.log(view);//-24 0

/********************************
 * Creating a View from Data Values
 */
// var buf = new ArrayBuffer(4);
// var view1 = new Int8Array(buf);
// var view2 = new Uint32Array(view1);
// console.log(buf.byteLength); // 4
// console.log(view1.byteLength,view1); // 4
// console.log(view2.byteLength,view2); // 16
// a 4-byte ArrayBuffer is used to create an Int8Array view containing four numbers.
// The Int8Array view is then used to create a new Uint32Array view. The Uint32Array also contains four numbers,
// corresponding to the data in the Int8Array view. However, its underlying ArrayBuffer is 16 bytes long instead of 4.

/**********************************
 * View Properties
 */
/***
 * byteLength
 */
// var buf = new ArrayBuffer(10);
// var view = new Int16Array(buf, 0, 2);
// console.log(buf.byteLength);
// console.log(view.byteLength);

/***
 * Length
 */

// var view = new Int32Array([5, 10]);
// console.log(view.length);
//
// var view = new Int32Array([5, 10]);
// for (var i = 0, len = view.length; i < len; i++) {
//     console.log(view[i]);
// }


/***
 * byteOffset
 * This value is always 0, unless an offset was passed in as the second argument to the constructor
 */

// var buf = new ArrayBuffer(10);
// var view = new Int16Array(buf, 6, 2);
// console.log(view.byteOffset);


/****************************************************************************************
 * Node Buffers
 *
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
// var buffer = new Buffer(100);
// console.log(buffer.toString());
// var buffer = new Buffer([15, 6, 7, 5, 3, 0, 9]);
// console.log(buffer);
// var buffer = new Buffer("I'm a string!", "utf-8")
// console.log(buffer);
//console.log(String.fromCharCode(73/* 0x49=73 */));

/**
 * toString()
 * @type {String}
 */

// var buf = new Buffer("foo");
// console.log(buf.toString());

/**
 * toJSON()
 * @type {String}
 */

// var buf = new Buffer("foo");
// console.log(buf);
// console.log(0x66);
// console.log(buf.toJSON());
// console.log(JSON.stringify(buf));


/**
 * @static
 * @param {String} encoding The encoding string to test
 * @returns {Boolean} true if the <i><code>encoding</code</i> is a valid encoding argument, or false otherwise.
 * Buffer.isEncoding = function(encoding) {return true;}
 */

// console.log(Buffer.isEncoding("utf8"));
// console.log(Buffer.isEncoding("foo"));


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
//

/**
 * Fills the buffer with the specified value. If the <i><code>offset</code></i> and <i><code>end</code></i> are not given it will fill the entire buffer.
 * <pre><code>
 *   var b = new Buffer(50);
 *   b.fill("h");
 * </code></pre>
 *
 * @param {Number|String} value (if it's string, the first char code is used)
 * @param {Number?} [offset=0] start buffer offset
 * @param {Number?} [end=this.length] end buffer offset
 Buffer.prototype.fill = function(value, offset, end) {}
 */

//  var buf = new Buffer(1024);
// console.log(buf.toString());

// var buf = new Buffer(1024);
// buf.fill('ra');
// console.log(buf.toString());

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

// var buf = new Buffer(9);
// var data = "foo";
// buf.write(data);
// buf.write(data, 3);
// buf.write(data, 6, data.length);
// console.log(buf.length);

/**
 * writeDoubleLE
 */
/**
 * writeDoubleLE <i><code>value</code></i> to the buffer at the specified offset with specified endian format. Note, behavior is unspecified if <i><code>value</code></i> is not a 64 bit double.
 * Set noAssert to true to skip validation of value and offset. This means that value may be too large for the specific function and offset may be beyond the end of the buffer leading to the values being silently dropped. This should not be used unless you are certain of correctness. Defaults to false.
 *
 * @param {Number} value a 64 bit double
 * @param {Number} offset buffer offset
 * @param {Boolean?} [noAssert=false] true, if validation should be skipped
 * Buffer.prototype.writeDoubleLE = function(value, offset, noAssert) {}
 */
// var buf = new Buffer(16);
// buf.writeDoubleLE(1, 2, true);
// console.log(buf);

// var buf = new Buffer(16);
// buf.writeDoubleLE(1, 17, false);
// console.log(buf);
// var buf = new Buffer(16);
// buf.writeDoubleLE(1, 17, true);
// console.log(buf);


/*****************************************************************
 *Reading Numeric Data
 */
//
// var buf = new Buffer(32);
// var value;
// buf.writeDoubleLE(3.14, 1);
// value = buf.readDoubleLE(1);
// console.log(value);


/**
 * Returns a new buffer which references the same memory as the old, but offset and cropped by the <i><code>start</code></i>
 *
 * and <i><code>end</code</i> indexes. Negative indexes start from the end of the buffer.
 * <b>Modifying the new buffer slice will modify memory in the original buffer!</b>
 *
 * @param {Number?} [start=0]
 * @param {Number?} [end=this.length]
 * @returns {Buffer}
 * Buffer.prototype.slice = function(start, end) {return null}
 *
 * The slice() method returns a new Buffer that shares memory with the original Buffer. In other words, updates
 to the new Buffer affect the original, and vice versa
 */

// var buf1 = new Buffer(4);
// var buf2 = buf1.slice(0, 2);
// console.log(buf2);
//
// buf2[0] = 100;//shares memory
// console.log(buf1[0],buf2[0]);//affect shares meory


/**
 * Does copy between buffers. The source and target regions can be overlapped.
 * All values passed that are undefined/NaN or are out of bounds are set equal to their respective defaults.
 *
 * @param {Buffer} targetBuffer Buffer to copy into
 * @param {Number?} [targetStart=0] start offset in <i><code>targetBuffer</code></i>
 * @param {Number?} [sourceStart=0] start offset in <i><code>this buffer</code></i>
 * @param {Number?} [sourceEnd=this.length] end offset in <i><code>this buffer</code></i>

 Buffer.prototype.copy = function(targetBuffer, targetStart, sourceStart, sourceEnd) {}
 */

// var buf1 = new Buffer([1, 2, 3, 4]);
// var buf2 = new Buffer(4);
// buf1.copy(buf2, 0, 0, buf1.length);
// console.log(buf2);
// //buf1 | buf2



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

 Buffer.concat = function(list, totalLength) {
    return null;
};
 */

// var buf1 = new Buffer([1, 2]);
// var buf2 = new Buffer([3, 4]);
// var buf = Buffer.concat([buf1, buf2]);
//console.log(buf);
// buf[0] = 55;
// console.log(buf1[0]);
// console.log(buf[3]);


/*************************************************
 * Typed Array Compatibility
 */

// var buf = new Buffer(4);
// var view;
// buf.fill(0);
// view = new Uint32Array(buf);
// console.log(buf);
// console.log(view);


// var view = new Uint32Array([257]);
// var buf = new Buffer(view);
// console.log(buf);



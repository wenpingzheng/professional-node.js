/**
 * Created by richard.g on 18/11/2016.
 */

function sleep(time) {
    var now = new Date();
    var end = new Date();
    while ((end - now) < time) {
        end = new Date();
    }
}

/**
 * setTimeout
 * @type {*}
 */

// setTimeout(function(foo, bar) {
//     console.log(foo + " " + bar);
// },0,'a','b');
//

// var timeoutId = setTimeout(function() {
//     console.log("In timeout function");
// }, 0);
//
// console.log('starting....');
// sleep(2000);

//clearTimeout(timeoutId);


// var timeoutId = null;
// for (var i = 0; i < 3; i++) {
//     clearTimeout(timeoutId);
//     timeoutId =setTimeout(function () {
//         console.log("In timeout function");
//     }, 0);
// }
// clearTimeout(timeoutId);


// var timeoutId = null;
// var time = [];
// for (var i = 0; i < 3; i++) {
//     time.push(setTimeout(function () {
//         console.log("In timeout function");
//     }, 0));
// }
//
// for (var i = 0; i < time.length; i++) {
//     clearTimeout(time[i]);
// }


/**
 *setInterval
 */

// var intervalId = setInterval(function (a, b) {
//     console.log(a, b);
// }, 1000, 'aaa', 'bbb');

// var intervalId = setInterval(function() {
//     console.log("In interval function");
// }, 1000);
// clearInterval(intervalId);


/**
 * The ref() and unref() Methods, A timer or interval that is the only item remaining in the event loop will prevent the program from terminating.
 */
//
//1. cancel timer
// var intervalId = setTimeout(function () {
//     console.log("In interval function");
// }, 0);
//
// intervalId.unref();


//
//
// //2. restore timer

// var intervalId = setTimeout(function () {
//     console.log("In interval function ref");
// }, 0);
//
// intervalId.unref();
// sleep(2000);
// intervalId.ref();


//3.never stop, =>because it not only item remaining in the event loop

// var timer = setInterval(function () {
//     console.log(new Date, "**************************")
// }, 1000)
//
//
// var timer2 = setInterval(function () {
//     console.log(new Date, "=========================")
// }, 1000)
//
// timer2.unref()

/**
 * Immediates
 *
 */

// var immediateId = setImmediate(function (a, b, c) {
//     console.log(a, b, c);
// }, 1000, '1111', 'bbbb');
// setTimeout(function (a, b, c) {
//     console.log(a, b, c);
// }, 0, 1000, '1111', 'bbbb');


// var immediateId = setImmediate(function() {
//     console.log("In immediate function");
// });
// console.log('starting.....');
// sleep(3000);


// var immediateId = setImmediate(function() {
//     console.log("In immediate function");
// });
//
// console.log('bbbbb');


// setTimeout(function () {
//     console.log('setTimeout');
// }, 0)
//
// process.nextTick(function () {
//     console.log('process.nextTick');
// });
//
// setImmediate(function () {
//     console.log('setImmediate');
// });
//
//
// nextTick > setTimeout > setImmediate

/**
 * single thread
 */

// console.log('主线程。。。。开始');
// setTimeout(function () {
//     console.log('setTimeout开始。。。');
//     console.log('setTimeout结束。。。');
// }, 0);
//
// sleep(2000);
//
// console.log('主线程结束。。。。');


/**
 * timer is not safe
 */

// var a = new Date();
// setInterval(function () {
//     var b = new Date();
//     console.log('setInterval-----:', a - b);
//     sleep(5000);
// }, 1000);











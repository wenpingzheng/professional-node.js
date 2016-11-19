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
// }, 1000, "foo", "bar");

// var timeoutId = setTimeout(function() {
//     console.log("In timeout function");
// }, 1000);
//
// clearTimeout(timeoutId);


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
//     console.log("In interval function");
// }, 10);
//
// intervalId.unref();
// sleep(2000);
// intervalId.ref();

// //3. cancel timer

// var intervalId = setTimeout(function () {
//     console.log("In interval function");
// }, 10);
//
// intervalId.unref();
// sleep(2000);
// intervalId.ref();

//3.never stop, =>because it not only item remaining in the event loop
// var timer = setInterval(function () {
//     console.log(new Date, 1)
// }, 1000)
//
//
// var timer2 = setInterval(function () {
//     console.log(new Date, 2)
// }, 1000)
//
// timer2.unref()

/**
 * Immediates
 *
 */
// var immediateId = setImmediate(function() {
//     console.log("In immediate function");
// });

// var immediateId = setImmediate(function() {
//     console.log("In immediate function");
// });
// clearImmediate(immediateId);

// var immediateId = setImmediate(function() {
//     console.log("In immediate function");
// });
//
// console.log('bbbbb');


/**
 * single thread
 */








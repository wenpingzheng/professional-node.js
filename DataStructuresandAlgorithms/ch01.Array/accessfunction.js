/**
 * Created by richard on 2/13/17.
 */
var print = console.log;
/**
 *1.Searching for a Value
 *key word:  indexOf,lastIndexOf
 */
//
// var names = ["aaa", "bbb", "ccc", "ddd", "eee","ccc"];
// var name = 'ccc';
//
// var firstPos = names.indexOf(name);
// console.log("First found " + name + " at position " + firstPos);
//
// var lastPos = names.lastIndexOf(name);
//
// console.log("Last found " + name + " at position " + lastPos);
//

/**
 * 2.Adding Elements to an Array
 * key world:push(),unshift()
 */
//
// var nums = [1,2,3,4,5];
// console.log(nums);
// nums.push(6);
// console.log(nums);

//===============================================================================================================================================================================

// var nums = [1,2,3,4,5];
// print(nums); // 1,2,3,4,5
// nums[nums.length] = 6;
// print(nums); // 1,2,3,4,5,6

//===============================================================================================================================================================================

// var nums = ["aaa", "bbb", "ccc"];
//
// for (var i = nums.length; i >= 0; --i)
//     nums[i] = nums[i - 1];
//
// print(nums);
//
// nums[0] = 'aaaa';
// print(nums);
//

//===============================================================================================================================================================================
//
// var nums = ["aaa", "bbb", "ccc"];
// print(nums);
// nums.unshift('test');
// print(nums);


/**
 * Removing Elements from an Array
 * key word: pop,shift
 */

// var nums = [1,2,3,4,5,9];
//
// print(nums)
// nums.pop();
// print(nums); // 1,2,3,4,5

//===============================================================================================================================================================================
//var arr = [1,2,3];

// //0,
// arr = [];
//1.
//arr.splice(0);
//2.
// arr.length = 0;

// Array.prototype.myPop = function () {
//     var last = this[this.length - 1];
//     --this.length;
//     return last;
// };

// Array.prototype.myPopV2 = function () {
//     var last = this[this.length - 1];
//     delete  this[this.length - 1];
//     --this.length;
//     return last;
// };
//
// var nums = [1, 2, 3, 4, 5, 9];
// print(nums);
// nums.myPop();
// print(nums); // 1,2,3,4,5,
//

//===============================================================================================================================================================================

// var nums = [9,1,2,3,4,5];
// nums.shift();
// print(nums); // 1,2,3,4,5
//
//

//===============================================================================================================================================================================

// Array.prototype.myShift = function () {
//     var first = this[0];
//     for (var i = 0; i < this.length - 1; i++)
//         this[i] = this[i + 1];
//
//     --this.length;
//     return first;
// }
//
// var nums = [9,1,2,3,4,5];
// nums.myShift();
// print(nums);
//
//







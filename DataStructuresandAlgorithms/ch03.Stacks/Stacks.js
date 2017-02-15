/**
 * Created by richard on 2/13/17.
 */

class Stack {
    constructor() {
        this.dataStore = [];
        this.top = 0;
    }

    push(element) {
        this.dataStore[this.top++] = element;
    }

    pop() {
        return this.dataStore[--this.top];
    }

    peek() {
        return this.dataStore[this.top - 1];
    }

    length() {
        return this.top;
    }

    clear() {
        this.top = 0;
    }

}

var print = console.log;
//
// var s = new Stack();
// s.push("David");
// s.push("Raymond");
// s.push("Bryan");
//
// print("length: " + s.length());
//
// print(s.peek());
// var popped = s.pop();
// print("The popped element is: " + popped);
// print(s.peek());
// s.push("Cynthia");
// print(s.peek());
// s.clear();
// print("length: " + s.length());
// print(s.peek());
// s.push("Clayton");
// print(s.peek());
//

//======================================================================================================================================================

// function mulBase(num, base) {
//     var s = new Stack();
//     do {
//         s.push(num % base);
//         num = Math.floor(num /= base);
//     } while (num > 0);
//     var converted = "";
//     while (s.length() > 0) {
//         converted += s.pop();
//     }
//     return converted;
// }
//
// var num = 2;
// var base = 2;
// var newNum = mulBase(num, base);
// print(num + " converted to base " + base + " is " + newNum);
// num = 10;
// base = 8;
// var newNum = mulBase(num, base);
// print(num + " converted to base " + base + " is " + newNum);
//

/**
 * Created by richard on 2/13/17.
 */
class Queue {
    constructor() {
        this.dataStore = [];
    }

    enqueue(element) {
        this.dataStore.push(element);
    }

    dequeue() {
        return this.dataStore.shift();
    }

    front() {
        return this.dataStore[0];
    }

    back() {
        return this.dataStore[this.dataStore.length - 1];
    }

    toString() {
        var retStr = "";
        this.dataStore.forEach((v) => retStr += v);
        return retStr;
    }

    empty() {
        return this.dataStore.length == 0;
    }
}

var print = console.log;
// var q = new Queue();
// q.enqueue("Meredith");
// q.enqueue("Cynthia");
// q.enqueue("Jennifer");
//
// print(q.toString());
// q.dequeue();
// print(q.toString());
// print("Front of queue: " + q.front());
// print("Back of queue: " + q.back());
//


//================================================================================================================================================================================================================================================

// function Dancer(name, sex) {
//     this.name = name;
//     this.sex = sex;
// }
//
// function getDancers(males, females) {
//     var names = `F Allison McMillan$M Frank Opitz$M Mason McMillan$M Clayton Ruff$F Cheryl Ferenback$M Raymond Williams$F Jennifer Ingram$M Bryan Frazer$M David Durr$M Danny Martin$F Aurora Adney`.split("$");
//     for (var i = 0; i < names.length; ++i) {
//         names[i] = names[i].trim();
//     }
//     for (var i = 0; i < names.length; ++i) {
//         var dancer = names[i].split(" ");
//         var sex = dancer[0];
//         var name = dancer[1];
//         if (sex == "F") {
//             femaleDancers.enqueue(new Dancer(name, sex));
//         }
//         else {
//             maleDancers.enqueue(new Dancer(name, sex));
//         }
//     }
// }
//
// function dance(males, females) {
//     print("The dance partners are: \n");
//     while (!females.empty() && !males.empty()) {
//         person = females.dequeue();
//         print("Female dancer is: " + person.name);
//         person = males.dequeue();
//         print(" and the male dancer is: " + person.name);
//     }
//     print();
// }
//
//
// var maleDancers = new Queue();
// var femaleDancers = new Queue();
// getDancers(maleDancers, femaleDancers);
// dance(maleDancers, femaleDancers);
// if (!femaleDancers.empty()) {
//     print(femaleDancers.front().name + " is waiting to dance.");
// }
// if (!maleDancers.empty()) {
//     print(maleDancers.front().name + " is waiting to dance.");
// }

//================================================================================================================================================
// function distribute(nums, queues, n, digit) {
//     for (var i = 0; i < n; ++i) {
//         if (digit == 1) {
//             queues[nums[i] % 10].enqueue(nums[i]);
//         }
//         else {
//             queues[Math.floor(nums[i] / 10)].enqueue(nums[i]);
//         }
//     }
// }
// function collect(queues, nums) {
//     var i = 0;
//     for (var digit = 0; digit < 10; ++digit) {
//         while (!queues[digit].empty()) {
//             nums[i++] = queues[digit].dequeue();
//         }
//     }
// }
// function dispArray(arr) {
//     var putstr = '';
//
//     for (var i = 0; i < arr.length; ++i) {
//         putstr += (arr[i] + " ");
//     }
//     return putstr;
// }
// // main
//
//
// var queues = [];
// for (var i = 0; i < 10; ++i) {
//     queues[i] = new Queue();
// }
// var nums = [];
// for (var i = 0; i < 10; ++i) {
//     nums[i] = Math.floor(Math.floor(Math.random() * 101));
// }
// print("Before radix sort: ");
// console.log(dispArray(nums));
// distribute(nums, queues, 10, 1);
// collect(queues, nums);
// distribute(nums, queues, 10, 10);
// collect(queues, nums);
//
// console.log(nums);
//
//


//================================================================================================================================================


function Patient(name, code) {
    this.name = name;
    this.code = code;
}


function dequeue() {
    var priority = this.dataStore[0].code;
    for (var i = 1; i < this.dataStore.length; ++i) {
        if (this.dataStore[i].code < priority) {
            priority = i;
        }
    }
    return this.dataStore.splice(priority, 1);
}


function toString() {
    var retStr = "";
    for (var i = 0; i < this.dataStore.length; ++i) {
        retStr += this.dataStore[i].name + " code: "
            + this.dataStore[i].code + "\n";
    }
    return retStr;
}

var p = new Patient("Smith", 5);
var ed = new Queue();
ed.enqueue(p);
p = new Patient("Jones", 4);
ed.enqueue(p);
p = new Patient("Fehrenbach", 6);
ed.enqueue(p);
p = new Patient("Brown", 1);
ed.enqueue(p);
p = new Patient("Ingram", 1);
ed.enqueue(p);
print(ed.toString());
var seen = ed.dequeue();
print("Patient being treated: " + seen.name);
print("Patients waiting to be seen: ")
print(ed.toString());
// another round
var seen = ed.dequeue();
print("Patient being treated: " + seen.name);
print("Patients waiting to be seen: ")
print(ed.toString());
var seen = ed.dequeue();
print("Patient being treated: " + seen.name);

print("Patients waiting to be seen: ")
print(ed.toString());


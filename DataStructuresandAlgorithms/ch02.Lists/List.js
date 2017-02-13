'use strict'

class List {
    constructor() {
        this.listSize = 0;
        this.pos = 0;
        this.dataStore = [];
    }

    append(element) {
        this.dataStore[this.listSize++] = element;
    }

    front() {
        this.pos = 0;
    }

    prev() {
        if (this.pos > -1) {
            --this.pos;
        }
    }

    next() {
        if (this.pos < this.listSize) {
            ++this.pos;
        }
    }

    currPos() {
        return this.pos;
    }

    moveTo(position) {
        this.pos = position;
    }

    getElement() {
        return this.dataStore[this.pos];
    }

    find(element) {
        for (var i = 0; i < this.dataStore.length; ++i) {
            if (this.dataStore[i] == element) {
                return i;
            }
        }
        return -1;
    }

    end() {
        this.pos = this.listSize - 1;
    }

    remove(element) {
        var foundAt = this.find(element);
        if (foundAt > -1) {
            this.dataStore.splice(foundAt, 1);
            --this.listSize;
            return true;
        }
        return false;
    }

    insert(element, after) {
        var insertPos = this.find(after);
        if (insertPos > -1) {
            this.dataStore.splice(insertPos + 1, 0, element);
            ++this.listSize;
            return true;
        }
        return false;
    }

    toString() {
        return this.dataStore;
    }

    length() {
        return this.listSize;
    }

    clear() {
        delete this.dataStore;
        this.dataStore = [];
        this.listSize = this.pos = 0;
    }

    contains(element) {
        for (var i = 0; i < this.dataStore.length; ++i) {
            if (this.dataStore[i] == element) {
                return true;
            }
        }
        return false;
    }

}



//1. remove data
// var names = new List();
// names.append(1);
// names.append(2);
// names.append(3);
// console.log(names.toString());
// names.remove(3);
// console.log(names.toString());

// //2.get front data
// var names = new List();
// names.append("Clayton");
// names.append("Raymond");
// names.append("Cynthia");
// names.append("Jennifer");
// names.append("Bryan");
// names.append("Danny");
//
// names.front();
// console.log(names.getElement());
//
// //3.next
// names.next();
// console.log(names.getElement());
//
// //4.prev
// names.next();
// names.next();
// names.prev();
// console.log(names.getElement());

/**
 * Iterating Through a List
 */
// var names = new List();
// names.append("Clayton");
// names.append("Raymond");
// names.append("Cynthia");
// names.append("Jennifer");
// names.append("Bryan");
// names.append("Danny");
//
// for(names.front(); names.currPos() < names.length( ); names.next()) {
//     console.log(names.getElement());
// }

//==================================================================================================================================

// var names = new List();
// names.append("Clayton");
// names.append("Raymond");
// names.append("Cynthia");
// names.append("Jennifer");
// names.append("Bryan");
// names.append("Danny");
//
// for(names.end(); names.currPos() >= 0; names.prev()) {
//     console.log(names.getElement());
// }





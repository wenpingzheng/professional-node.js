/**
 * Created by richard on 2/13/17.
 */

class Test{
    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }
}

var t = new Test();

t.name = 'aaaa';
console.log(t.name);

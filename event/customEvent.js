/**
 * Created by richard.g on 17/11/2016.
 */
class EventEmitter {
    constructor() {
        this._events = {};

    }

    emit(type) {
        var funs = this._events[type];
        for (var i = 0; funs && i < funs.length; i++) {
            var arg = Array.prototype.slice.call(arguments);
            funs[i].apply(this, (arg.slice(1)))
        }
    }

    removeListener(type) {
        delete this._events[type];
    }

    addListener(type, fun) {
        this._events = this._events || {};

        if (!this._events[type]) {
            this._events[type] = [];
        }

        this._events[type].push(fun);
    }

    once(type, fun) {
        this.addListener(type, _onceWrap(this, type, fun))
    }
}

function _onceWrap(target, type, listener) {
    var fired = false;

    function g() {
        target.removeListener(type, g);
        if (!fired) {
            fired = true;
            listener.apply(target, arguments);
        }
    }

    return g;
}


EventEmitter.prototype.on = EventEmitter.prototype.addListener;
EventEmitter.EventEmitter = EventEmitter;

module.exports = exports = EventEmitter;



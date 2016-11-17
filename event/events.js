class EventEmitter {
    emit(type) {
        var er, handler, len, args, i, events;
        events = this._events || ( this._events = {});
        handler = events[type];
        if (!handler)
            return false;

        var isFn = typeof handler === 'function';
        len = arguments.length;

        args = new Array(len - 1);
        for (i = 1; i < len; i++)
            args[i - 1] = arguments[i];

        emitMany(handler, isFn, this, args);

        return true;
    }

    addListener(type, listener) {
        return _addListener(this, type, listener, false);
    }

    once(type, listener) {
        this.on(type, _onceWrap(this, type, listener));
        return this;
    }

    removeListener(type, listener) {
        var list, events, position, i, originalListener;
        events = this._events;
        if (!events)
            return this;

        list = events[type];
        if (!list)
            return this;

        if (list === listener || (list.listener && list.listener === listener)) {
            if (--this._eventsCount === 0)
                this._events = new EventHandlers();
            else {
                delete events[type];
                if (events.removeListener)
                    this.emit('removeListener', type, list.listener || listener);
            }
        } else if (typeof list !== 'function') {
            position = -1;

            for (i = list.length; i-- > 0;) {
                if (list[i] === listener ||
                    (list[i].listener && list[i].listener === listener)) {
                    originalListener = list[i].listener;
                    position = i;
                    break;
                }
            }

            if (position < 0)
                return this;

            if (list.length === 1) {
                list[0] = undefined;
                if (--this._eventsCount === 0) {
                    this._events = new EventHandlers();
                    return this;
                } else {
                    delete events[type];
                }
            } else {
                spliceOne(list, position);
            }

            if (events.removeListener)
                this.emit('removeListener', type, originalListener || listener);
        }

        return this;
    }

    removeAllListeners(type) {
        var listeners, events;

        events = this._events;
        if (!events)
            return this;

        // emit removeListener for all listeners on all events
        if (arguments.length === 0) {
            var keys = Object.keys(events);
            for (var i = 0, key; i < keys.length; ++i) {
                key = keys[i];
                if (key === 'removeListener') continue;
                this.removeAllListeners(key);
            }
            this.removeAllListeners('removeListener');
            this._events = new EventHandlers();
            this._eventsCount = 0;
            return this;
        }

        listeners = events[type];

        if (typeof listeners === 'function') {
            this.removeListener(type, listeners);
        } else if (listeners) {
            // LIFO order
            do {
                this.removeListener(type, listeners[listeners.length - 1]);
            } while (listeners[0]);
        }

        return this;
    }

    listeners(type) {
        var evlistener;
        var ret;
        var events = this._events;

        if (!events)
            ret = [];
        else {
            evlistener = events[type];
            if (!evlistener)
                ret = [];
            else if (typeof evlistener === 'function')
                ret = [evlistener];
            else
                ret = arrayClone(evlistener, evlistener.length);
        }

        return ret;
    }
}

EventEmitter.prototype.on = EventEmitter.prototype.addListener;
EventEmitter.EventEmitter = EventEmitter;
module.exports = exports = EventEmitter;
function EventHandlers() {
}



function emitMany(handler, isFn, self, args) {
    if (isFn)
        handler.apply(self, args);
    else {
        var len = handler.length;
        var listeners = arrayClone(handler, len);
        for (var i = 0; i < len; ++i)
            listeners[i].apply(self, args);
    }
}

function _addListener(target, type, listener, prepend) {
    var m;
    var events;
    var existing;

    events = target._events;
    if (!events) {
        events = target._events = new EventHandlers();
        target._eventsCount = 0;
    } else {
        existing = events[type];
    }

    if (!existing) {
        // Optimize the case of one listener. Don't need the extra array object.
        existing = events[type] = listener;
        ++target._eventsCount;
    } else {
        if (typeof existing === 'function') {
            // Adding the second element, need to change to array.
            existing = events[type] = [existing, listener];
        } else {
            existing.push(listener);

        }

    }

    return target;
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

    g.listener = listener;
    return g;
}


// About 1.5x faster than the two-arg version of Array#splice().
function spliceOne(list, index) {
    for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1)
        list[i] = list[k];
    list.pop();
}

function arrayClone(arr, i) {
    var copy = new Array(i);
    while (i--)
        copy[i] = arr[i];
    return copy;
}



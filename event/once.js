/**
 * Created by richard.g on 18/11/2016.
 */

function _onceWrap(listener) {
    var fired = false;
    function g() {
        if (!fired) {
            fired = true;
            listener.apply(null, arguments);
        }
    }
    return g;
}

var fun = _onceWrap(function () {
    console.log('richardgong');
});

fun();
fun();
fun();
fun();


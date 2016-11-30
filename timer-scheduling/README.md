#timer-scheduling
##setTimeout
```
setTimeout(function(foo, bar) {
    console.log(foo + " " + bar);
}, 1000, "foo", "bar");

var timeoutId = setTimeout(function() {
    console.log("In timeout function");
}, 1000);

clearTimeout(timeoutId);


```


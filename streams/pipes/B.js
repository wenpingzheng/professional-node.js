/**
 * Created by richard.g on 03/12/2016.
 */
// process.stdin.on("data", function(data) {
//     console.log('B.js received data from A:("',data.toString(),'")');
// });
// process.stdin.resume();

//or use pipe method

process.stdin.pipe(process.stdout);

// process.stdin | process.stdout
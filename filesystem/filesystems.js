/**
 * Created by richard.g on 20/11/2016.
 */

/**
 * ##Relevant Paths
 */

//1.__filename, is the absolute path of the currently executing file. Similarly
//console.log(__filename);

// //2.__dirname,is the absolute path to the directory containing the currently executing file.
 //console.log(__dirname);

//3.process.cwd()=>current working directory; which returns a shell’s current working directory
//console.log(process.cwd());

//4. => Changing  Directory

// process.chdir("/");
//
// console.log(process.cwd());

//
// console.log("current working directory:" + process.cwd());
//
// try {
//     process.chdir("/data");
// } catch (exception) { ////if directory is not existed
//     console.error("chdir error: " + exception.message);
// }
//
// console.log("current working directory:" + process.cwd());

// //5.process.execPath=>the node executable path
// console.log(process.execPath);


/******
 * The path Module
 */

//一，Cross-Platform Differences
// //.1 path.sep=> separate the parts of a file path,window use "\", linux,mac,use "/"
//
//
// var dir = ["foo", "bar", "baz"];// array
// var path = require('path');
// // console.log(path.sep);//if in window it will print '\', but here is '/'
//
// console.log(dir.join(path.sep));
//

//
// var path = require("path");

// // process.env.PATH.split(path.delimiter).forEach(function (dir) {
// //     console.log(dir);
// // });
// console.log(process.env.PATH);
// var path = require("path");
// console.log(path.delimiter);

//2.path.delimiter=>separates directories in the PATH environment variable. window use ";", mac use ":"

//echo $PATH, shell
///Applications/XAMPP/bin:/Users/richardgong/Documents/redis-3.2.5/src:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin

// var path = require('path');
// console.log(path.delimiter);
// console.log(process.env.PATH);
// console.log(process.env.PATH.split(path.delimiter));


/****
 * Extracting Path Components
 */
// //1. path.extname() method,
// The extname() method finds the last period (.) in a path
// and returns it and all subsequent characters as the extension.
// If a path contains no periods, the empty string is returned.

// var path = require("path");
// var fileName = "/foo/bar/baz.txt";
// var extension = path.extname(fileName);
// console.log(extension);

// function extnameVersion2(path) {
//     var startDot = path.lastIndexOf('.');
//     return path.slice(startDot, path.length);
// }
// console.log(extnameVersion2('/b/aa.txt'));

// //2.path.basename(), method returns the last nonempty part of a path.
// var path = require("path");
// var fileName = "/foo/bar/baz.txt";
// var file = path.basename(fileName);
// console.log(file);
//
// var path = require("path");
// var fileName = "/foo/bar/baz.txt";
// var extension = path.extname(fileName);
// var file = path.basename(fileName, extension);
// console.log(file);

// //3.path.dirname(),method returns the directory portion of a path
//
// var path = require("path");
// var fileName = "/foo/bar/baz.txt";
// var dirName = path.dirname(fileName);
// console.log(dirName);


// //4.path.normalize(),likely,command line arguments from a user.
// var path = require("path");
// var dirName = "/foo/bar/.././bar/../../baz"; //
/**
 * /foo/bar/../ => /foo/
 * /foo/bar/.././bar/ => /foo/bar/
 * /foo/bar/.././bar/../../ => /
 * "/foo/bar/.././bar/../../baz"=> /baz
 */
// var normalized = path.normalize(dirName);
// console.log(normalized);

// //6. path.join(),Operating on an arbitrary number of strings, join() takes these,strings and creates a single normalized path.
//
// var path = require("path");
// var normalized = path.join("/foo/bar", ".././bar", "../..", "/baz");
//
// console.log(normalized);


// //7.path.relative(), determine the relative path from one directory to another, takes two strings as its arguments.
//
// var path = require("path");
// var from = "/Users/richardgong/WebstormProjects/advancednode.js/filesystem";
// var to = "/Users/richardgong/WebstormProjects/advancednode.js/event";
// //from .... to ....
// var relative = path.relative(from, to);
// console.log(relative);

// //8. path.resolve() method resolves a sequence of paths or path segments into an absolute path.
//
// var path = require('path');
// console.log(path.resolve('../foo/bar', './baz'));
//console.log(path.join('../foo/bar', './baz'));
//../foo/bar/baz
///Users/richardgong/WebstormProjects/advancednode.js + ../foo/bar/baz
//Users/richardgong/WebstormProjects/foo/bar/baz

// returns '/foo/bar/baz'

//// 9.other...
//
// var path = require('path');
// console.log(path.isAbsolute('./foo/bar'),path.isAbsolute('/foo/bar'));

// var path = require('path');
// console.log(path._makeLong('./foo/bar'),path._makeLong('/foo/bar'));
//
//
// var path = require('path');
// var pased = path.parse('/home/user/dir/file.txt');
// console.log(pased);
// // returns
// // {
// //    root : "/",
// //    dir : "/home/user/dir",
// //    base : "file.txt",
// //    ext : ".txt",
// //    name : "file"
// // }

// var path = require('path');
// var pt = path.format({
//     dir: '/home/user/dir',
//     base: 'file.txt'
// });

/****
 *The fs Module
 */

// //1. exists() and existsSync(),return boolean
// var fs = require("fs");
// var path = __dirname + "/filesystemsssss.js";
// var existsSync = fs.existsSync(path);
// var existsSync = fs.exists(path, function (exists) {
//     console.log(exists)
// });
// console.log(existsSync);


//2.fs.stat(),lstat(),fstat()
/***
 * The lstat() and fstat() variations behave almost identically to stat().
 * The only difference with lstat() is that if the path argument is a symbolic link, the fs.Stats object corresponds to the link itself, not the file it refers to.
 * With fstat(), the only difference is that the first argument is a file descriptor instead of a string.
 * statSync(), lstatSync(), and fstatSync()
 *
 */

// var fs = require("fs");
// fs.stat('/Users/richardgong/WebstormProjects/advancednode.js/filesystem/FileStatistics.png', function (error, stats) {
//     console.log(stats);
//     console.log('************************************************************************');
// });
//
// fs.lstat('/Users/richardgong/WebstormProjects/advancednode.js/filesystem/FileStatistics.png', function (error, stats) {
//     console.log(stats);
//     console.log('************************************************************************');
//
// });
//
// fs.open('/Users/richardgong/WebstormProjects/advancednode.js/filesystem/FileStatistics.png', 'a', function (err, fd) {
//     fs.fstat(fd, function (err, stats) {
//         console.log(stats);
//     });
// })
//
/***
 * { dev: 16777220,
  mode: 33188,
  nlink: 1,
  uid: 501,
  gid: 20,
  rdev: 0,
  blksize: 4096,
  ino: 44021076,
  size: 193033,
  blocks: 384,
  atime: 2016-11-20T14:26:17.000Z,
  mtime: 2016-11-20T13:18:06.000Z,
  ctime: 2016-11-20T13:18:06.000Z,
  birthtime: 2016-11-20T13:18:06.000Z }

 */

//the differences;
// var fs = require("fs");
// fs.stat('/Users/richardgong/WebstormProjects/advancednode.js/filesystem/link/FileStatistics.png', function (error, stats) {
//     console.log(stats);
//     console.log('************************************************************************');
// });
//
//
// fs.lstat('/Users/richardgong/WebstormProjects/advancednode.js/filesystem/link/FileStatistics.png', function (error, stats) {
//     console.log(stats);
//     console.log('************************************************************************');
//
// });
//
// fs.open('/Users/richardgong/WebstormProjects/advancednode.js/filesystem/link/FileStatistics.png', 'a', function (err, fd) {
//     fs.fstat(fd, function (err, stats) {
//         console.log(stats);
//     });
// })

/***
 * fs.stat
 * { dev: 16777220,
  mode: 33188,
  nlink: 1,
  uid: 501,
  gid: 20,
  rdev: 0,
  blksize: 4096,
  ino: 44021076,
  size: 193033,
  blocks: 384,
  atime: 2016-11-20T14:26:17.000Z,
  mtime: 2016-11-20T13:18:06.000Z,
  ctime: 2016-11-20T13:18:06.000Z,
  birthtime: 2016-11-20T13:18:06.000Z }
 ************************************************************************
 * fs.lstat()
 { dev: 16777220,
   mode: 41453,
   nlink: 1,
   uid: 501,
   gid: 20,
   rdev: 0,
   blksize: 4096,
   ino: 44030144,
   size: 81,
   blocks: 8,
   atime: 2016-11-20T14:23:12.000Z,
   mtime: 2016-11-20T14:23:12.000Z,
   ctime: 2016-11-20T14:23:12.000Z,
   birthtime: 2016-11-20T14:23:12.000Z }
 ************************************************************************
 { dev: 16777220,
   mode: 33188,
   nlink: 1,
   uid: 501,
   gid: 20,
   rdev: 0,
   blksize: 4096,
   ino: 44021076,
   size: 193033,
   blocks: 384,
   atime: 2016-11-20T14:26:17.000Z,
   mtime: 2016-11-20T13:18:06.000Z,
   ctime: 2016-11-20T13:18:06.000Z,
   birthtime: 2016-11-20T13:18:06.000Z }
 */

// /****
//  * Reading Data from Files  !!!!
//  */
// var fs = require("fs");
// var path = __dirname + "/FileStatistics.png";
// fs.stat(path, function(error, stats) {
//     fs.open(path, "r", function(error, fd) {
//         var buffer = new Buffer(stats.size);
//         fs.read(fd, buffer, 0, buffer.length, null, function(error, bytesRead, buffer) {
//             var data = buffer.toString("utf8");
//             console.log(data);
//         });
//     });
// });


// /***
//  *
//  * The readFile() and readFileSync() Methods
//  *
//  */
//
// var fs = require("fs");
// var path = __dirname + "/foo.txt";
//
//
// fs.readFile(path, "utf8", function(error, data) {
//     if (error) {
//         console.error("read error: " + error.message);
//     } else {
//         console.log(data);
//     }
// });


// /***
//  * The writeFile() and writeFileSync() Methods
//  */
//
// var fs = require("fs");
// var path = __dirname + "/foo.txt";
// var data = "Lorem ipsum dolor sit amet";
// fs.writeFile(path, data, function(error) {
//     if (error) {
//         console.error("write error: " + error.message);
//     } else {
//         console.log("Successfully wrote " + path);
//     }
// });

// /***
//  * Closing Files,close() and closeSync()
//  */
//
// var fs = require("fs");
// var path = "/dev/null";
//
// fs.open(path, "w+", function(error, fd) {
//     if (error) {
//         console.error("open error: " + error.message);
//     } else {
//         fs.close(fd, function(error) {
//             if (error) {
//                 console.error("close error: " + error.message);
//             }
//         });
//     }
// });

//
//

// /***
//  * Renaming Files,rename() or renameSync() methods.
//  */
//

// var fs = require("fs");
// var oldPath = __dirname + "/foo.txt";
// var newPath = __dirname + "/bar.txt";
// fs.rename(oldPath, newPath, function(error) {
//     if (error) {
//         console.error("rename error: " + error.message);
//     } else {
//         console.log("Successfully renamed the file!");
//     }
// });




// /***
//  * Deleting Files,unlink() and unlinkSync() methods
//  */
// var fs = require("fs");
// var path = __dirname + "/tmp";
// fs.unlink(path, function(error) {
//     if (error) {
//         console.error("unlink error: " + error.message);
//     }
// });
//

/****
 * Creating Directories,mkdir() and mkdirSync() methods.
 */

// var fs = require("fs");
// var path = __dirname + "/foo";
// fs.mkdir(path, function(error) {
//
// });


/***
 * readdir() and readdirSync() methods
 */
// var fs = require("fs");
// var path = process.cwd();
// fs.readdir(path, function(error, files) {
//     console.log(files);
//     // files.forEach(function(file) {
//     //     console.log(file);
//     // });
// });


//


/***
 * rmdir() and rmdirSync() methods.
 */

// var fs = require("fs");
// var path = __dirname + "/foo";
// fs.rmdir(path, function (error) {
//     if (error) {
//         console.error("rmdir error: " + error.message);
//     }
// });


// var fs = require("fs");
// var path = __dirname + "/foo";
// function rmdir(path) {
//     if (fs.existsSync(path)) {
//         fs.readdirSync(path).forEach(function (file) {
//             var f = path + "/" + file;
//             var stats = fs.statSync(f);
//             if (stats.isDirectory()) {
//                 rmdir(f);
//             } else {
//                 fs.unlinkSync(f);
//             }
//         });
//         fs.rmdirSync(path);
//     }
// }
//  rmdir(path);
//
// var async = require("async");
// var fs = require("fs");
// var path = __dirname + "/foo";
// function rmdir(path, callback) {
// // first check if the path exists
//     fs.exists(path, function(exists) {
//         if (!exists) {
//             return callback(new Error(path + " does not exist"));
//         }
//         fs.readdir(path, function(error, files) {
//             if (error) {
//                 return callback(error);
//             }
// // loop over the files returned by readdir()
//             async.each(files, function(file, cb) {
//                 var f = path + "/" + file;
//                 fs.stat(f, function(error, stats) {
//                     if (error) {
//                         return cb(error);
//                     }
//
//                     if (stats.isDirectory()) {
// // recursively call rmdir() on the directory
//                         rmdir(f, cb);
//                     } else {
// // delete the file
//                         fs.unlink(f, cb);
//                     }
//                 });
//             }, function(error) {
//                 if (error) {
//                     return callback(error);
//                 }
// // the directory is now empty, so delete it
//                 fs.rmdir(path, callback);
//             });
//         });
//     });
// }
// // now call the recursive rmdir() function
// rmdir(path, function(error) {
//     if (error) {
//         console.error("rmdir error: " + error.message);
//     } else {
//         console.log("Successfully removed " + path);
//     }
// });


/***
 * the watch() Method
 */

// var fs = require("fs");
// var path = __dirname + "/foo.txt";
// fs.watch(path, {
//     persistent: true
// }, function(event, filename) {
//     if (event === "rename") {
//         console.log("The file was renamed/deleted.");
//     } else if (event === "change") {
//         console.log("The file was changed.");
//     }
// });
//

// var fs = require("fs");
// var path = __dirname;
// fs.watch(path, {
//     persistent: true,
//     recursive:true
// }, function (event, filename) {
//     console.log(event,':', filename);
// });
//
/***
 * open() and openSync() methods
 */


// var fs = require("fs");
// fs.open('./filesystem/openfiles/open_flag_r.txt', 'r', function (err,fd) {
//     console.log(err);
//     console.log(fd);
// });

/**
 * read() and readSync()，are used to read data from an open file，
 * fs.read(filedescriptor, buffer, offset, length, position, callback)
 *
 */

var fs = require("fs");
var path = __dirname + "/openfiles/open_flag_r.txt";
fs.stat(path, function (error, stats) {
    fs.open(path, "r", function (error, fd) {
        var buffer = new Buffer(stats.size);
        fs.read(fd, buffer, 0, buffer.length, 5, function (error, bytesRead, buffer) {
            var data = buffer.toString("utf8");
            console.log(data);
        });
    });
});

/**
 * readFile() and readFileSync(),concise way for read
 */




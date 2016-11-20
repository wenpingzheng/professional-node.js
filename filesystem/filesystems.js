/**
 * Created by richard.g on 20/11/2016.
 */

/**
 * ##Relevant Paths
 */

// //1.__filename, is the absolute path of the currently executing file. Similarly
// console.log(__filename);

// //2.__dirname,is the absolute path to the directory containing the currently executing file.
// console.log(__dirname);

// //3.process.cwd()=>current working directory; which returns a shell’s current working directory
// console.log(process.cwd());

// //4.process.chdir("/") => Changing  Directory
//
// console.log("current working directory:" + process.cwd());
//
// try {
//     process.chdir("/data");
// } catch (exception) { ////if directory is not existed
//     console.error("chdir error: " + exception.message);
// }
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
// console.log(dir.join('\\'));//windows
// console.log(dir.join('/'));//mac,linux
//
// var path = require('path');
// console.log(path.sep);//if in window it will print '\', but here is '/'
// console.log(dir.join(path.sep));
//

//
// var path = require("path");
// process.env.PATH.split(path.delimiter).forEach(function (dir) {
//     console.log(dir);
// });

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
// var extension = path.extname('..');
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
// /**
//  * /foo/bar/../ => /foo/
//  * /foo/bar/.././bar/ => /foo/bar/
//  * /foo/bar/.././bar/../../ => /
//  * "/foo/bar/.././bar/../../baz"=> /baz
//  */
// var normalized = path.normalize(dirName);
// console.log(normalized);

// //6. path.join(),Operating on an arbitrary number of strings, join() takes these,strings and creates a single normalized path.
//
// var path = require("path");
// var normalized = path.join("/foo/bar", ".././bar", "../..", "/baz");
// console.log(normalized);


// //7.path.relative(), determine the relative path from one directory to another, takes two strings as its arguments.
//
// var path = require("path");
// var from = "/foo/bar";
// var to = "/baz/biff";
// //from .... to ....
// var relative = path.relative(from, to);
// console.log(relative);

// //8. path.resolve() method resolves a sequence of paths or path segments into an absolute path.
//
// var path = require('path');
// console.log(path.resolve('/foo/bar', './baz'));
// // returns '/foo/bar/baz'

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
// var path = __dirname + "/filesystems.js";
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
var fs = require("fs");
fs.stat('/Users/richardgong/WebstormProjects/advancednode.js/filesystem/link/FileStatistics.png', function (error, stats) {
    console.log(stats);
    console.log('************************************************************************');
});

fs.lstat('/Users/richardgong/WebstormProjects/advancednode.js/filesystem/link/FileStatistics.png', function (error, stats) {
    console.log(stats);
    console.log('************************************************************************');

});

fs.open('/Users/richardgong/WebstormProjects/advancednode.js/filesystem/link/FileStatistics.png', 'a', function (err, fd) {
    fs.fstat(fd, function (err, stats) {
        console.log(stats);
    });
})
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

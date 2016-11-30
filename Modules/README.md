#Modules

##loading modules

** 1. node.js core api
```
var module = require('http');
```
** 2.local modules
```
var module = require('http');
```
** 3. absolute path

```
var myModule = require('/home/pedro/my_modules/my_module');
```
** 3. relative path
```
var myModule = require('../my_modules/my_module');
var myModule2 = require('./lib/my_module_2');
```

** 4.Loading a Folder Module

```
require('./a/b/c').c();
```

** 5. Loading from the node_modules Folder

For instance, if you do the following, Node will try to look for the fi le ./node_modules/myModule.js:
```
var myModule = require('myModule.js');
```

If Node fails to fi nd the fi le, it will look inside the parent folder called ../node_modules/myModule
.js. If it fails again, it will try the parent folder and keep descending until it reaches the root or
fi nds the required module.


** 6. Caching Modules

```
var myModuleInstance1 = require('./my_module');
var myModuleInstance2 = require('./my_module');
```

** 7. File Extension Processing

■■Though this feature has recently been deprecated, the module system API is locked, so require.extensions
is unlikely to ever disappear completely. The official documentation recommends wrapping non-JavaScript modules in
another Node program or compiling them to JavaScript a priori.

```
require.extensions[".javascript"] = require.extensions[".js"];


require.extensions[".javascript"] = function() {
console.log(arguments);
};


```

** Resolving a Module Location

If you are interested only in learning where a package is located, use the require.resolve() function, which uses
the same mechanism as require() to locate modules. However, instead of actually loading the module, resolve()
only returns the path to the module. If the module name passed to resolve() is a core module, the module’s name
is returned. If the module is a file module, resolve() returns the module’s file name. If the Node cannot locate the
specified module, an error is thrown. The example in Listing 2-23 shows usage of resolve() in the REPL environment



** exports, module.exports



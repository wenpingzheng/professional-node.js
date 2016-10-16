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

```
var myModule = require('myModule.js');
```


If Node fails to fi nd the fi le, it will look inside the parent folder called ../node_modules/myModule
.js. If it fails again, it will try the parent folder and keep descending until it reaches the root or
fi nds the required module.


** Caching Modules

```
var myModuleInstance1 = require('./my_module');
var myModuleInstance2 = require('./my_module');
```




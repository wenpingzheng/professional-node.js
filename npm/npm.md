
#npm管理工具

node.js入门到精通01，关于npm 01

源码:https://github.com/richardgong1987/professional-node.js.git


```
Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world.

As a bare minimum, a package.json must have:

"name"
all lowercase
one word, no spaces
dashes and underscores allowed
"version"
in the form of x.x.x
For example:

{
  "name": "myawesomepackage",
  "version": "1.0.0"
}


{
  "name": "advancednode.js", 
  "version": "1.0.0",
  "description": "",// for npm search
  "main": "index.js", //entrance, default index.js
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"  // e.g npm test, run start
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/richardgong1987/professional-node.js.git"
  },
  "keywords": [],
  "author": "ag_dubs <wombat@npmjs.com>",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/richardgong1987/professional-node.js/issues"
  },
  "homepage": "https://github.com/richardgong1987/professional-node.js#readme"
}


=version Exactly matches version.
>version Greater than version.
>=version Greater than or equal to version.
<version Less than version.
<=version Less than or equal to version.
~version Greater than or equal to version, but less than the next major version.
* Newest version available.
“” Newest version available.
version1 – version2 Greater than or equal to version1, and less than or equal to version2.
range1 || range2 Matches versions specified by either range1 and range2.


```

http://nodejs.org/

##0.npm init

```
npm init
 
or

npm int --y(--yes)

npm init --scope=username //you can add your scope as an option to that command


```

##1.npm install 
```
npm install npm@latest -g

npm install npm -g

npm install -g jshint

npm install  jshint


npm install <package_name>

or 

npm install <package_name> --save

or 

npm install <package_name> --save-dev

npm install <package_name> --O //--save-optional  -B: --save-bundle  -E: --save-exact

or

npm install

npm install @username/project-name --save

@scope/project-name

@username/project-name


npm install http://www.github.com/richardgong/test

```




##2.npm update
```
npm update -g //To update all global packages

npm outdated  //the new available local list

npm outdated -g ////the new available global list

npm outdated -g --depth=0 //To find out which packages need to be updated
```

##3.npm uninstall
```
npm uninstall <package_name> <package_name> <package_name>...

npm uninstall <package_name> -g //Global packages can be uninstalled

npm uninstall --save <package_name>

npm uninstall --save-dev <package_name>

npm uninstall @username/project-name --save

same with below:

npm rm <package_name>

```

##4. npm publish

```
npm adduser

npm config ls

npm publish

//.npmrc

version

Patch releases: 1.0 or 1.0.x or ~1.0.4
Minor releases: 1 or 1.x or ^1.0.4
Major releases: * or x

npm publish --access=public // public scoped modules are free and don't require a paid subscription. 

```

##5.npm bin 

```
Print the folder where npm will install executables.
```

##6.npm search 
```
npm search [-l|--long] [search terms ...]

aliases: s, se


Description

Search the registry for packages matching the search terms.

If a term starts with /, then it's interpreted as a regular expression. A trailing / will be ignored in this case. (Note that many regular expression characters must be escaped or quoted in most shells.)

Configuration


long

Default: false
Type: Boolean
Display full package descriptions and other long text across multiple lines. When disabled (default) search results are truncated to fit neatly on a single line. Modules with extremely long names will fall on multiple lines.
```

##7.npm link,unlink

```
npm link (in package dir)
npm link [<@scope>/]<pkg>[@<version>]

alias: npm ln

e.g:

cd foo-module
npm link

cd bar-module
npm link foo-module
```


##8.npm start
```
npm start [-- <args>]
```

Description

This runs an arbitrary command specified in the package's "start" property of its "scripts" object. If no "start" property is specified on the "scripts" object, it will run node server.js.


```
As of npm@2.0.0, you can use custom arguments when executing scripts. Refer to npm-run-script for more details.

```
##9.npm stop 

```
Description

This runs a package's "stop" script, if one was provided.
```



##10. npm view

```
npm view [<@scope>/]<name>[@<version>] [<field>[.<subfield>]...]
    
    aliases: info, show, v
```

Description

This command shows data about a package and prints it to the stream referenced by the outfd config, which defaults to stdout.

To show the package registry entry for the connect package, you can do this:



##11. npm doc 








#npm管理工具

node.js入门到精通01，关于npm 01

源码:https://github.com/richardgong1987/professional-node.js.git


http://nodejs.org/

##0.Npm init

```
npm init
 
or

npm int --y(--yes)

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



set several config options for the init command. Some useful ones:

> npm set init.author.email "wombat@npmjs.com"
> npm set init.author.name "ag_dubs"
> npm set init.license "MIT"
> npm set init.version "1.0.0"




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

npm init --scope=username //you can add your scope as an option to that command


```

##1.Updating 
```
npm install npm@latest -g

npm install npm -g

npm install -g jshint

npm install  jshint

```


##2.Installing package

```

npm install <package_name>

or 

npm install <package_name> --save

or 

npm install <package_name> --save-dev

npm install <package_name> --O //--save-optional  -B: --save-bundle  -E: --save-exact

or

npm install

npm install @username/project-name --save

npm install http://www.github.com/richardgong/test

```



##3.Updating  packages
```
npm update -g //To update all global packages

npm outdated  //the new available local list

npm outdated -g ////the new available global list

npm outdated -g --depth=0 //To find out which packages need to be updated
```

##4.Uninstalling  packages
```
npm uninstall <package_name>

npm uninstall <package_name> -g //Global packages can be uninstalled

npm uninstall --save <package_name>

npm uninstall --save-dev <package_name>

npm uninstall @username/project-name --save

```

##5.Publishing npm packages

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

##6. Working with scoped packages

```
@scope/project-name

@username/project-name

sudo npm install -g npm
npm login


npm init --scope=username
If you use the same scope all the time, you will probably want to set this option in your .npmrc file.


npm publish --access=public


```

##7.Using dist-tags

```
npm dist-tag add <pkg>@<version> [<tag>]
```

##What's the different between 'local' and 'global' modules



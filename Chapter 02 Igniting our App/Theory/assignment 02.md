Q. What is NPM?
A. NPM is the package manager for the js

Q. - What is `Parcel/Webpack`? Why do we need it?
A. Parcel/WebPack are the bundlers used for javascript code that helps you to minify, clean and make your code compact so that it becomes easier to send the send or recieve the responds from the server.

Q. What is 'Parcel-cache'?
A. Parcel Cache stores information about your project when parcel builds it, so that when it rebuilds, it doesn't have to re-parse and re-analyze everything from scratch. It's a key reason why parcel can be so fast in development mode.

Q. What is NPX?
A. NPX is a tool that use execute packages.

Q. What is difference between `dependencies` vs `devDependencies`?
A. A dependency is a library that a project needs to function effectively. DevDependencies are the packages a developer needs during development.

Q. What is Tree Shaking?
A. Tree Shaking is a removal of dead code.

Q. What is hot module replacement?
A. Exchanges, adds, or removes modules while an application is running, without a full reload.

Q. List down your favourite 5 superpowers of Parcel and describe any 3 of them in your own words.
A. File watching algorithm , cleaning the code, minify, compression , image optimization.

Q. What is `.gitignore`? What should we add and not add into it?
A. gitignore file tells Git which files to ignore when committing your project to the GitHub repository.

Q. What is the difference between `package.json` and `package-lock.json`?
A. The `package. json` file defines the rules required to run your application and install dependencies. On the other hand, the `package-lock. json` file holds detailed information on all the dependencies installed based on the package.

Q. Why should I not modify package-lock.json?
A. `package-lock.json` file contains the information about the dependencies and their versions used in the project. Deleting it would cause dependencies issues in the production environment. So don't modify it, It's being handled automatically by NPM.

Q. What is `node_modules` ? Is it a good idea to push that on git?
A. `node_modules` folder like a cache for the external modules that your project depends upon. When you npm install them, they are downloaded from the web and copied into the node_modules folder and Nodejs is trained to look for them there when you import them (without a specific path). Don't push node_modulesin github because it contains lots of files(more than 100 MB), it will cost you memory space.

Q. What is dist folder?
A. The /dist stands for distributable.The /dist folder contains the minimized version of the source code. The code present in the /dist folder is actually the code which is used on production web applications.

Q. What is `browserslist`?
A. Browserslist is a tool that allows specifying which browsers should be supported in your frontend app by specifying "queries" in a config file. It's used by frameworks/libraries such as React, Angular and Vue, but it's not limited to them.
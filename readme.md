# @studionand/core-js

Monorepo that contains all @studionand javascript modules.    
It is using lerna-js to manage the individual packages.    
We are using lerna-js [independent-mode](https://github.com/lerna/lerna#independent-mode---independent)

### fresh install
after cloning the repo, you have to run `lerna bootstrap` in order to all dependecies in the individual packages.

### intall global dependecy
use [`lerna add`](https://github.com/lerna/lerna#independent-mode---independent) in order to install depdencies that have the same version across all packages. 

### publishing

`npm run release`
this will call
1. `lerna run build` -> calling the build script of each module (if present)
2. `lerna publish` -> see lerna publishing behaviour [lerna-js#publish](https://github.com/lerna/lerna#publish)
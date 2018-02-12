# @studionand/core-js

Monorepo that contains all @studionand javascript modules. It is using lerna-js in [independent-mode](https://github.com/lerna/lerna#independent-mode---independent) to manage the individual packages.

### How to use

1. `git clone git@github.com:StudioNAND/core-js.git`
2. `lerna bootstrap` installs all dependencies in the individual packages

### Adding new global dependecies

[`lerna add`](https://github.com/lerna/lerna#add) gives us the possiblity to add local/remote packages as dependencies globaly to all packages in this lerna repository.   

### Releasing updated modules

Use `npm run release` in the main `@studionand/core-js` package to release all updated packages. This will do the following steps:
1. `lerna run build`  
calling the build script of each module (if present)
2. `lerna publish`  
see lerna publishing behaviour [lerna-js#publish](https://github.com/lerna/lerna#publish)

## Documentation

There are 3 different scripts in the main `@studionand/core-js` package to update the generated documentation. We are currently using [documentation.js](https://github.com/documentationjs/documentation) to generate the documentation.

- `npm run docs:build` builds the generation to the `docs`-folder
- `npm run docs:serve` will start a server that serves the documentation
- `npm run docs:watch` will start a server that serves the documentation and watches for changes (this requires live-reload browser extension)

# require-relative-main [![Build Status](https://travis-ci.org/bendrucker/require-relative-main.svg?branch=master)](https://travis-ci.org/bendrucker/require-relative-main) [![Greenkeeper badge](https://badges.greenkeeper.io/bendrucker/require-relative-main.svg)](https://greenkeeper.io/)

> require a module relative to the "main" script

## Install

```
$ npm install --save require-relative-main
```


## Usage

```js
var requireRelativeMain = require('require-relative-main');

requireRelativeMain('./foo', __dirname);
```

## API

#### `requireRelativeMain(modulePath, [cwd])` -> `any`

##### modulePath

*Required*  
Type: `string`

The path to the module to be required. This will be required relative to the "main" entry for the package.

##### cwd

Type: `string`  
Default: `process.cwd()`

The working directory from which to look upwards for the package.json file that specifies the main script. You should typically specify `__dirname`.

## Browserify

Use the [mainify](https://github.com/bendrucker/mainify) transform in your package if you plan to use require-relative-main with Browserify.

## License

MIT © [Ben Drucker](http://bendrucker.me)

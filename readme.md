# require-relative-main [![Build Status](https://travis-ci.org/bendrucker/require-relative-main.svg?branch=master)](https://travis-ci.org/bendrucker/require-relative-main)

> require a module relative to the "main" script

## Install

```
$ npm install --save require-relative-main
```


## Usage

```js
var requireRelativeMain = require('require-relative-main');

requireRelativeMain('./foo-bar');
```

## API

### `requireRelativeMain(modulePath, cwd)`

#### `modulePath`

*Required*  
Type: `string`

The path to the module to be required. This will be required relative to the "main" entry for the package.

#### `cwd`

Type: `string`
Default: `process.cwd()`

The working directory from which to look upwards for the package.json file that specifies the main script.

## License

MIT © [Ben Drucker](http://bendrucker.me)

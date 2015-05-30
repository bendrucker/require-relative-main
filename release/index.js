'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = requireRelativeMain;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _findMain = require('find-main');

var _findMain2 = _interopRequireDefault(_findMain);

var _path = require('path');

var _requireModule = require('require-module');

var _requireModule2 = _interopRequireDefault(_requireModule);

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

'use strict';

function requireRelativeMain(modulePath, cwd) {
  cwd = cwd || process.cwd();
  var main = _findMain2['default'](cwd);
  _assert2['default'](main, 'package must define a "main" entry');
  return _requireModule2['default'](modulePath, _path.dirname(main));
}

module.exports = exports['default'];
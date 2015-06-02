'use strict'

var findMain = require('find-main')
var dirname = require('path').dirname
var requireModule = require('require-module')
var assert = require('assert')

module.exports = function requireRelativeMain (modulePath, cwd) {
  cwd = cwd || process.cwd()
  var main = findMain(cwd)
  assert(main, 'package must define a "main" entry')
  return requireModule(modulePath, dirname(main))
}

'use strict'

import findMain from 'find-main'
import {dirname} from 'path'
import requireModule from 'require-module'
import assert from 'assert'

export default function requireRelativeMain (modulePath, cwd) {
  cwd = cwd || process.cwd()
  const main = findMain(cwd)
  assert(main, 'package must define a "main" entry')
  return requireModule(modulePath, dirname(main))
}

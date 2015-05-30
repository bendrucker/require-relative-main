'use strict'

import findMain from 'find-main'
import {sync as mothershipSync} from 'mothership'
import {dirname} from 'path'
import requireModule from 'require-module'
import {sync as resolveSync} from 'resolve'
import assert from 'assert'

export default function requireRelativeMain (modulePath, cwd) {
  cwd = cwd || process.cwd()
  const main = findMain(cwd)
  assert(main, 'package must define a "main" entry')
  const basedir = dirname(mothershipSync(cwd, Boolean).path)
  return requireModule(modulePath, dirname(resolveSync(main, {basedir})))
}

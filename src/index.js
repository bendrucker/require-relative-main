'use strict'

import lookup from 'look-up'
import {dirname} from 'path'
import packageRoot from 'cwd'
import requireModule from 'require-module'
import assert from 'assert'

export default function requireRelativeMain (modulePath) {
  const {main} = requireModule('package.json', packageRoot())
  assert(main, 'package must define a "main" entry')
  return requireModule(modulePath, dirname(main))
}
const shelljs = require('shelljs')

function preRelease() {
  shelljs.cp('-rf', '../../README.md', './')
  shelljs.cp('-rf', '../../README.zh-CN.md', './')
}

preRelease()

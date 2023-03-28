/* eslint-env node */

/** @type {import('vue-tsc-eslint-hook')} */
const vueTscEslintHook = require('vue-tsc-eslint-hook')

/**
 * @param {import('typescript').Program} program
 */
module.exports = program =>
  vueTscEslintHook(program, require('./resolve-config.js'))

/* eslint-disable no-console */
import { statistics } from './count'

const { apiSize, apiLength, compNumber } = statistics()

console.log('apiSize', apiSize)
console.log('apiLength', apiLength)
console.log('compNumber', compNumber)

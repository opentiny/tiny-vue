import path from 'node:path'
import fs from 'fs-extra'
import { findAllFiles } from './utils/find-all-files'

const demoUrl = path.join(process.cwd(), '../../examples/sites/demos/pc/app')

export const statistics = () => {
  let apiSize = 0
  let apiLength = 0
  let compNumber = 0

  const readAndProcessFile = (filePath) => {
    const stats = fs.statSync(filePath)
    const string = fs.readFileSync(filePath, 'utf8').replace(/\s/g, '')
    compNumber++
    apiLength += string.length
    apiSize += stats.size
  }

  findAllFiles(demoUrl, readAndProcessFile)

  return {
    apiSize,
    apiLength,
    compNumber
  }
}

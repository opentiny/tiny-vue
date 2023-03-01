const { execSync } = require('child_process')
const path = require('path')
const fs = require('fs-extra')
const utils = require('./build/utils')

const ROOTPATH = path.join(__dirname, './')

const publish = () => {
  const publishDir = path.join(ROOTPATH, 'dist')
  fs.readdirSync(publishDir).forEach((item) => {
    const childPath = path.join(publishDir, item)
    const stat = fs.statSync(childPath)

    if (stat.isDirectory()) {
      const cmd = `npm publish ./dist/${item} --access public`
      try {
        execSync(cmd, { cwd: ROOTPATH })
      } catch (error) {
        utils.logYellow(error)
        execSync(cmd, { cwd: ROOTPATH })
      }
      if (item.startsWith('chart')) {
        fs.readdirSync(childPath).forEach((value) => {
          const chartChildPath = path.join(childPath, value)
          const chartStat = fs.statSync(chartChildPath)
          if (value.includes('-') && chartStat.isDirectory()) {
            const cmd = `npm publish ./dist/chart/${value} --access public`
            try {
              execSync(cmd, { cwd: ROOTPATH })
            } catch (error) {
              utils.logYellow(error)
              execSync(cmd, { cwd: ROOTPATH })
            }
          }
        })
      }
    }
  })
}

publish()

const path = require('path')
const fs = require('fs-extra')

const ROOTPATH = path.join(__dirname, './')

const publish = () => {
  const publishDir = path.join(ROOTPATH, 'packages')
  fs.readdirSync(publishDir).forEach((item) => {
    const childPath = path.join(publishDir, item)
    const stat = fs.statSync(childPath)

    if (stat.isDirectory()) {
      const distPath = path.join(childPath, './dist')
      if (fs.existsSync(distPath) && fs.statSync(distPath).isDirectory()) {
        fs.removeSync(distPath)
      }
      if (item.startsWith('chart')) {
        fs.readdirSync(childPath).forEach((value) => {
          const chartChildPath = path.join(childPath, value)
          const chartStat = fs.statSync(chartChildPath)
          if (value.includes('-') && chartStat.isDirectory()) {
            const distPath = path.join(chartChildPath, './dist')
            fs.existsSync(distPath) &&
              fs.statSync(distPath).isDirectory() &&
              fs.removeSync(distPath)
          }
        })
      }
    }
  })
}

publish()

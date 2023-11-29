const fs = require('fs')
const fsExtra = require('fs-extra')
const indexLessPath = 'index.less'
const indexJsPath = 'index.js'
const smbThemeName = 'smb-theme'
const auroraThemeName = 'aurora-theme'
const originRootPath = '../src/'
const originThemeRootPath = `${originRootPath}theme/`
const basePath = '/base/'

const emptyThemeContent = `@import '../../{{}}/index.less';`

const baseContent = `@import '../../base/index.less';
html:root`

const scopedTitle = `@import '../../custom.less';
@import '../../{{}}/index.less';
`

const scopedContent = `
@{compName}-prefix-cls: ~'@{css-prefix}{compName}';

.@{{compName}-prefix-cls}[class*=tiny] {
  {var}
}`

const buildThemePathMap = {
  [auroraThemeName]: `${originRootPath}${auroraThemeName}${basePath}`,
  [smbThemeName]: `${originRootPath}${smbThemeName}${basePath}`
}

const cssScopedMap = {
  'anchor': 'anchor__wrapper',
  'badge': 'badge__wrapper',
  'crop': 'crop__wrapper',
  'date-panel': 'picker-panel',
  'date-range': 'date-range-picker',
  'detail-page': 'grid-modal__box',
  'dialog-box': 'dialog-box__wrapper',
  'error-page': 'errortips__box',
  'floatbar': 'float-bar',
  'flowchart': 'flow-chart',
  'grid': 'grid__wrapper',
  'input': ['input', 'input-group'],
  'option': 'select-dropdown',
  'pager': ['pager', 'pager__selector'],
  'picker': 'date-editor',
  'pop-upload': ['popupload__modal', 'popupload'],
  'popconfirm': ['popconfirm', 'popconfirm-popover'],
  'popeditor': ['dialog-box', 'popeditor'],
  'scroll-text': 'scroll-text__wrapper',
  'slider': 'slider-container',
  'tabs': ['tabs__more-dropdown', 'tabs'],
  'time-range': 'time-range-picker',
  'tip': 'tips',
  'tree': ['tree', 'tree__del-popover'],
  'upload': 'file-upload',
  'upload-dragger': 'file-upload',
  'upload-list': 'file-upload',
  'user-account': 'user-contact'
}

const createTheme = (callbackFn) => {
  const createDir = (path, fn = null) => {
    fs.mkdir(path, (err) => {
      if (err) {
        console.log(path, err)
      }
      fn && fn()
    })
  }

  let timer = null
  const readerDirStart = () => {
    clearTimeout(timer)
    timer = null
    timer = setTimeout(() => {
      readDir(originRootPath, 'less')
      readDir(originThemeRootPath, 'js')
    }, 10)
  }

  const beginCreateDir = () => {
    for (let k in buildThemePathMap) {
      createDir(originRootPath + k, readerDirStart)
    }
  }

  const readDir = (originPath, type) => {
    fs.readdir(originPath, (err, data) => {
      if (err) {
        console.log('readDir', err)
        return
      }

      data.forEach((fileDir) => {
        mkStat(originPath, fileDir, type)
      })
    })
  }

  let isFinalTimer = null

  const isFinalFn = () => {
    clearTimeout(isFinalTimer)
    isFinalTimer = null
    isFinalTimer = setTimeout(() => {
      callbackFn()
    }, 20)
  }

  const mkStat = (originPath, fileDir, type) => {
    const statPath = `${originPath}/${fileDir}`
    fs.stat(statPath, (err, data) => {
      if (err) {
        console.log('mkStat', err)
        return
      }
      if (data.isDirectory()) {
        if (fileDir !== 'base' && fileDir !== 'theme') {
          if (fileDir === 'images') {
            fsExtra.copy(statPath, `${originPath}/smb-theme/${fileDir}`, (subErr) => {
              if (subErr) {
                console.log(subErr)
                return
              }
            })
            fsExtra.copy(statPath, `${originPath}/aurora-theme/${fileDir}`, (subErr) => {
              if (subErr) {
                console.log(subErr)
                return
              }
            })
          } else {
            isFileExist(originPath, fileDir, type)
          }
        }
      }
    })
  }

  const isFileExist = (originPath, fileDir, type) => {
    const parentPath = `${originPath}${fileDir}`
    const path = `${parentPath}/index.${type}`
    fs.exists(path, (exist) => {
      if (exist) {
        if (type === 'less') {
          readComponentsFile(fileDir)
        } else if (type === 'js') {
          readThemeFile(fileDir)
        }
        return
      }
    })
  }

  const writeThemeIndexLess = (path, fileDir, themeName) => {
    fs.stat(path, (err, data) => {
      const parentPath = `${originRootPath}${themeName}/${fileDir}`
      const writeTheme = () => {
        if (err) {
          writeFile(parentPath + '/index.less', emptyThemeContent.replace('{{}}', fileDir))

          return
        }

        if (!data.isDirectory()) {
          fs.readFile(path, 'utf8', (subErr, dataStr) => {
            if (subErr) {
              console.log(subErr)
              return
            }
            const startIndex = dataStr.indexOf('{') + 4
            const endIndex = dataStr.indexOf('}')
            const newDataStr =
              dataStr
                .slice(startIndex, endIndex)
                .replace(/\'ti-/g, '--ti-')
                .replace(/\'/g, '')
                .replace(/\,\n/g, ';\n')
                .replace(/\, \/\//g, '; //')
                .slice(0, -1) + ';'

            let scropedData = scopedTitle.replace('{{}}', fileDir)

            if (cssScopedMap[fileDir]) {
              if (Array.isArray(cssScopedMap[fileDir])) {
                cssScopedMap[fileDir].forEach((item) => {
                  scropedData += scopedContent.replace(/\{compName\}/g, item).replace(/\{var\}/g, newDataStr)
                })
              } else {
                scropedData += scopedContent
                  .replace(/\{compName\}/g, cssScopedMap[fileDir])
                  .replace(/\{var\}/g, newDataStr)
              }
            } else {
              scropedData += scopedContent.replace(/\{compName\}/g, fileDir).replace(/\{var\}/g, newDataStr)
            }

            writeFile(parentPath + '/index.less', scropedData)
          })
        }
      }

      createDir(parentPath, writeTheme)
    })
  }

  const readComponentsFile = (fileDir) => {
    const indexPath = `${originRootPath}/${fileDir}/${indexLessPath}`
    const smbPath = `${originRootPath}/${fileDir}/${smbThemeName}.js`
    const auroraPath = `${originRootPath}/${fileDir}/${auroraThemeName}.js`
    fs.readFile(indexPath, 'utf8', (err, dataStr) => {
      if (err) {
        console.log(err)
      }

      // 写入smb-theme/**/index.less
      writeThemeIndexLess(smbPath, fileDir, smbThemeName)

      // 写入aurora-theme/**/index.less
      writeThemeIndexLess(auroraPath, fileDir, auroraThemeName)
    })
  }

  const readThemeFile = (fileDir) => {
    const indexPath = `${originThemeRootPath}/${fileDir}/${indexJsPath}`

    if (!buildThemePathMap[fileDir]) {
      return
    }

    fs.readFile(indexPath, 'utf8', (err, dataStr) => {
      createDir(buildThemePathMap[fileDir])

      if (err) {
        console.log(err)
      }

      const startIndex = dataStr.indexOf('{') - 1
      const endIndex = dataStr.indexOf('}')
      let newDataStr = dataStr.slice(startIndex, endIndex)
      const lastIndex = newDataStr.lastIndexOf("'")
      newDataStr =
        baseContent +
        newDataStr
          .slice(0, lastIndex)
          .replace(/\'ti-/g, '--ti-')
          .replace(/\'/g, '')
          .replace(/\,\n/g, ';\n')
          .replace(/\, \/\//g, '; //') +
        ';\n}'

      writeFile(buildThemePathMap[fileDir] + '/index.less', newDataStr)
    })
  }

  const writeFile = (filePath, data) => {
    fs.writeFile(filePath, data, 'utf8', (err) => {
      if (err) {
        console.log('writeFile', err)
      }
      isFinalFn()
    })
  }

  beginCreateDir()
}

const removeDir = (callbackFn) => {
  for (let k in buildThemePathMap) {
    fsExtra.remove(`${originRootPath}${k}`, (err) => {
      if (err) {
        console.log('removeDir', err)
      }
      callbackFn()
    })
  }
}

module.exports = { createTheme, removeDir }

const fs = require('node:fs')
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
    if (isPathExist(path)) {
      return
    }

    fs.mkdirSync(path)

    fn && fn()
  }

  const beginCreateDir = () => {
    for (let k in buildThemePathMap) {
      createDir(originRootPath + k)
    }
    readDir(originRootPath, 'less')
    readDir(originThemeRootPath, 'js')
    callbackFn()
  }

  const readDir = (originPath, type) => {
    const fileNames = fs.readdirSync(originPath)
    fileNames.forEach((fileDir) => {
      mkStat(originPath, fileDir, type)
    })
  }

  let isFinalTimer = null

  const copyDir = (originPath, targetPath) => {
    fsExtra.copySync(originPath, targetPath)
  }

  const isPathExist = (path) => {
    return fs.existsSync(path)
  }

  const copyDir = (originPath, targetPath) => {
    fsExtra.copy(originPath, targetPath, (err) => {
      if (err) {
        console.log(err)
      }
    })
  }

  const mkStat = (originPath, fileDir, type) => {
    const statPath = `${originPath}/${fileDir}`
    const smbPath = `${originPath}/${smbThemeName}/${fileDir}`
    const auroraPath = `${originPath}/${auroraThemeName}/${fileDir}`

    if (!isPathExist(statPath)) {
      return
    }
    const data = fs.statSync(statPath)

    if (data.isDirectory()) {
      if (fileDir !== 'base' && fileDir !== 'theme') {
        if (fileDir === 'images') {
          copyDir(statPath, smbPath)
          copyDir(statPath, auroraPath)
        } else {
          isFileExist(originPath, fileDir, type)
        }
      } else {
        if (fileDir === 'index.less') {
          copyDir(statPath, smbPath)
          copyDir(statPath, auroraPath)
        }
      }
    } else {
      if (fileDir === 'index.less') {
        copyDir(statPath, smbPath)
        copyDir(statPath, auroraPath)
      }
    }
  }

  const isFileExist = (originPath, fileDir, type) => {
    const parentPath = `${originPath}${fileDir}`
    const path = `${parentPath}/index.${type}`
    const exist = fs.existsSync(path)
    if (exist) {
      if (type === 'less') {
        readComponentsFile(fileDir)
      } else if (type === 'js') {
        readThemeFile(fileDir)
      }
    }
  }

  const writeThemeIndexLess = (path, fileDir, themeName) => {
    const parentPath = `${originRootPath}${themeName}/${fileDir}`

    const writeTheme = () => {
      if (!isPathExist(path)) {
        writeFile(parentPath + '/index.less', emptyThemeContent.replace('{{}}', fileDir))
        return
      }

      const data = fs.statSync(path)

      if (!data.isDirectory()) {
        const dataStr = fs.readFileSync(path, { encoding: 'utf8' })
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
            scropedData += scopedContent.replace(/\{compName\}/g, cssScopedMap[fileDir]).replace(/\{var\}/g, newDataStr)
          }
        } else {
          scropedData += scopedContent.replace(/\{compName\}/g, fileDir).replace(/\{var\}/g, newDataStr)
        }

        writeFile(parentPath + '/index.less', scropedData)
      }
    }

    createDir(parentPath, writeTheme)
  }

  const readComponentsFile = (fileDir) => {
    if (fileDir === auroraThemeName || fileDir === smbThemeName) {
      return
    }

    const indexPath = `${originRootPath}/${fileDir}/${indexLessPath}`

    if (!isPathExist(indexPath)) {
      return
    }

    const smbPath = `${originRootPath}/${fileDir}/${smbThemeName}.js`
    const auroraPath = `${originRootPath}/${fileDir}/${auroraThemeName}.js`
    const dataStr = fs.readFileSync(indexPath, 'utf8')

    // // 写入smb-theme/**/index.less
    writeThemeIndexLess(smbPath, fileDir, smbThemeName)

    // 写入aurora-theme/**/index.less
    writeThemeIndexLess(auroraPath, fileDir, auroraThemeName)
  }

  const readThemeFile = (fileDir) => {
    const indexPath = `${originThemeRootPath}/${fileDir}/${indexJsPath}`

    if (!buildThemePathMap[fileDir]) {
      return
    }

    if (!isPathExist(indexPath)) {
      return
    }

    const dataStr = fs.readFileSync(indexPath, 'utf8')

    createDir(buildThemePathMap[fileDir])

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
  }

  const writeFile = (filePath, data) => {
    fs.writeFileSync(filePath, data, 'utf8')
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

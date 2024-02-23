/**
 * Copyright (c) 2022 - present TinyVue Authors.
 * Copyright (c) 2022 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 */

const fs = require('node:fs')
require('esbuild-register')

const { DEVUI_THEME_MAP } = require('./devui-theme-map')

const themes = ['impression-theme', 'infinity-theme', 'deep-theme', 'galaxy-theme']

function generateTheme(themeName) {
  const themeData = {}

  for (let mapItemKey of Object.keys(DEVUI_THEME_MAP)) {
    const mapItemValue = DEVUI_THEME_MAP[mapItemKey]
    if (mapItemValue.includes('ti-')) {
      const themeJson = require(`./${themeName}/devui.json`)
      for (let themeItemKey in themeJson) {
        if (themeItemKey === mapItemKey) {
          themeData[mapItemValue] = themeJson[themeItemKey]
        }
      }
    }
  }

  fs.writeFile(`./${themeName}/index.json`, JSON.stringify(themeData, null, '  '), (err) => {
    if (err) {
      throw new Error('写入文件出错！')
    }
  })
}

function main() {
  for (let theme of themes) {
    generateTheme(theme)
  }
}

main()

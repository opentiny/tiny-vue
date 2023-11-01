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

import definedComponents from './theme.config'

/**
 *  TinyVue主题切换类 负责CSS变量主题的装卸，主题元数据转换成主题数据
 *  使用示例：new TinyThemeTool(theme,'styleSheetId')
 *  @param {Object} theme 主题配置数据，结构如下：
 *  {
 *    id: 'tiny-infinity-theme',
 *    name: 'Infinity',
 *    cnName: '无限',
 *    data: {'ti-base-color': 'white'}
 *  }
 *  @param {String} styleSheetId style标签的id
 */

export default class TinyThemeTool {
  constructor(theme, styleSheetId = 'tinyThemeVariables') {
    // 当前主题
    this.currentTheme = null

    // 当前style标签元素
    this.contentElement = null

    // 当前style标签的id
    this.styleSheetId = null

    // 默认主题
    this.defaultTheme = {
      id: 'tiny-default-theme',
      name: 'Default',
      cnName: '默认',
      data: {}
    }

    let currentTheme = theme
    if (!theme) {
      currentTheme = this.defaultTheme
    }
    this.styleSheetId = styleSheetId
    this.changeTheme(currentTheme)
  }

  changeTheme(theme) {
    let currentTheme = theme
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      throw new TypeError('当前主题工具只支持浏览器环境')
    }
    if (!theme) {
      currentTheme = this.defaultTheme
    }
    this.currentTheme = currentTheme
    if (!this.contentElement) {
      const styleElement = document.getElementById(this.styleSheetId)
      if (styleElement) {
        this.contentElement = styleElement
      } else {
        this.contentElement = document.createElement('style')
        this.contentElement.id = this.styleSheetId
        document.head.appendChild(this.contentElement)
      }
    }
    this.contentElement.textContent = this.formatCSSVariables(currentTheme.data)

    this.contentElement.setAttribute('tiny-theme', this.currentTheme.id)
  }

  // 通过 `组件css变量`，来推导出组件名： 从 ti-checkbox-button-bg-color， 推导出 checkbox-button
  findClassName(name) {
    const compNameList = name.split('-')
    if (compNameList.length < 2) {
      return false
    }
    let compName = 'tiny-'
    const threeKey = `${compNameList[1]}-${compNameList[2]}-${compNameList[3]}`
    const twoKey = `${compNameList[1]}-${compNameList[2]}`

    // 优先三段式命名的组件名，优先级从高到低为三段-二段-一段
    compName += definedComponents[threeKey] || definedComponents[twoKey] || compNameList[1]

    // 提高权重，促使主题变换成功
    compName = `${compName}[class*=tiny]`
    return compName
  }

  formatCSSVariables(themeData) {
    const componentsMap = {}
    let rootCssVar = 'html:root {'
    let componentsCssVar = ''

    Object.keys(themeData).forEach((item) => {
      const isBaseCssVar = item.startsWith('ti-base') || item.startsWith('ti-common')
      if (isBaseCssVar) {
        rootCssVar += `--${item}:${themeData[item]};`
      } else {
        const classkey = this.findClassName(item)
        if (classkey) {
          if (componentsMap[classkey]) {
            componentsMap[classkey].push(`--${item}:${themeData[item]};`)
          } else {
            componentsMap[classkey] = [`--${item}:${themeData[item]};`]
          }
        }
      }
    })

    Object.keys(componentsMap).forEach((item) => {
      componentsCssVar += `.${item}{${componentsMap[item].join('')}}`
    })

    return `${rootCssVar}}${componentsCssVar}`
  }
}

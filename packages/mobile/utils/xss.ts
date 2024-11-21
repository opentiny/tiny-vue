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

import * as xss$1 from 'xss'

let getWindow = function () {
  return typeof window === 'undefined' ? global : window
}

let xssOptions = {
  enableAttrs: true,
  enableHtml: true,
  enableUrl: true,
  html: {
    whiteList: {
      a: ['class', 'style', 'contenteditable', 'data-id', 'data-title', 'data-size', 'data-last-modified'],
      address: ['class', 'style'],
      area: ['class', 'style'],
      article: ['class', 'style'],
      aside: ['class', 'style'],
      audio: ['class', 'style'],
      b: ['class', 'style'],
      bdi: ['class', 'style'],
      bdo: ['class', 'style'],
      big: ['class', 'style'],
      blockquote: ['class', 'style'],
      br: ['class', 'style'],
      caption: ['class', 'style'],
      center: ['class', 'style'],
      cite: ['class', 'style'],
      code: ['class', 'style'],
      col: ['class', 'style'],
      colgroup: ['class', 'style'],
      dd: ['class', 'style'],
      del: ['class', 'style'],
      details: ['class', 'style'],
      div: [
        'class',
        'style',
        'spellcheck',
        'data-gramm',
        'spellcheck',
        'data-mode',
        'data-position',
        'data-row',
        'data-cell',
        'data-rowspan',
        'data-colspan',
        'data-cell-bg',
        'data-parent-bg'
      ],
      dl: ['class', 'style'],
      dt: ['class', 'style'],
      em: ['class', 'style'],
      figcaption: ['class', 'style'],
      figure: ['class', 'style'],
      font: ['class', 'style'],
      footer: ['class', 'style'],
      h1: ['class', 'style'],
      h2: ['class', 'style'],
      h3: ['class', 'style'],
      h4: ['class', 'style'],
      h5: ['class', 'style'],
      h6: ['class', 'style'],
      header: ['class', 'style'],
      hr: ['class', 'style'],
      i: ['class', 'style', 'data-image-id', 'data-image'],
      img: ['class', 'style', 'devui-editorx-image', 'style', 'data-image-id'],
      input: ['class', 'style', 'data-formula', 'data-link', 'data-video'],
      ins: ['class', 'style'],
      li: ['class', 'style'],
      mark: ['class', 'style'],
      nav: ['class', 'style'],
      ol: ['class', 'style'],
      p: ['class', 'style'],
      pre: ['class', 'style'],
      s: ['class', 'style'],
      section: ['class', 'style'],
      small: ['class', 'style'],
      span: ['class', 'style', 'contenteditable', 'color', 'style'],
      sub: ['class', 'style'],
      summary: ['class', 'style'],
      sup: ['class', 'style'],
      strong: ['class', 'style'],
      strike: ['class', 'style'],
      svg: ['class', 'style', 't', 'viewBox', 'version', 'xmlns', 'p-id', 'xmlns:xlink'],
      path: ['d', 'p-id'],
      table: ['class', 'style'],
      tbody: ['class', 'style'],
      td: ['class', 'style', 'data-row', 'data-cell', 'data-cell-bg', 'data-parent-bg'],
      tfoot: ['class', 'style'],
      th: ['class', 'style'],
      thead: ['class', 'style'],
      tr: ['class', 'style', 'data-row'],
      tt: ['class', 'style'],
      u: ['class', 'style'],
      ul: ['class', 'style'],
      video: ['class', 'style']
    }
  }
}
let defaultWhiteList = (xss$1.getDefaultWhiteList && xss$1.getDefaultWhiteList()) || {}
xssOptions.html.whiteList = Object.assign(defaultWhiteList, xssOptions.html.whiteList)
let xssFilterHtml = new xss$1.FilterXSS(xssOptions.html)
let getXssOption = function () {
  return xssOptions
}
let setXssOption = function (option) {
  let _a
  let whiteList
  if (
    (_a = option === null || option === void 0 ? void 0 : option.html) === null || _a === void 0 ? void 0 : _a.whiteList
  ) {
    whiteList = Object.assign(xssOptions.html.whiteList, option.html.whiteList)
  }
  xssOptions = Object.assign(xssOptions, option)
  if (whiteList) {
    xssOptions.html.whiteList = whiteList
  }
  xssFilterHtml = new xss$1.FilterXSS(xssOptions.html)
}
let filterHtml = function (content) {
  if (!xssOptions.enableHtml || typeof content !== 'string') {
    return content
  }
  return xssFilterHtml.process(content)
}
let setFilterHtml = function (filter) {
  filterHtml = filter
}
let filterAttrs = function (content) {
  if (!xssOptions.enableAttrs || typeof content !== 'string') {
    return content
  }
  return content.replace(/<.*?>/gi, '').replace(/on[a-z]+=/gi, '')
}
let setFilterAttrs = function (filter) {
  filterAttrs = filter
}
let filterUrl = function (content) {
  if (!xssOptions.enableUrl || typeof content !== 'string') {
    return content
  }
  let filteredUrl = content.replace(/&#(\w+)(^\w|;)?/g, (match, dec) => String.fromCharCode(dec)).trim()
  if (!filteredUrl) {
    return ''
  }
  if (['.', '/'].includes(filteredUrl[0])) {
    return filteredUrl
  }
  let urlParse = filteredUrl.match(/^([^:]+):/gm)
  if (!urlParse) {
    return filteredUrl
  }
  if (/^([^\w]*)(javascript|data|vbscript)/im.test(urlParse[0])) {
    return ''
  }
  return filteredUrl
}
let setFilterUrl = function (filter) {
  filterUrl = filter
}
let index = {
  getXssOption,
  setXssOption,
  filterHtml,
  setFilterHtml,
  filterAttrs,
  setFilterAttrs,
  filterUrl,
  setFilterUrl
}

let xss = Object.freeze({
  __proto__: null,
  getXssOption,
  setXssOption,
  get filterHtml() {
    return filterHtml
  },
  setFilterHtml,
  get filterAttrs() {
    return filterAttrs
  },
  setFilterAttrs,
  get filterUrl() {
    return filterUrl
  },
  setFilterUrl,
  'default': index
})
let log = { logger: getWindow().console }
let def = { xss, log }

export { def as default, log, xss }

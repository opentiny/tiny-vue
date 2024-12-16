import * as xss from 'xss'

let xssOptions: any = {
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
      svg: ['class', 'style', 't', 'viewBox', 'viewbox', 'version', 'xmlns', 'p-id', 'xmlns:xlink'],
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

const defaultWhiteList = (xss.getDefaultWhiteList && xss.getDefaultWhiteList()) || {}

xssOptions.html.whiteList = Object.assign(defaultWhiteList, xssOptions.html.whiteList)

let xssFilterHtml = new xss.FilterXSS(xssOptions.html)

export const getXssOption = (): object => {
  return xssOptions
}

export const setXssOption = (option: any): void => {
  let whiteList

  if (option?.html?.whiteList) {
    whiteList = Object.assign(xssOptions.html.whiteList, option.html.whiteList)
  }

  xssOptions = Object.assign(xssOptions, option)

  if (whiteList) {
    xssOptions.html.whiteList = whiteList
  }

  xssFilterHtml = new xss.FilterXSS(xssOptions.html)
}

let filterHtml = (content: string): string => {
  if (!xssOptions.enableHtml || typeof content !== 'string') {
    return content
  }

  return xssFilterHtml.process(content)
}

export const setFilterHtml = (filter: (content: string) => string): void => {
  filterHtml = filter
}

let filterAttrs = (content: string) => {
  if (!xssOptions.enableAttrs || typeof content !== 'string') {
    return content
  }

  return content.replace(/<.*?>/gi, '').replace(/on[a-z]+=/gi, '')
}

export const setFilterAttrs = (filter: (content: string) => string) => {
  filterAttrs = filter
}

let filterUrl = (content: string) => {
  if (!xssOptions.enableUrl || typeof content !== 'string') {
    return content
  }

  const filteredUrl = content
    .replace(/&#(\w+)(^\w|;)?/g, (match, dec) => String.fromCharCode(dec))
    // eslint-disable-next-line no-control-regex
    .replace(/[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim, '')
    .trim()

  if (!filteredUrl) {
    return ''
  }

  if (['.', '/'].includes(filteredUrl[0])) {
    return filteredUrl
  }

  const urlParse = filteredUrl.match(/^([^:]+):/gm)

  if (!urlParse) {
    return filteredUrl
  }

  if (/^([^\w]*)(javascript|data|vbscript)/im.test(urlParse[0])) {
    return ''
  }

  return filteredUrl
}

export const setFilterUrl = (filter: (content: any) => any) => {
  filterUrl = filter
}

export default {
  getXssOption,
  setXssOption,
  filterHtml,
  setFilterHtml,
  filterAttrs,
  setFilterAttrs,
  filterUrl,
  setFilterUrl
}

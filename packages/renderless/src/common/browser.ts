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

const getIEVersion = () => {
  let version = 8
  if (!!document.addEventListener && !!window.performance) {
    version = 9
    if (!!window.atob && !!window.matchMedia) {
      version = 10
      if (!window.attachEvent && !document.all) {
        version = 11
      }
    }
  }
  return version
}

const isEdge = (browser) => {
  if (browser.chrome && ~navigator.userAgent.indexOf('Edg')) {
    browser.name = 'edge'
    browser.edge = true
    delete browser.chrome
  } else if (!document.documentMode && !!window.StyleMedia) {
    browser.name = 'edge'
    browser.edge = true
  }
}

export const isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && window.document === document

export default (() => {
  const browser = {
    name: undefined,
    version: undefined,
    isDoc: typeof document !== 'undefined',
    isMobile: false,
    isPC: true,
    isNode: typeof window === 'undefined'
  }

  if (isBrowser) {
    const isMobile = /(Android|webOS|iPhone|iPad|iPod|SymbianOS|BlackBerry|Windows Phone)/.test(navigator.userAgent)

    browser.isMobile = isMobile
    browser.isPC = !isMobile

    let matches

    if (!!window.chrome && (!!window.chrome.webstore || /^Google\b/.test(window.navigator.vendor))) {
      browser.name = 'chrome'
      browser.chrome = true
      matches = navigator.userAgent.match(/chrome\/(\d+)/i)
      browser.version = !!matches && !!matches[1] && parseInt(matches[1], 10)
      matches = undefined
    } else if (!!document.all || !!document.documentMode) {
      browser.name = 'ie'
      browser.version = getIEVersion()
      browser.ie = true
    } else if (typeof window.InstallTrigger !== 'undefined') {
      browser.name = 'firefox'
      browser.firefox = true
    } else if (Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0) {
      browser.name = 'safari'
      browser.safari = true
    } else if ((!!window.opr && !!window.opr.addons) || !!window.opera) {
      browser.name = 'opera'
      browser.opera = true
    }

    isEdge(browser)

    if (!~['ie', 'chrome'].indexOf(browser.name)) {
      const reg = browser.name + '/(\\d+)'
      matches = navigator.userAgent.match(new RegExp(reg, 'i'))
      browser.version = !!matches && !!matches[1] && parseInt(matches[1], 10)
      matches = undefined
    }

    if (browser.isDoc) {
      const bodyEl = document.body || document.documentElement;
      ['webkit', 'khtml', 'moz', 'ms', 'o'].forEach((core) => {
        browser['-' + core] = !!bodyEl[core + 'MatchesSelector']
      })
    }
  }

  return browser
})()

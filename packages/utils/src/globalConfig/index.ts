// 需要微前端的用户传入该变量
export const globalConfig = {
  viewportWindow: null // 获取真实视口的window，解决在微前端中某些bug
}

export const getViewportWindow = () => globalConfig.viewportWindow || window

export const isServer = typeof window === 'undefined'

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

/** 分析浏览器的版本信息 */
export const browserInfo = (() => {
  if (isServer) return null

  const browser = {
    name: '',
    version: 0,
    isDoc: typeof document !== 'undefined',
    isMobile: false,
    isPC: true,
    isNode: isServer,
    chrome: false,
    ie: false,
    firefox: false,
    safari: false,
    opera: false,
    edge: false
  }

  const isMobile = /(Android|webOS|iPhone|iPad|iPod|SymbianOS|BlackBerry|Windows Phone)/.test(navigator.userAgent)

  browser.isMobile = isMobile
  browser.isPC = !isMobile

  let matches

  // 整体的浏览器判断标准已过时
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
    // 过时的判断条件， 最新的ff中已经没有该属性。
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
    const bodyEl = document.body || document.documentElement
    ;['webkit', 'khtml', 'moz', 'ms', 'o'].forEach((core) => {
      browser['-' + core] = !!bodyEl[core + 'MatchesSelector']
    })
  }

  return browser
})()

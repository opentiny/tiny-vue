const baseUrl = import.meta.env.BASE_URL

/**
 * json clone， 会丢失函数等。
 * @param obj 普通对象或reactive对象
 */
const $clone = (target) => JSON.parse(JSON.stringify(target))

/**
 * 将目标字段分隔后，取相应位置的值
 * @example $split("/project/home","/",-1)   //取出home
 * @param target 目标字符串
 * @param splitor 分隔符
 * @param pos 取数位置，可为-1,-2
 */
const $split = (target, splitor = '/', pos = 0) => target.split(splitor).slice(pos)[0]

/**
 * 延时函数
 * @example $delay(300).then(()=>{   })
 */
const $delay = (time) => new Promise((resolve) => setTimeout(resolve, time))

/**
 * 空闲函数
 * @example $idle().then(()=>{   })
 */
const $idle = () => new Promise((resolve) => (window.requestIdleCallback || window.requestAnimationFrame)(resolve))

const $pub = (url) => {
  return baseUrl + url
}

/**
 * fetch组件库示例静态文件，包括markdown、示例源码和示例配置
 * @param {string} path
 * @returns
 */
const fetchDemosFile = (path) => {
  return fetch(baseUrl + path, {
    method: 'GET',
    headers: {
      'Content-Type': 'text/plain;charset=UTF-8'
    }
  }).then((res) => {
    if (res.ok) {
      return res.text().then((text) => {
        return text.replace(/(\$\{)?import\.meta\.env\.VITE_APP_BUILD_BASE_URL(\})?/g, (str) => {
          if (str.startsWith('$')) {
            return import.meta.env.VITE_APP_BUILD_BASE_URL
          } else {
            return `'${import.meta.env.VITE_APP_BUILD_BASE_URL}'`
          }
        })
      })
    } else {
      throw new Error(res.statusText)
    }
  })
}

export { $clone, $split, $delay, $idle, $pub, fetchDemosFile }

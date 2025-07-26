import Contributors from '@/data/contributors'
import ContributorMap from '@/data/contributorMap'
import { ZH_CN_LANG, EN_US_LANG, ES_LA_LANG, PT_BR_LANG, LANG_PATH_MAP } from '../const'

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
 * @example $delay(300).then(() =>{   })
 */
const $delay = (time) => new Promise((resolve) => setTimeout(resolve, time))

/**
 * 空闲函数
 * @example $idle().then(() =>{   })
 */
const $idle = () => new Promise((resolve) => (window.requestIdleCallback || window.requestAnimationFrame)(resolve))

const pubUrl = (url) => {
  return baseUrl + url
}

/**
 * fetch组件库示例静态文件，包括markdown、示例源码和示例配置
 * @param {string} path
 * @returns
 */
const fetchDemosFile = (path) => {
  const filePath = baseUrl + path
  return fetch(filePath, {
    method: 'GET',
    headers: {
      'Content-Type': 'text/plain;charset=UTF-8'
    }
  }).then((res) => {
    if (res.ok) {
      return res.text().then((text) => {
        // 处理相对路径引入
        text = text.replace(/import.+('|")((\.\/|\.\.\/).+)('|")/g, (...args) => {
          const [matchStr, , relativePath, type] = args
          const pathArr = filePath.split('/')
          if (type === './') {
            const relativeFilename = relativePath.replace('./', '')
            pathArr.splice(-1, 1, relativeFilename)
            return matchStr.replace(relativePath, pathArr.join('/'))
          } else if (type === '../') {
            const relativePathArr = relativePath.split('../')
            const len = relativePathArr.length
            pathArr.splice(-len)
            pathArr.push(relativePathArr[len - 1])
            return matchStr.replace(relativePath, pathArr.join('/'))
          } else {
            return matchStr
          }
        })
        // 处理静态资源路径
        text = text.replace(/(\$\{)?import\.meta\.env\.VITE_APP_BUILD_BASE_URL(\})?/g, (str) => {
          if (str.startsWith('$')) {
            return import.meta.env.VITE_APP_BUILD_BASE_URL
          } else {
            return `'${import.meta.env.VITE_APP_BUILD_BASE_URL}'`
          }
        })
        return text
      })
    } else {
      throw new Error(res.statusText)
    }
  })
}

/**
 * 获取组件的贡献者
 * @param {string} cmpId 组件id
 * @returns string[] 贡献者信息列表
 */
const getCmpContributors = (cmpId) => {
  const contributorIds = ContributorMap[cmpId]
  let contributorInfo = []
  if (contributorIds?.length) {
    contributorIds.forEach((id) => {
      let developer = Contributors.find((i) => i.id === id)
      if (developer) {
        contributorInfo.push(developer)
      }
    })
  }

  return contributorInfo
}

const getLocaleMode = () => {
  const { href, pathname } = location
  const DEFAULT_LANG = ZH_CN_LANG // 默认语言

  const langCheckMap = new Map([
    [
      EN_US_LANG,
      () => href.includes(`/${LANG_PATH_MAP[EN_US_LANG]}`) || pathname.includes(`/${LANG_PATH_MAP[EN_US_LANG]}/`)
    ],
    [
      ZH_CN_LANG,
      () => href.includes(`/${LANG_PATH_MAP[ZH_CN_LANG]}`) || pathname.includes(`/${LANG_PATH_MAP[ZH_CN_LANG]}/`)
    ],
    [
      ES_LA_LANG,
      () => href.includes(`/${LANG_PATH_MAP[ES_LA_LANG]}`) || pathname.includes(`/${LANG_PATH_MAP[ES_LA_LANG]}/`)
    ],
    [
      PT_BR_LANG,
      () => href.includes(`/${LANG_PATH_MAP[PT_BR_LANG]}`) || pathname.includes(`/${LANG_PATH_MAP[PT_BR_LANG]}/`)
    ]
  ])

  for (const [lang, checkFn] of langCheckMap) {
    if (checkFn()) return lang
  }

  return DEFAULT_LANG // 无匹配时返回默认
}

export { $clone, $split, $delay, $idle, pubUrl, fetchDemosFile, getCmpContributors, getLocaleMode }

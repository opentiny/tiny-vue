import { ref, watch } from 'vue'

function parse(str) {
  if (str === null) return undefined
  const type = str[0]
  const strVal = str.slice(1)
  // 对象时，有可能是Date, 否则反解析后统一是对象
  if (type === 'o' || type === 'b') {
    let val = JSON.parse(strVal)
    return typeof val === 'string' ? new Date(val) : val
  }
  if (type === 'n') return +Number(strVal)
  if (type === 's') return strVal
}

// 带前缀的保存值
function save(store, k, v) {
  const type = typeof v
  store.setItem(k, type === 'object' ? JSON.stringify(v) : v)
}

/**
 * 快速的保存值到 sessionStorage, localStorage.
 * 支持基本类型，时间，数组，对象,null，不存在的键值返回undefined 。
 * 不支持：Map,Set, 以及多级串联赋值，比如：$session.obj.name="abcd"
 */
function handler(storage) {
  return {
    get(target, propKey, receiver) {
      return storage.getItem(propKey)
    },
    set(target, propKey, value) {
      save(storage, propKey, value)
      return true
    }
  }
}

/** * 快速读写sessionStorage 示例： $session.abc="shen" */
const $session = new Proxy({}, handler(sessionStorage))

/** * 快速读写 localStorage 示例： $local.abc="shen" */
const $local = new Proxy({}, handler(localStorage))

/** * 全局共享值，刷新即丢失！  示例： $cache.abc="shen" */
const $cache = {}

const typeMatcher = { session: $session, local: $local, api: null }

/**
 * 用于记录用户行为,并保存到session,local 或api接口（api保存的功能还未实现）
 * 示例：useAutoStore("session","key1")
 *       useAutoStore("session","key2",100)
 *       useAutoStore("session","key2",$session.key2 || 100)
 * @param type 自动存储到的目标
 * @param key 存储时的key
 * @param defaultValue 默认值。
 * @returns 响应式ref
 */
const useAutoStore = (type, key, defaultValue) => {
  let refVar = ref(typeMatcher[type][key])
  watch(refVar, (curr, prev) => {
    typeMatcher[type][key] = curr
  })

  if (refVar.value === null) refVar.value = defaultValue
  return refVar
}

export { $session, $local, $cache, useAutoStore }

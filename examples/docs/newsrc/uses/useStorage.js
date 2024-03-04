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
  store.setItem(k, type[0] + (type === 'object' ? JSON.stringify(v) : v))
}

/**
 * 快速的保存值到 sessionStorage, localStorage.
 * 支持基本类型，时间，数组，对象,null，不存在的键值返回undefined 。
 * 不支持：Map,Set, 以及多级串联赋值，比如：$session.obj.name="abcd"
 */
function handler(storage) {
  return {
    get(target, propKey) {
      let val = storage.getItem(propKey)
      return parse(val)
    },
    set(target, propKey, value) {
      save(storage, propKey, value)
      return true
    }
  }
}

const typeMatcher = { session: null, local: null }

/**
 * 用于记录值到localStorage或 sessionStorage, 并保持数据的类型！
 * @ const $s = useStorage("session");
 * @ $s.abc="abc"
 * @param {*} type 存储到的目标  "session" || "local"
 * @returns Proxy对象
 */
export const useStorage = (type) =>
  typeMatcher[type] || //
  (typeMatcher[type] = new Proxy({}, handler(type === 'session' ? sessionStorage : localStorage)))

export const $session = useStorage('session')
export const $local = useStorage('local')

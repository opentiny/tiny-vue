// 代理obj,实现obj的响应式更新
export default function proxy(callBack) {
  return new Proxy(
    {},
    {
      get(_, prop) {
        return callBack()[prop]
      }
    }
  )
}

import { reactive, nextTick } from 'vue'

export function useMediaQuery(breakpoints, onChange) {
  let matches = reactive({}) // 格式为： { bp0:false, bp1:true,bp2:false}
  // 生成 query 表达式
  let start = 1
  let querys = []
  breakpoints.forEach((bp) => {
    querys.push(`(min-width:${start}px) and (max-width:${bp - 1}px)`)
    start = bp
  })
  querys.push(`(min-width:${start}px)`)
  let mqlList = querys.map((q) => window.matchMedia(q))
  // 添加所有监听, 通过Idx追踪位置
  mqlList.forEach((mql, idx) => {
    matches['bp' + idx] = mql.matches
    matches['range-bp' + idx] = querys[idx]
    mql.fn = (ev) => {
      matches['bp' + idx] = ev.matches
      ev.matches && nextTick(onChange)
    }
    mql.addEventListener('change', mql.fn)
  })
  function destory() {
    mqlList.forEach((mql) => mql.removeEventListener('change', mql.fn))
    mqlList = null
  }
  return { matches, destory }
}

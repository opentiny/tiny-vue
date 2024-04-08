// 绑定图表事件
export function event(chartInstance, event) {
  if (!event) return
  const queryKeys = Object.keys(event)
  queryKeys.forEach((qrKey) => {
    const eKeys = Object.keys(event[qrKey])
    eKeys.forEach((key) => {
      chartInstance.off(key)
      chartInstance.on(key, qrKey, function (params) {
        event[qrKey][key](params)
      })
    })
  })
}

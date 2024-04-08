/**
 * 从数据中拿出legend-data
 */
export function getLegendData(data) {
  return Object.keys(data)
}

/**
 * 从数据中拿出x轴的坐标数据
 */
export function getXAxisData(data) {
  const xAxisData = []
  const dataValues = Object.values(data)
  dataValues.forEach((item) => {
    item.forEach((val) => {
      if (!xAxisData.includes(val[0])) {
        xAxisData.push(val[0])
      }
    })
  })
  return xAxisData
}

/**
 * 从数据中拿出legend-data
 */
function ldata(data, xAxisKey) {
  const legendData = []
  if (data.length > 0) {
    const temp = data[0]
    for (const key in temp) {
      if (key !== xAxisKey) {
        legendData.push(key)
      }
    }
  }
  return legendData
}

export default ldata

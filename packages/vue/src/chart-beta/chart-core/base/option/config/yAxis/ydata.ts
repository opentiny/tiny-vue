/**
 * 从数据中拿出y轴的坐标数据
 */
function ydata(data, legendData) {
  const seriesData = {}
  legendData.forEach((legend) => {
    seriesData[legend] = []
  })
  data.forEach((item) => {
    legendData.forEach((legend) => {
      seriesData[legend].push(item[legend])
    })
  })
  return seriesData
}

export default ydata

/**
 * 从数据中拿出x轴的坐标数据
 */
function xdata(data, xAxisKey) {
  const xAxisData = []
  data.forEach((item) => {
    xAxisData.push(item[xAxisKey])
  })
  return xAxisData
}

export default xdata

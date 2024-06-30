import { isArray } from '../../util/type'

// 获取新的数据格式
const transformData = (origindata) => {
  const newData = {}
  const count = Object.keys(origindata[0]).length
  for (let i = 1; i < count; i++) {
    let arr = []
    origindata.forEach((key) => {
      let firstKey = Object.keys(key)[i]
      let firstValue = key[firstKey]
      arr.push(firstValue)
      newData[firstKey] = arr
    })
  }
  return newData
}

// 修改轴数据 data：图表数据 allowRange：允许轴的范围
const fluctuation = (data, allowRange) => {
  let min = Infinity
  let max = -Infinity
  const range = allowRange || [-Infinity, Infinity]
  const dataKeys = Object.keys(data)

  dataKeys.forEach((key) => {
    data[key].forEach((item) => {
      if (isArray(item)) {
        const arr = item.filter((t) => !isNaN(Number(t)) && Number(t) > range[0] && Number(t) < range[1])
        const curMin = Math.min(...arr)
        const curMax = Math.max(...arr)
        min = Math.min(min, curMin)
        max = Math.max(max, curMax)
      } else {
        const num = Number(item)
        if (num < range[0] || num > range[1]) {
          return
        }
        min = Math.min(min, num)
        max = Math.max(max, num)
      }
    })
  })

  let axisMin = Math.floor(min - ((max - min) / 5) * 4)
  if (min > 0 && axisMin < 0) {
    axisMin = 0
  }
  const axisMax = Math.ceil(max + (max - min) / 5)
  return [axisMin, axisMax]
}

export default fluctuation
export { transformData }

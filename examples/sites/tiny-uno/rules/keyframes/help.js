/**
 * 辅助方法
 * unit：从from中分离出的单位
 * mid：传入一个数字， 返回按百分比计算在 from~to中的位置值！
 * @param {string} from
 * @param {string} to
 * @returns Object:{ min,max,unit,mid}
 */
export default function (from, to) {
  let min = parseFloat(from)
  let max = parseFloat(to)
  let unit = from.replace(min.toString(), '')

  let mid = (v) => ((max - min) / 100) * v + min
  return {
    min,
    max,
    unit,
    mid
  }
}

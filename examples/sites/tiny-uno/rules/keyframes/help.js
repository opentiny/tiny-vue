/**
 *
 * @param {string} from
 * @param {string} to
 * @returns Object:{ min,max,unit}
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

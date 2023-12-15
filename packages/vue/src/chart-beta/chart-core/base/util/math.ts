/**
 * 百分比变成小数
 */
const percentToDecimal = (percent) => {
  return parseFloat(percent) / 100
}

/**
 * 已知两条边和他们的夹角，求另一条边的长度
 * @param {边长} a
 * @param {边长} b
 * @param {a&b的夹角} angle
 * return 另一条边的长度
 */
const getEdge = (a, b, angle) => {
  let edgeSqrt = a ** 2 + b ** 2 - 2 * a * b * Math.cos((angle / 180) * Math.PI)
  return Math.sqrt(edgeSqrt)
}

/**
 * 已知三条边的长度，求任意角的大小
 * @param {边长} a
 * @param {边长} b
 * @param {边长} c
 * return [b和c的夹角，a和c的夹角，b和a的夹角]
 */
const getAngle = (a, b, c) => {
  let cosA = (b * b + c * c - a * a) / (2 * b * c)
  let cosB = (a * a + c * c - b * b) / (2 * a * c)
  let cosC = (a * a + b * b - c * c) / (2 * a * b)
  let angleA = (Math.acos(cosA) * 180) / Math.PI
  let angleB = (Math.acos(cosB) * 180) / Math.PI
  let angleC = (Math.acos(cosC) * 180) / Math.PI
  return [angleA, angleB, angleC]
}

/**
 * 已知三个点位置，求任意角的大小
 * @param {点} a
 * @param {点} b
 * @param {点} c
 * return [c点所在角，a点所在角，b点所在角]
 */
const getAngleByPoints = (a, b, c) => {
  let edgeA = Math.sqrt((b.x - a.x) ** 2 + (b.y - a.y) ** 2)
  let edgeB = Math.sqrt((b.x - c.x) ** 2 + (b.y - c.y) ** 2)
  let edgeC = Math.sqrt((a.x - c.x) ** 2 + (a.y - c.y) ** 2)
  return getAngle(edgeA, edgeB, edgeC)
}

/**
 * 假设有三个点A(x1, y1), B(x2, y2), C(x3, y3)，则可以通过计算向量AB和向量AC的叉积来判断C点在AB线段的顺时针方向还是逆时针方向。
 * 如果AB × AC > 0，则C在AB的逆时针方向；如果AB × AC < 0，则C在AB的顺时针方向。 此处的顺逆针指的是ABC的连线方向
 * console.log(pointsDirection(0, 0, 1, 1, 2, 0)); // "顺时针方向"
 * console.log(pointsDirection(0, 0, 1, 1, 0, 2)); // "逆时针方向"
 * console.log(pointsDirection(0, 0, 1, 1, 1, 1)); // "点C在线段AB上"
 * 由于web中的坐标系和数学坐标系相反，因此顺逆的结论需要反过来
 */
const pointsDirection = (a, b, c) => {
  let { x: x1, y: y1 } = a
  let { x: x2, y: y2 } = b
  let { x: x3, y: y3 } = c
  // 计算向量AB和向量AC的坐标差
  const ABx = x2 - x1
  const ABy = y2 - y1
  const ACx = x3 - x1
  const ACy = y3 - y1
  // 计算向量AB和向量AC的叉积
  const crossProduct = ABx * ACy - ABy * ACx
  if (crossProduct > 0) {
    // "顺时针方向"
    return true
  } else if (crossProduct < 0) {
    // "逆时针方向"
    return false
  } else {
    // "点C在线段AB上"
    return false
  }
}

/**
 * 获取数组中的每项出现的次数
 */
const getItemCount = (arr, item) => {
  let count = 0
  arr.forEach((key) => {
    if (key === item) {
      count++
    }
  })
  return count
}

/**
 * 生成安全随机数算法
 */
const getRandom = () => {
  const array = new Uint32Array(1)
  self.crypto.getRandomValues(array)
  const random = parseFloat(`0.${array[0].toString()}`)
  return random
}

export { getEdge, getAngle, getRandom, getItemCount, getAngleByPoints, pointsDirection, percentToDecimal }

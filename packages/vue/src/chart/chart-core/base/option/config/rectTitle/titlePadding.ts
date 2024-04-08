/**
 * 当只有一个yAxis时，会转为使用title属性。
 * 默认title.padding为[20,0,0,20]
 * 默认yAxis.nameTextStyle.padding为[0,0,0,0]
 * 因此对padding值需要进行处理
 * @param {*} padding
 * @returns
 */
const completePadding = (padding) => {
  let titlePadding = []
  if (!padding || padding.length === 0) {
    titlePadding = [20, 0, 0, 20]
  } else if (padding.length === 1) {
    titlePadding = [padding[0] + 20, padding[0], padding[0], padding[0] + 20]
  } else if (padding.length === 2) {
    titlePadding = [padding[0] + 20, padding[1], padding[0], padding[1] + 20]
  } else if (padding.length === 3) {
    titlePadding = [padding[0] + 20, padding[1], padding[2], padding[1] + 20]
  } else {
    titlePadding = [padding[0] + 20, padding[1], padding[2], padding[3] + 20]
  }
  return titlePadding
}

export default completePadding

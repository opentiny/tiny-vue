//  基础圆角数值
const basicBorderRadius = 6

//  圆角梯度处理函数
function getRadius(radiusBase) {
  let radiusLG = radiusBase
  let radiusSM = radiusBase
  let radiusXS = radiusBase

  // radiusLG
  if (radiusBase >= 16) {
    radiusLG = 16
  } else if (radiusBase >= 6) {
    radiusLG = radiusBase + 2
  } else if (radiusBase >= 5) {
    radiusLG = radiusBase + 1
  }

  // radiusSM
  if (radiusBase >= 16) {
    radiusSM = 8
  } else if (radiusBase >= 14) {
    radiusSM = 7
  } else if (radiusBase >= 8) {
    radiusSM = 6
  } else if (radiusBase >= 7) {
    radiusSM = 5
  } else if (radiusBase >= 5) {
    radiusSM = 4
  }

  // radiusXS
  if (radiusBase >= 6) {
    radiusXS = 2
  } else if (radiusBase >= 2) {
    radiusXS = 1
  }

  return {
    borderRadiusZero: 0,
    borderRadius: radiusBase, // 6
    borderRadiusXS: radiusXS, // 2
    borderRadiusSM: radiusSM, // 4
    borderRadiusLG: radiusLG // 8
  }
}

const borderRadius = {
  ...getRadius(basicBorderRadius)
}

const border = {
  borderZero: 0,
  borderSM: 1,
  border: 2,
  borderLG: 3,
  borderXL: 4,
  borderXXL: 5,
  ...borderRadius
}

export default border

export { getRadius }

// //  基础圆角数值
// const basicBorderRadius = 6;

// //  圆角梯度处理函数
// function getRadius(radiusBase) {
//   let radiusLG = radiusBase;
//   let radiusSM = radiusBase;
//   let radiusXS = radiusBase;

//   // radiusLG
//   if (radiusBase < 6 && radiusBase >= 5) {
//     radiusLG = radiusBase + 1;
//   } else if (radiusBase < 16 && radiusBase >= 6) {
//     radiusLG = radiusBase + 2;
//   } else if (radiusBase >= 16) {
//     radiusLG = 16;
//   }

//   // radiusSM
//   if (radiusBase < 7 && radiusBase >= 5) {
//     radiusSM = 4;
//   } else if (radiusBase < 8 && radiusBase >= 7) {
//     radiusSM = 5;
//   } else if (radiusBase < 14 && radiusBase >= 8) {
//     radiusSM = 6;
//   } else if (radiusBase < 16 && radiusBase >= 14) {
//     radiusSM = 7;
//   } else if (radiusBase >= 16) {
//     radiusSM = 8;
//   }

//   // radiusXS
//   if (radiusBase < 6 && radiusBase >= 2) {
//     radiusXS = 1;
//   } else if (radiusBase >= 6) {
//     radiusXS = 2;
//   }

//   return {
//     borderRadiusZero: 0,
//     borderRadius: radiusBase, // 6
//     borderRadiusXS: radiusXS, // 2
//     borderRadiusSM: radiusSM, // 4
//     borderRadiusLG: radiusLG, // 8
//   };
// }

const borderRadius = {
  borderRadiusNone: 0,
  borderRadiusXs: 2,
  borderRadiusBase: 4,
  borderRadiusMd: 6,
  borderRadiusLg: 8,
  borderRadiusXl: 12,
  borderRadiusFull: 9999
}

export default borderRadius
// export { getRadius };

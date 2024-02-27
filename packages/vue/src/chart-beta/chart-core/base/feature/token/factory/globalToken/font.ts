// const basicFont = 14;

// // 字体大小的具体梯度处理
// function getFontSizes(base) {
//   const fontSizes = new Array(10).fill(null).map((_, index) => {
//     const i = index - 1;
//     const baseSize = base * 2.71828 ** (i / 5);
//     const intSize = index > 1 ? Math.floor(baseSize) : Math.ceil(baseSize);
//     // Convert to even
//     return Math.floor(intSize / 2) * 2;
//   });
//   fontSizes[1] = base;
//   return fontSizes.map(size => {
//     const height = size + 8;
//     return {
//       size,
//       lineHeight: height / size,
//     };
//   });
// }

// // 字体的梯度函数
// function getFont(fontSize) {
//   const fontSizePairs = getFontSizes(fontSize);
//   const fontSizes = fontSizePairs.map(pair => pair.size);
//   const lineHeights = fontSizePairs.map(pair => pair.lineHeight);
//   return {
//     fontSizeSM: fontSizes[0], // 12
//     fontSize: fontSizes[1], // 14
//     fontSizeLG: fontSizes[2], // 16
//     fontSizeXL: fontSizes[3], // 20
//     lineHeight: lineHeights[1], // 1.57
//     lineHeightLG: lineHeights[2], // 1.5
//     lineHeightSM: lineHeights[0], // 1.67
//   };
// }

const font = {
  fontSizeBase: 12,
  fontSizeMd: 14,
  fontSizeLg: 16,
  fontSizeXl: 18,
  fontSize2xl: 20,
  fontSize3xl: 24,
  fontSize4xl: 28,
  fontSize5xl: 30,
  fontSize6xl: 32,
  fontSize7xl: 36,
  fontSize8xl: 40,
};

export default font;
// export { getFont };

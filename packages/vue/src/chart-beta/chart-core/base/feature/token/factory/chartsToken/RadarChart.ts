export default function RadarChart(aliasToken) {
  const {
    colorBorder,
    borderWidthLG,
    symbolSizeLG,
    symbolSize,
    lineWidth,
    lineWidthNone,
    colorBgTransparent,
    symbolBorderWidth,
    symbolBorderWidthSM
  } = aliasToken

  return {
    symbolBorderWidth,
    symbolBorderWidthSM,
    symbolSizeLG,
    areaStyleColor: colorBgTransparent,
    symbolSize,
    border: borderWidthLG,
    lineWidth,
    lineWidthNone,
    borderColor: colorBorder
  }
}

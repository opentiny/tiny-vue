function getModelToken(mapToken) {
  const {
    colorPrimary,
    colorText,
    colorSubtext,
    colorAxisLine,
    colorAxisTickLine,
    colorAxisSplitLine,
    axisLineWidth,
    axisTickLineWidth,
    axisSplitLineWidth,
    axisLineType,
    axisTickLineType,
    axisSplitLineType,
    textFontSize,
    subtextFontSize,
    nameGap,
    titleGap,
    axisLabelGap,
    containerGap,
    labelLineLength,
    borderWidthZero,
    colorSubg,
    colorAxisPointerShadow,
    colorAxisPointerLine,
    axisPointerLineWidth,
    axisPointerLineType,
    legendGap,
    markLineWidth,
    markLineEmphasisWidth,
    colorTextTP,
    colorActive,
    colorInactive,
    itemBorderWidthSM,
    itemBorderRadiusSM,
    labelColor,
    labelFontSizeSM,
    colorItemTP,
    barWidth,
    colorBorderTP,
    symbolSize,
    symbolSizeSM,
    symbolSizeLG,
    colorAreaTP,
    richFontSizeSM,
    richLineHeight,
    richLineHeightSM,
    itemBorderWidth,
    lineStyleWidth,
    lineStyleWidthLG,
    lineStyleWidthZero,
    itemBorderWidthLG,
    itemBorderWidthZero,
    itemBorderColor,
    labelDistanceLG,
    symbolSizeXS,
    containerBoderRadius,
    barBorderRadiusZero,
    titleFontSize,
    subtitleFontSize
  } = mapToken
  return {
    // 主文本

    tooltipAxisPointerTextColor: colorText,
    //   圆盘图Serieslabel
    seriesLabelTextColor: colorText,

    // 次要文本

    titleTextColor: colorText,
    titleSubTextColor: colorSubtext,
    legendTextColor: colorSubtext,
    legendTextRichColor: colorSubtext,
    legendRichTextColor: colorSubtext,
    xAxisNameColor: colorSubtext,
    xAxisLabelColor: colorSubtext,
    yAxisNameColor: colorSubtext,
    yAxisLabelColor: colorSubtext,
    radarAxisNameColor: colorSubtext,
    radarAxisLabelColor: colorSubtext,
    angleAxisLabelColor: colorSubtext,
    // 轴线的name字号

    xAxisNameFontSize: textFontSize,
    yAxisNameFontSize: textFontSize,
    radiusAxisLabelColor: colorSubtext,
    tooltipTextFontSize: textFontSize,
    titleTextFontSize: titleFontSize,
    titleSubtextFontSize: subtitleFontSize,
    // 轴线的类型

    xAxisLineType: axisLineType,
    xAxisTickLineType: axisTickLineType,
    xAxisSplitLineType: axisSplitLineType,

    yAxisLineType: axisLineType,
    yAxisTickLineType: axisTickLineType,
    yAxisSplitLineType: axisSplitLineType,

    angleAxisLineType: axisLineType,
    angleAxisTickLineType: axisTickLineType,
    //* *********备注极坐标系的角度轴的分割线需要特别写成实线，和直角坐标系的使用有区别******
    angleAxisSplitLineType: axisLineType,
    radiusAxisLineType: axisLineType,
    radiusAxisTickLineType: axisTickLineType,
    radiusAxisSplitLineType: axisSplitLineType,
    tooltipAxisPointerLineType: axisPointerLineType,

    // 次要文本的字号

    xAxisLabelFontSize: subtextFontSize,
    yAxisLabelFontSize: subtextFontSize,
    legendTextFontSize: subtextFontSize,
    legendTextRichFontSize: subtextFontSize,
    angleAxisLabelFontSize: subtextFontSize,
    radiusAxisLabelFontSize: subtextFontSize,

    // 轴线的颜色

    xAxisLineColor: colorAxisLine,
    xAxisTickLineColor: colorAxisTickLine,
    xAxisSplitLineColor: colorAxisSplitLine,

    yAxisLineColor: colorAxisLine,
    yAxisTickLineColor: colorAxisTickLine,
    yAxisSplitLineColor: colorAxisSplitLine,

    radarAxisLineColor: colorAxisLine,
    radarAxisTickLineColor: colorAxisTickLine,
    radarSplitLineColor: colorAxisSplitLine,

    angleAxisLineColor: colorAxisLine,
    angleAxisTickLineColor: colorAxisTickLine,
    angleAxisSplitLineColor: colorAxisSplitLine,

    radiusAxisLineColor: colorAxisLine,
    radiusAxisTickLineColor: colorAxisTickLine,
    radiusAxisSplitLineColor: colorAxisSplitLine,

    tooltipAxisPointerLineColor: colorAxisPointerLine,
    //   圆盘图的serieslabel线
    seriesLabelLineColor: colorAxisSplitLine,

    // 轴线的粗细

    xAxisLineWidth: axisLineWidth,
    xAxisTickLineWidth: axisTickLineWidth,
    xAxisSplitLineWidth: axisSplitLineWidth,

    yAxisLineWidth: axisLineWidth,
    yAxisTickLineWidth: axisTickLineWidth,
    yAxisSplitLineWidth: axisSplitLineWidth,

    radarAxisLineWidth: axisLineWidth,
    radarAxisTickLineWidth: axisTickLineWidth,
    radarSplitLineWidth: axisSplitLineWidth,

    radiusAxisLineWidth: axisLineWidth,
    radiusAxisTickLineWidth: axisTickLineWidth,
    radiusAxisSplitLineWidth: axisSplitLineWidth,

    angleAxisLineWidth: axisLineWidth,
    angleAxisTickLineWidth: axisTickLineWidth,
    angleAxisSplitLineWidth: axisSplitLineWidth,

    tooltipAxisPointerLineWidth: axisPointerLineWidth,

    // 轴线名称的间距

    xAxisNameGap: nameGap,
    yAxisNameGap: nameGap,
    titleItemGap: titleGap,
    radiusAxisLabelGap: axisLabelGap,
    // 圆盘图的labelline的长度
    seriesLabelLineLength: labelLineLength, // 待讨论

    // tooltip的间距

    // 垂直
    tooltipSpaceVertical: containerGap,
    // 水平
    tooltipSpaceHorizontal: containerGap * 2,

    // 背景色

    tooltipBg: colorSubg,
    tooltipFontColor: colorText,
    tooltipBorderRaduis: containerBoderRadius,
    // 边框相关

    // 圆盘图
    seriesItemStyleBorderWidthZero: borderWidthZero,

    legendInactiveBorderWidth: borderWidthZero,
    legendBorderWidth: borderWidthZero,
    legendItemStyleBorderWidth: borderWidthZero,

    // 图例相关

    legendItemGap: legendGap,
    legendCircleItemWidth: 24,
    legendCircleItemHeight: 6,
    legendReactItemWidth: 12,
    legendReactItemHeight: 2,
    legendInactiveColor: colorInactive,
    legendTextPadding: [containerGap / 2, 0, 0, 0],
    legendTextRichPadding: [containerGap / 2, 0, 0, 0],
    legendPageTextColor: colorText,
    legendInactiveBorderColor: colorPrimary,
    legendPageIconInactiveColor: colorInactive,
    legendPageIconColor: colorActive,

    tooltipAxisPointerShadow: colorAxisPointerShadow,

    // 圆盘图
    seriesEmptyCircleColor: colorSubg,

    seriesMarkLineWidth: markLineWidth,

    seriesMarkLineEmphasisWidth: markLineEmphasisWidth,

    markPointLabelColor: colorTextTP,

    lineColorTp: colorTextTP,

    //  visualMap
    visualMapPiecesColor: colorTextTP,
    visualMapDashColor: colorPrimary,

    colorPrimary,

    // series系列
    itemBorderWidthSM,
    itemBorderWidthZero,
    itemBorderWidth,
    itemBorderWidthLG,
    itemBorderColor,
    itemBorderColorTP: colorBorderTP,
    itemBorderRadiusSM,
    itemBorderRadiusZero: barBorderRadiusZero,
    itemColorTP: colorItemTP,
    symbolSize,
    symbolSizeSM,
    symbolSizeLG,
    symbolSizeXS,
    labelColor,
    labelFontSizeSM,
    labelDistanceLG,
    richFontSizeSM,
    richLineHeight,
    richLineHeightSM,
    lineStyleWidth,
    lineStyleWidthLG,
    lineStyleWidthZero,
    lineColor: colorText,
    barWidth,
    areaColorTP: colorAreaTP,
    circleColor: colorAxisLine,
    markLineColorTP: colorBorderTP
  }
}

export default getModelToken
export { getModelToken as getCloudModelToken }

import { codeToRGB } from '../../../util/color'

function getMapToken(basicToken, light = true) {
  const {
    colorGray0,
    colorGray5,
    colorGray10,
    colorGray20,
    colorGray50,
    colorGray60,
    colorGray70,
    colorGray90,
    fontSizeSM,
    fontSize,
    lineWidth,
    lineWidthXL,
    lineWidthXXL,
    lineWidthXXXL,
    lineWidthSM,
    lineLength,
    spaceLG,
    space,
    lineTypeSolid,
    colorTP,
    borderZero,
    borderSM,
    borderRadiusSM,
    lineHeightSM,
    border,
    lineWidthLG,
    lineWidthZero,
    borderLG,
    fontSizeLG,
    borderRadiusZero
  } = basicToken

  return {
    // 主色
    colorPrimary: light ? colorGray0 : colorGray90, // 确定
    //  初级底色
    colorBg: light ? colorGray0 : colorGray90, // 确定
    // 次级背景色
    colorSubg: light ? colorGray0 : colorGray70,
    // 主要文本色
    colorText: light ? colorGray90 : colorGray5, // 确定
    // 次级文本色
    colorSubtext: light ? colorGray60 : colorGray20, // 确定
    // 禁用文本色
    colorDisabledText: light ? codeToRGB(colorGray90, 0.3) : codeToRGB(colorGray10, 0.3), // 确定
    // 控件激活色（legend相关的文本图标的颜色）
    colorActive: light ? colorGray60 : colorGray20, // 确定
    // 控件失效色（legend相关的文本图标失效的颜色）
    colorInactive: light ? codeToRGB(colorGray90, 0.3) : codeToRGB(colorGray10, 0.3), // 确定
    // 坐标轴线颜色
    colorAxisLine: light ? colorGray10 : codeToRGB(colorGray10, 0.1), // 确定
    // 刻度线颜色
    colorAxisTickLine: light ? colorGray10 : codeToRGB(colorGray10, 0.1), // 确定
    // 分隔线颜色
    colorAxisSplitLine: light ? codeToRGB(colorGray90, 0.1) : codeToRGB(colorGray10, 0.1), // 确定
    // 坐标轴指示器悬浮线
    colorAxisPointerLine: light ? colorGray20 : colorGray50, // 确定
    // 透明边框色
    colorBorderTP: colorTP,
    // 基础边框色
    colorBorder: colorGray0,
    // 文本透明
    colorTextTP: colorTP,
    // 面积区域透明
    colorAreaTP: colorTP,
    // 图元透明
    colorItemTP: colorTP,
    // 指示器阴影
    colorAxisPointerShadow: light ? codeToRGB(colorGray90, 0.08) : codeToRGB(colorGray10, 0.08),
    // 主文本字号
    textFontSize: fontSize, // 确定
    // 次级文本字号
    subtextFontSize: fontSizeSM, // 确定
    titleFontSize: fontSize * 2,
    subtitleFontSize: fontSizeLG,
    // 坐标轴线宽 2
    axisLineWidth: lineWidth, // 确定
    // 刻度线线宽 2
    axisTickLineWidth: lineWidth, // 确定
    // 分隔线线宽 1
    axisSplitLineWidth: lineWidthSM, // 确定
    // 坐标轴指示器的标线线宽 1
    axisPointerLineWidth: lineWidthSM,

    markLineWidth: lineWidthSM,

    markLineEmphasisWidth: lineWidthSM,

    axisLineType: lineTypeSolid,

    axisTickLineType: lineTypeSolid,

    axisSplitLineType: lineTypeSolid,

    axisPointerLineType: lineTypeSolid,

    borderWidthZero: borderZero,

    // 名称的间距
    nameGap: spaceLG,
    axisLabelGap: space,
    titleGap: spaceLG,
    // 容器的间距
    containerGap: spaceLG,
    containerBoderRadius: space,
    // 图例的间距
    legendGap: space * 7,
    // 图元大小
    symbolSize: 10,
    symbolSizeSM: 8,
    symbolSizeLG: 12,
    symbolSizeXS: 6,
    // 文本距离
    labelDistance: 10,
    labelDistanceLG: 24,
    // 柱条的宽度
    barWidth: lineWidthXL,
    // 柱条的宽度大
    barWidthLG: lineWidthXXL,
    // 堆叠进度图宽度 20
    barWidthStack: lineWidthXXXL,
    barBorderRadiusZero: borderRadiusZero,
    // series里面的labelLine的长度
    labelLineLength: lineLength,

    // series.itemStyle
    itemBorderWidthSM: borderSM,
    itemBorderWidth: border,
    itemBorderWidthLG: borderLG,
    itemBorderWidthZero: borderZero,
    itemBorderRadiusSM: borderRadiusSM,
    itemBorderColor: light ? colorGray0 : colorGray90,
    // series.label
    labelColor: light ? colorGray90 : colorGray5,
    labelFontSizeSM: fontSizeSM,
    // series.rich
    richFontSizeSM: fontSizeSM,
    richLineHeight: lineHeightSM * fontSizeSM,
    richLineHeightSM: fontSizeSM,
    // series.lineStyle
    lineStyleWidth: lineWidth,
    lineStyleWidthLG: lineWidthLG,
    lineStyleWidthZero: lineWidthZero
  }
}

export default getMapToken
export { getMapToken as getIctMapToken }

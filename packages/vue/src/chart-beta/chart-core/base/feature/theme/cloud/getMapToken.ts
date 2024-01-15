import { codeToRGB } from '../../../util/color'

function getMapToken(basicToken, light = true) {
  const {
    colorGray0,
    colorGray30,
    colorGray40,
    colorGray50,
    colorGray60,
    colorGray80,
    colorGray70,
    colorGray90,
    colorTP,
    fontSizeSM,
    fontSize,
    lineWidthXL,
    lineWidthXXL,
    lineWidthSM,
    lineLength,
    spaceLG,
    space,
    lineTypeSolid,
    lineTypeDashedLG,
    borderZero,
    lineWidthXXXL,
    borderSM,
    borderRadiusSM,
    lineHeightSM,
    border,
    lineWidthLG,
    lineWidthZero,
    borderLG,
    lineWidth,
    borderRadiusZero,
    fontSizeLG
  } = basicToken

  return {
    // 主色
    colorPrimary: light ? colorGray0 : colorGray0, // D
    // 初级底色
    colorBg: light ? colorGray0 : colorGray0, // D
    // 次级底色
    colorSubg: light ? colorGray0 : colorGray0, // D
    // 主要文本色
    colorText: light ? colorGray90 : colorGray40, // 确定
    // 次级文本色
    colorSubtext: light ? colorGray60 : colorGray50, // 确定
    // 禁用文本色
    colorDisabledText: light ? colorGray50 : colorGray50, // D
    // 控件激活色（legend相关的颜色）
    colorActive: light ? colorGray60 : colorGray60, // D
    // 控件失效色
    colorInactive: light ? colorGray50 : colorGray70, // 确定
    // 坐标轴线颜色
    colorAxisLine: light ? colorGray30 : colorGray80, // 确定
    // 刻度线颜色
    colorAxisTickLine: light ? colorGray30 : colorGray80, // 确定
    // 分隔线颜色
    colorAxisSplitLine: light ? colorGray30 : colorGray80, // 确定
    // 坐标轴指示器悬浮线
    colorAxisPointerLine: light ? colorGray60 : colorGray70, // 确定
    // 透明边框色
    colorBorderTP: colorTP,
    // 基础边框色
    colorBorder: light ? colorGray0 : colorGray0, // D
    // 文本透明
    colorTextTP: light ? colorTP : colorTP, // D
    // 面积区域透明
    colorAreaTP: light ? colorTP : colorTP, // D
    // 图元透明
    colorItemTP: light ? colorTP : colorTP, // D
    // 指示器阴影
    colorAxisPointerShadow: light ? codeToRGB(colorGray90, 0.08) : codeToRGB(colorGray90, 0.08), // D
    // 主文本字号
    textFontSize: fontSize, // 确定
    // 次级文本字号
    subtextFontSize: fontSizeSM, // 确定
    titleFontSize: fontSize * 2,
    subtitleFontSize: fontSizeLG,
    // 坐标轴 1
    axisLineWidth: lineWidthSM,
    //   刻度线  1
    axisTickLineWidth: lineWidthSM,
    //   分隔线
    axisSplitLineWidth: lineWidthSM,

    axisPointerLineWidth: lineWidthSM,

    markLineWidth: lineWidthSM,

    markLineEmphasisWidth: lineWidthSM,

    axisLineType: lineTypeSolid,

    axisTickLineType: lineTypeSolid,

    axisSplitLineType: lineTypeDashedLG,

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
    itemBorderColor: light ? colorGray0 : colorGray90, // 确定
    // series.label
    labelColor: light ? colorGray90 : colorGray40, // 确定
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
export { getMapToken as getCloudMapToken }

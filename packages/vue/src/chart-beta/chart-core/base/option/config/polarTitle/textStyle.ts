function textStyle(titleOption, pieMain) {
  if (pieMain?.textSize) {
    titleOption.textStyle.fontSize = pieMain.textSize
    titleOption.textStyle.color = pieMain.color || titleOption.textStyle.color
    titleOption.textStyle.fontWeight = pieMain.fontWeight || 'normal'
    titleOption.textStyle.lineHeight = Number(pieMain.textSize)
  }
  Object.assign(titleOption.textStyle, pieMain)
}

export default textStyle

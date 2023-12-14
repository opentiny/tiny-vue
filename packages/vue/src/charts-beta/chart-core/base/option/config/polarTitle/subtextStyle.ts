function subtextStyle(titleOption, pieSub) {
  if (pieSub?.textSize) {
    titleOption.subtextStyle.fontSize = pieSub.textSize
    titleOption.subtextStyle.color = pieSub.color || titleOption.subtextStyle.color
    titleOption.subtextStyle.fontWeight = pieSub.fontWeight || 'normal'
    titleOption.subtextStyle.lineHeight = pieSub.textSize * 1.2
  }
}

export default subtextStyle

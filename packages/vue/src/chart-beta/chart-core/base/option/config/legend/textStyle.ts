export default function textStyle(legend, textStyle) {
  if (textStyle) {
    legend.textStyle.rich = Object.assign(legend.textStyle.rich, textStyle.rich)
    legend.textStyle = Object.assign(legend.textStyle, textStyle)
  }
}
